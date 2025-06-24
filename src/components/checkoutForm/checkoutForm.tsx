import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Alert,
  AlertTitle,
  
  CircularProgress
} from '@mui/material';
import Grid from '@mui/material/Grid';

import { School, CreditCard, Security } from '@mui/icons-material';
import { useStripe, useElements, CardNumberElement } from '@stripe/react-stripe-js';
import CardFieldsForm from '../cardFields/cardFields';

const formSchema = z.object({
  nomeCompleto: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido (use o formato 000.000.000-00)'),
  telefone: z.string().regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/, 'Telefone inválido (use o formato (00) 00000-0000)'),
  cep: z.string().regex(/^\d{5}\-\d{3}$/, 'CEP inválido (use o formato 00000-000)'),
  rua: z.string().min(3, 'Rua deve ter pelo menos 3 caracteres'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().min(3, 'Bairro deve ter pelo menos 3 caracteres'),
  cidade: z.string().min(3, 'Cidade deve ter pelo menos 3 caracteres'),
  estado: z.string().length(2, 'Estado deve ter 2 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#b83143',
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #b83143 15%, #ff8494 100%)',
  color: 'white',
  padding: theme.spacing(2),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(1),
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: '0 4px 15px rgba(184, 49, 67, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #a02a3a 0%, #e6758a 100%)',
    boxShadow: '0 6px 20px rgba(184, 49, 67, 0.6)',
  },
  '&:disabled': {
    background: '#ccc',
  }
}));

