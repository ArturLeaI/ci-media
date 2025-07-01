// paymentHandlers.ts
import type { Stripe, StripeElements } from '@stripe/stripe-js';
import type { FormData } from '../checkoutForm/checkoutForm.types';
import { CardNumberElement } from '@stripe/react-stripe-js';

export const handlePayment = async ({
  stripe,
  elements,
  formData,
  amount
}: {
  stripe: Stripe;
  elements: StripeElements;
  formData: FormData;
  amount: number;
}) => {
  const cardNumberElement = elements.getElement(CardNumberElement);
  if (!cardNumberElement) throw new Error('Elemento do cartão não encontrado');

  const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: cardNumberElement,
    billing_details: {
      name: formData.nomeCompleto,
      email: formData.email,
      phone: formData.telefone,
      address: {
        line1: `${formData.rua}, ${formData.numero}`,
        line2: formData.complemento || undefined,
        city: formData.cidade,
        state: formData.estado,
        postal_code: formData.cep.replace(/\D/g, ''),
        country: 'BR',
      },
    },
  });

  if (stripeError) throw stripeError;

  const response = await fetch('http://localhost:3000/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      paymentMethodId: paymentMethod.id,
      amount,
      customer: {
        name: formData.nomeCompleto,
        email: formData.email,
        cpf: formData.cpf.replace(/\D/g, ''),
        phone: formData.telefone.replace(/\D/g, ''),
        address: {
          street: formData.rua,
          number: formData.numero,
          complement: formData.complemento,
          district: formData.bairro,
          city: formData.cidade,
          state: formData.estado,
          zip_code: formData.cep.replace(/\D/g, ''),
        },
      },
    }),
  });

  const result = await response.json();
  if (result.error) throw new Error(result.error);
  
  return {
    paymentIntentId: result.paymentIntentId,
    status: result.status
  };
};