import { z } from 'zod';
import { formSchema } from './checkoutForm.schema';

export type FormData = z.infer<typeof formSchema>;

export type CheckoutFormProps = {
  onSubmitSuccess: (data: any) => void;
  setPaymentIntentId: React.Dispatch<React.SetStateAction<string | null>>;
};