type CheckoutFormProps = {
  onSubmitSuccess: (data: any) => void;
  setPaymentIntentId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const CheckoutForm = ({ onSubmitSuccess, setPaymentIntentId }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const formatCPF = (value: string) => {
    const nums = value.replace(/\D/g, '').slice(0, 11);
    if (nums.length <= 3) return nums;
    if (nums.length <= 6) return `${nums.slice(0, 3)}.${nums.slice(3)}`;
    if (nums.length <= 9) return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6)}`;
    return `${nums.slice(0, 3)}.${nums.slice(3, 6)}.${nums.slice(6, 9)}-${nums.slice(9)}`;
  };

  const formatTelefone = (value: string) => {
    const nums = value.replace(/\D/g, '').slice(0, 11);
    if (nums.length === 0) return '';
    if (nums.length <= 2) return `(${nums}`;
    if (nums.length <= 6) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    if (nums.length <= 10) return `(${nums.slice(0, 2)}) ${nums.slice(2, 6)}-${nums.slice(6)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const formatCEP = (value: string) => {
    const nums = value.replace(/\D/g, '').slice(0, 8);
    if (nums.length <= 5) return nums;
    return `${nums.slice(0, 5)}-${nums.slice(5)}`;
  };

  const buscarEnderecoPorCEP = async () => {
    const cep = watch('cep')?.replace(/\D/g, '');
    if (cep?.length === 8) {
      try {
        setValue('rua', 'Rua Exemplo');
        setValue('bairro', 'Centro');
        setValue('cidade', 'São Paulo');
        setValue('estado', 'SP');
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!stripe || !elements) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const cardNumberElement = elements.getElement(CardNumberElement)
      if (!cardNumberElement) throw new Error('Elemento do cartão não encontrado');

      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardNumberElement,
        billing_details: {
          name: data.nomeCompleto,
          email: data.email,
          phone: data.telefone,
          address: {
            line1: `${data.rua}, ${data.numero}`,
            line2: data.complemento || undefined,
            city: data.cidade,
            state: data.estado,
            postal_code: data.cep.replace(/\D/g, ''),
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
          amount: 79700,
          customer: {
            name: data.nomeCompleto,
            email: data.email,
            cpf: data.cpf.replace(/\D/g, ''),
            phone: data.telefone.replace(/\D/g, ''),
            address: {
              street: data.rua,
              number: data.numero,
              complement: data.complemento,
              district: data.bairro,
              city: data.cidade,
              state: data.estado,
              zip_code: data.cep.replace(/\D/g, ''),
            },
          },
        }),
      });

      const result = await response.json();

      if (result.error) {
        console.error(result.error);
        throw new Error(result.error);
      }

      const { paymentIntentId } = result;

      setPaymentIntentId(paymentIntentId);

      const mockOrderData = {
        order_id: `ORD_${Date.now()}`,
        status: paymentIntentId.status,
        customer: {
          name: data.nomeCompleto,
          email: data.email,
          cpf: data.cpf,
        },
        amount: 79700,
      };
      setPaymentIntentId(paymentIntentId);

      onSubmitSuccess(mockOrderData);
    } catch (err: any) {
      setError(err.message || 'Erro ao processar pagamento');
      console.error('Erro no pagamento:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 4 }}>
        <SectionTitle variant="h6">
          <School />
          Dados Pessoais
        </SectionTitle>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Nome Completo"
              {...register('nomeCompleto')}
              error={!!errors.nomeCompleto}
              helperText={errors.nomeCompleto?.message}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="CPF"
              {...register('cpf')}
              onChange={(e) => {
                const formattedValue = formatCPF(e.target.value);
                e.target.value = formattedValue;
                setValue('cpf', formattedValue);
              }}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
              fullWidth
              variant="outlined"
              placeholder="000.000.000-00"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Email"
              type="email"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Telefone"
              {...register('telefone')}
              onChange={(e) => {
                const formattedValue = formatTelefone(e.target.value);
                e.target.value = formattedValue;
                setValue('telefone', formattedValue);
              }}
              error={!!errors.telefone}
              helperText={errors.telefone?.message}
              fullWidth
              variant="outlined"
              placeholder="(00) 00000-0000"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Endereço */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle variant="h6">
          Endereço
        </SectionTitle>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              label="CEP"
              {...register('cep')}
              onChange={(e) => {
                const formattedValue = formatCEP(e.target.value);
                e.target.value = formattedValue;
                setValue('cep', formattedValue);
              }}
              onBlur={buscarEnderecoPorCEP}
              error={!!errors.cep}
              helperText={errors.cep?.message}
              fullWidth
              variant="outlined"
              placeholder="00000-000"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 8 }}>
            <TextField
              label="Rua"
              {...register('rua')}
              error={!!errors.rua}
              helperText={errors.rua?.message}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 3 }}>
            <TextField
              label="Número"
              {...register('numero')}
              error={!!errors.numero}
              helperText={errors.numero?.message}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 9 }}>
            <TextField
              label="Complemento (opcional)"
              {...register('complemento')}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Bairro"
              {...register('bairro')}
              error={!!errors.bairro}
              helperText={errors.bairro?.message}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Cidade"
              {...register('cidade')}
              error={!!errors.cidade}
              helperText={errors.cidade?.message}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 2 }}>
            <TextField
              label="Estado (UF)"
              {...register('estado')}
              error={!!errors.estado}
              helperText={errors.estado?.message}
              fullWidth
              variant="outlined"
              placeholder="SP"
              inputProps={{ maxLength: 2, style: { textTransform: 'uppercase' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#b83143',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#b83143',
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <SectionTitle variant="h6">
          <CreditCard />
          Dados do Cartão
        </SectionTitle>

        <Box sx={{ mb: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <CardFieldsForm error={error || undefined} />
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
      </Box>

      <SubmitButton
        type="submit"
        variant="contained"
        disabled={isSubmitting || !stripe}
        fullWidth
        size="large"
        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {isSubmitting ? 'Processando Pagamento...' : 'Finalizar Compra - R$ 797,00'}
      </SubmitButton>

      <Alert
        severity="info"
        sx={{
          mt: 3,
          background: 'rgba(184, 49, 67, 0.1)',
          '& .MuiAlert-icon': {
            color: '#b83143'
          }
        }}
        icon={<Security />}
      >
        <AlertTitle sx={{ color: '#b83143', fontWeight: 'bold' }}>
          Pagamento Seguro
        </AlertTitle>
        Seus dados estão protegidos com criptografia SSL de 256 bits
        <br />
        <Typography variant="caption" sx={{ color: '#718096' }}>
          Aceito em todo o Brasil • Sem taxas adicionais • Pagamento 100% seguro
        </Typography>
      </Alert>
    </form>
  );
};