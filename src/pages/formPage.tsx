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
  Paper,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  Card,
  CardContent,
  Divider,
  Container,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
  AlertTitle
} from '@mui/material';
import {
  CreditCard,
  Security,
  CheckCircle,
  Star,
  People,
  Schedule,
  TrendingUp,
  EmojiEvents,
  FlashOn,
  AdsClick,
  School,
  Verified
} from '@mui/icons-material';

// Schema de validação
const formSchema = z.object({
  // Dados Pessoais
  nomeCompleto: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido (use o formato 000.000.000-00)'),
  telefone: z.string().regex(/^\(\d{2}\) \d{4,5}\-\d{4}$/, 'Telefone inválido (use o formato (00) 00000-0000)'),

  // Endereço
  cep: z.string().regex(/^\d{5}\-\d{3}$/, 'CEP inválido (use o formato 00000-000)'),
  rua: z.string().min(3, 'Rua deve ter pelo menos 3 caracteres'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().min(3, 'Bairro deve ter pelo menos 3 caracteres'),
  cidade: z.string().min(3, 'Cidade deve ter pelo menos 3 caracteres'),
  estado: z.string().length(2, 'Estado deve ter 2 caracteres'),

  // Dados do Cartão
  numeroCartao: z.string().regex(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido (use o formato 0000 0000 0000 0000)'),
  nomeCartao: z.string().min(3, 'Nome no cartão deve ter pelo menos 3 caracteres'),
  validadeCartao: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Validade inválida (use o formato MM/AA)'),
  cvv: z.string().regex(/^\d{3,4}$/, 'CVV inválido (deve ter 3 ou 4 dígitos)'),
});

type FormData = z.infer<typeof formSchema>;

// Styled Components
const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundImage: 'url(/images/Portifolio.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(2),
}));

const HeaderCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  marginTop:'50px',
  maxWidth:'75vh',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #b83143 10%, #ff8494 100%)',
  color: 'white',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  position: 'relative',
  maxWidth:'80vh',
  marginRight:'10vh',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  }
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(4),
  position: 'relative',
  maxWidth:'60vh',
  marginTop:'50px',
}));

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

const SuccessCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4),
  maxWidth: 600,
  margin: '0 auto',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(72, 187, 120, 0.3)',
}));

const PriceBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
}));

const FeatureList = styled(List)(({ theme }) => ({
  '& .MuiListItem-root': {
    paddingLeft: 0,
    paddingRight: 0,
  },
  '& .MuiListItemIcon-root': {
    minWidth: theme.spacing(4),
    color: 'rgba(255, 255, 255, 0.9)',
  },
  '& .MuiListItemText-primary': {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
  }
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: theme.spacing(2),
  '& > div': {
    textAlign: 'center',
    padding: theme.spacing(1),
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.spacing(1),
    backdropFilter: 'blur(5px)',
    minWidth: '80px',
  }
}));

const FormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simular tokenização do cartão
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simular processamento do pagamento
      await new Promise(resolve => setTimeout(resolve, 2000));

      const mockOrderData = {
        order_id: `ORD_${Date.now()}`,
        status: 'paid',
        customer: {
          name: data.nomeCompleto,
          email: data.email,
          cpf: data.cpf,
        },
        amount: 49700, // R$ 497,00 em centavos
      };

      setOrderData(mockOrderData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Funções de formatação
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

  const formatCartao = (value: string) => {
    const nums = value.replace(/\D/g, '').slice(0, 16);
    if (nums.length <= 4) return nums;
    if (nums.length <= 8) return `${nums.slice(0, 4)} ${nums.slice(4)}`;
    if (nums.length <= 12) return `${nums.slice(0, 4)} ${nums.slice(4, 8)} ${nums.slice(8)}`;
    return `${nums.slice(0, 4)} ${nums.slice(4, 8)} ${nums.slice(8, 12)} ${nums.slice(12)}`;
  };

  const formatValidade = (value: string) => {
    const nums = value.replace(/\D/g, '');
    if (nums.length === 0) return '';
    if (nums.length === 1 && parseInt(nums) > 1) return `0${nums}`;
    if (nums.length <= 2) return nums;
    return `${nums.slice(0, 2)}/${nums.slice(2, 4)}`;
  };

  const buscarEnderecoPorCEP = async () => {
    const cep = watch('cep')?.replace(/\D/g, '');
    if (cep?.length === 8) {
      try {
        // Simulação de busca de CEP
        setValue('rua', 'Rua Exemplo');
        setValue('bairro', 'Centro');
        setValue('cidade', 'São Paulo');
        setValue('estado', 'SP');
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  if (submitSuccess && orderData) {
    return (
      <MainContainer>
        <Container maxWidth="md" sx={{ pt: 4 }}>
          <SuccessCard>
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ mb: 3 }}>
                <Avatar sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2
                }}>
                  <CheckCircle sx={{ fontSize: 40, color: 'white' }} />
                </Avatar>
              </Box>

              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                Pagamento Confirmado!
              </Typography>

              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Obrigado pela sua compra! Você receberá um email com os detalhes da mentoria em breve.
              </Typography>

              <Paper sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                mb: 3
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Detalhes do Pedido
                </Typography>
                <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Nome:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{orderData.customer.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Email:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                      {orderData.customer.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>CPF:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{orderData.customer.cpf}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Pedido ID:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {orderData.order_id}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Status:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Chip
                      label="Pago"
                      color="success"
                      size="small"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>

              <Button
                variant="contained"
                onClick={() => window.location.reload()}
                sx={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.3)',
                  }
                }}
              >
                Fazer Nova Compra
              </Button>
            </CardContent>
          </SuccessCard>
        </Container>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Grid container spacing={3}>
          {/* Coluna Esquerda - Header e Product Cards */}
          <Grid item xs={12} lg={5}>
            {/* Header Card */}
            <HeaderCard>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{
                    background: 'linear-gradient(135deg, #b83143 0%, #ff8494 100%)',
                    width: 50,
                    height: 50
                  }}>
                    <TrendingUp />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2d3748' }}>
                      Mentoria
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#718096' }}>
                      Transforme seu negócio com estratégias comprovadas
                    </Typography>
                  </Box>
                </Box>
                <Chip
                  icon={<Security />}
                  label="Pagamento 100% Seguro"
                  color="success"
                  variant="outlined"
                  sx={{ fontWeight: 'bold' }}
                />
              </Box>
            </HeaderCard>

            {/* Product Card */}
            <ProductCard>
              <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header do Produto */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Star sx={{ color: '#ffd700' }} />
                    <Chip
                      label="OFERTA LIMITADA"
                      size="small"
                      sx={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </Box>
                  <PriceBox>
                    <Typography variant="body2" sx={{ textDecoration: 'line-through', opacity: 0.7 }}>
                      R$ 1.594,00
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      R$ 797,00
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#ffd700' }}>
                      50% de desconto
                    </Typography>
                  </PriceBox>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Mentoria Completa
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Aprenda as estratégias mais eficazes para criar campanhas publicitárias de sucesso e multiplicar seus resultados
                </Typography>

                {/* O que você vai aprender */}
                <Paper sx={{
                  p: 3,
                  mb: 3,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2
                }}>
                  <Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <AdsClick />
                    O que você vai aprender:
                  </Typography>

                  <FeatureList dense>
                    <ListItem>
                      <ListItemIcon>
                        <FlashOn />
                      </ListItemIcon>
                      <ListItemText primary="Presença com Propósito" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FlashOn />
                      </ListItemIcon>
                      <ListItemText primary="Conteúdo que Conecta" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FlashOn />
                      </ListItemIcon>
                      <ListItemText primary="Ferramentas e Técnicas" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FlashOn />
                      </ListItemIcon>
                      <ListItemText primary="Métrica e Crescimento" />
                    </ListItem>
                  </FeatureList>
                </Paper>

                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.3)' }} />

                {/* Total */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Total:
                  </Typography>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" sx={{ textDecoration: 'line-through', opacity: 0.7 }}>
                      R$ 1.594,00
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffd700' }}>
                      R$ 797,00
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </ProductCard>
          </Grid>

          {/* Coluna Direita - Formulário de Pagamento */}
          <Grid item xs={12} lg={7}>
            <FormContainer>
              <SectionTitle variant="h5">
                <CreditCard />
                Finalizar Pagamento
              </SectionTitle>

              <Typography variant="body1" sx={{ mb: 4, color: '#718096' }}>
                Preencha seus dados para garantir seu acesso à mentoria
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Dados Pessoais */}
                <Box sx={{ mb: 4 }}>
                  <SectionTitle variant="h6">
                    <School />
                    Dados Pessoais
                  </SectionTitle>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
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

                    <Grid item xs={12} sm={6}>
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

                    <Grid item xs={12} sm={6}>
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

                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={4}>
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

                    <Grid item xs={12} sm={8}>
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

                    <Grid item xs={12} sm={3}>
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

                    <Grid item xs={12} sm={9}>
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

                    <Grid item xs={12} sm={6}>
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

                    <Grid item xs={12} sm={4}>
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

                    <Grid item xs={12} sm={2}>
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

                {/* Dados do Cartão */}
                <Box sx={{ mb: 4 }}>
                  <SectionTitle variant="h6">
                    <CreditCard />
                    Dados do Cartão
                  </SectionTitle>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        label="Número do Cartão"
                        {...register('numeroCartao')}
                        onChange={(e) => {
                          const formattedValue = formatCartao(e.target.value);
                          e.target.value = formattedValue;
                          setValue('numeroCartao', formattedValue);
                        }}
                        error={!!errors.numeroCartao}
                        helperText={errors.numeroCartao?.message}
                        fullWidth
                        variant="outlined"
                        placeholder="0000 0000 0000 0000"
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

                    <Grid item xs={12}>
                      <TextField
                        label="Nome no Cartão"
                        {...register('nomeCartao')}
                        error={!!errors.nomeCartao}
                        helperText={errors.nomeCartao?.message}
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

                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Validade (MM/AA)"
                        {...register('validadeCartao')}
                        onChange={(e) => {
                          const formattedValue = formatValidade(e.target.value);
                          e.target.value = formattedValue;
                          setValue('validadeCartao', formattedValue);
                        }}
                        error={!!errors.validadeCartao}
                        helperText={errors.validadeCartao?.message}
                        fullWidth
                        variant="outlined"
                        placeholder="MM/AA"
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

                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="CVV"
                        type="password"
                        {...register('cvv')}
                        error={!!errors.cvv}
                        helperText={errors.cvv?.message}
                        fullWidth
                        variant="outlined"
                        placeholder="000"
                        inputProps={{ maxLength: 4 }}
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

                <SubmitButton
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
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
            </FormContainer>
          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default FormPage;