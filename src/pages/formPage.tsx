import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Paper,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { CreditCard } from '@mui/icons-material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../components/checkoutForm/checkoutForm';
import { ProductCardComponent } from '../components/productCard/productCard';
import { HeaderCard } from '../components/headerCard/headerCard';
import { SuccessCard } from '../components/successCard/successCard';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY!);

const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundImage: 'url(/images/Portifolio.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(2),
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(4),
  position: 'relative',
  maxWidth: '60vh',
  marginTop: '50px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#b83143',
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const CheckoutPage = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);

  useEffect(() => {
    if (!paymentIntentId) return;

    const checkStatus = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/payment-status/${paymentIntentId}`);
        const json = await res.json();

        if (json.status === 'succeeded') {
          const mockOrderData = {
            order_id: `ORD_${Date.now()}`,
            status: json.status,
            customer: json.customer ?? {},
            amount: 79700,
          };
          handleSubmitSuccess(mockOrderData);
        }
      } catch (err) {
        console.error('Erro ao verificar status do pagamento:', err);
      }
    };

    const interval = setInterval(checkStatus, 3000);

    return () => clearInterval(interval);
  }, [paymentIntentId]);

  const handleSubmitSuccess = (data: any) => {
    setOrderData(data);
    setSubmitSuccess(true);
  };

  return (
    <MainContainer>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        {submitSuccess && orderData ? (
          <Container maxWidth="md" sx={{ pt: 4 }}>
            <SuccessCard orderData={orderData} />
          </Container>
        ) : (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 7 }}>
              
              <HeaderCard />
              <ProductCardComponent />
            </Grid>

            <Grid size={{ xs: 12, lg: 5}}>
              <FormContainer>
                <SectionTitle variant="h5">
                  <CreditCard />
                  Finalizar Pagamento
                </SectionTitle>

                <Typography variant="body1" sx={{ mb: 4, color: '#718096' }}>
                  Preencha seus dados para garantir seu acesso à mentoria
                </Typography>

                <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    onSubmitSuccess={handleSubmitSuccess} 
                    setPaymentIntentId={setPaymentIntentId} 
                  />
                </Elements>
              </FormContainer>
            </Grid>
          </Grid>
        )}
      </Container>
    </MainContainer>
  );
};

export default CheckoutPage;