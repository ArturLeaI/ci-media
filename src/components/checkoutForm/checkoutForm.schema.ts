import * as z from 'zod';

export const formSchema = z.object({
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