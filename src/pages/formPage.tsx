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
  Divider
} from '@mui/material';
// Definindo o schema de validação com Zod (mesmo do anterior)
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

const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(4),
  maxWidth: 800,
  margin: '0 auto',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#b83143',
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#b83143',
  color: 'white',
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#9a2938',
  },
}));

const SuccessCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#e6e8da',
  color: '#000000',
  textAlign: 'center',
  padding: theme.spacing(4),
  maxWidth: 600,
  margin: '0 auto',
}));

const FormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Dados enviados:', data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Funções de formatação (mesmas do anterior)
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
        console.log(`Buscando endereço para CEP: ${cep}`);
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

  if (submitSuccess) {
    return (
      <Box sx={{ backgroundColor: '#e6e8da', minHeight: '100vh', p: 4 }}>
        <SuccessCard>
          <CardContent>
            <Typography variant="h4" sx={{ color: '#b83143', mb: 2 }} gutterBottom>
              Cadastro realizado com sucesso!
            </Typography>
            <Typography variant="body1">
              Obrigado por se cadastrar. Seus dados foram recebidos com sucesso.
            </Typography>
          </CardContent>
        </SuccessCard>
      </Box>
    );
  }

  return (
    <Box sx={{
      backgroundImage: 'url(/images/intro.png)',
      minHeight: '100vh',
      p: 4,
      backgroundSize: 'cover',
      overflow: 'hidden',
      height: '100%',
      margin: '0',
      padding: '0'

    }}>
        <FormContainer sx={{
          borderRadius: 5,
          p: 3,
          top: '15%',
          position: 'absolute',
          right: '10%',
          backgroundColor: '#e6e8da',
          maxHeight: '75vh',        // ou 100vh menos o padding
          overflowY: 'auto',
          maxWidth: '79vh'
        }}>
          <SectionTitle variant="h4" gutterBottom>
            Formulário de Cadastro
          </SectionTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Seção Dados Pessoais */}
            <Box component="fieldset" sx={{ border: 'none', p: 0, m: 0 }}>
              <FormLabel component="legend" sx={{ backgroundColor: '#e6e8da', color: '#b83143', mb: 3, fontWeight: 'bold' }}>
                Dados Pessoais
              </FormLabel>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Nome Completo"
                    {...register('nomeCompleto')}
                    error={!!errors.nomeCompleto}
                    helperText={errors.nomeCompleto?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Email"
                    type="email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
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
                    margin="normal"
                    placeholder="000.000.000-00"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
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
                    margin="normal"
                    placeholder="(00) 00000-0000"
                  />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 3, backgroundColor: '#000000' }} />

            {/* Seção Endereço */}
            <Box component="fieldset" sx={{ border: 'none', p: 0, m: 0 }}>
              <FormLabel component="legend" sx={{ color: '#b83143', mb: 2, fontWeight: 'bold' }}>
                Endereço
              </FormLabel>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
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
                    margin="normal"
                    placeholder="00000-000"
                  />
                </Grid>

                <Grid item xs={12} sm={8}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Rua"
                    {...register('rua')}
                    error={!!errors.rua}
                    helperText={errors.rua?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Número"
                    {...register('numero')}
                    error={!!errors.numero}
                    helperText={errors.numero?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Complemento (opcional)"
                    {...register('complemento')}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Bairro"
                    {...register('bairro')}
                    error={!!errors.bairro}
                    helperText={errors.bairro?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Cidade"
                    {...register('cidade')}
                    error={!!errors.cidade}
                    helperText={errors.cidade?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Estado (UF)"
                    {...register('estado')}
                    error={!!errors.estado}
                    helperText={errors.estado?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    placeholder="SP"
                    inputProps={{ maxLength: 2, style: { textTransform: 'uppercase' } }}
                  />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 3, backgroundColor: '#000000' }} />

            {/* Seção Dados do Cartão */}
            <Box component="form" sx={{ border: 'none', p: 0, m: 0 }}>
              <FormLabel component="legend" sx={{ color: '#b83143', mb: 3, fontWeight: 'bold' }}>
                Dados do Cartão
              </FormLabel>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
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
                    margin="normal"
                    placeholder="0000 0000 0000 0000"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="Nome no Cartão"
                    {...register('nomeCartao')}
                    error={!!errors.nomeCartao}
                    helperText={errors.nomeCartao?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
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
                    margin="normal"
                    placeholder="MM/AA"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      '& label.Mui-focused': {
                        color: '#b83143',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#b83143',
                        },
                      },
                    }}
                    label="CVV"
                    type="password"
                    {...register('cvv')}
                    error={!!errors.cvv}
                    helperText={errors.cvv?.message}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    placeholder="000"
                    inputProps={{ maxLength: 4 }}
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
            >
              {isSubmitting ? 'Enviando...' : 'Cadastrar'}
            </SubmitButton>
          </form>
        </FormContainer>
    </Box>
  );
}
export default FormPage