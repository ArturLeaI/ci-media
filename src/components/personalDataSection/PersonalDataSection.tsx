// components/PersonalDataSection.tsx
import { Grid } from '@mui/material';
import { FormField } from '../formField/formField';
import { SectionTitle } from '../checkoutForm/checkoutForm.style';
import { formatCPF, formatTelefone } from '../checkoutForm/checkoutForm.formatters';
import type { Control, FieldErrors } from 'react-hook-form';
import type { FormData } from '../checkoutForm/checkoutForm.types';
import { School } from '@mui/icons-material';

interface PersonalDataSectionProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export const PersonalDataSection = ({ 
  control, 
  errors 
}: PersonalDataSectionProps) => (
  <>
    <SectionTitle variant="h6">
      <School />
      Dados Pessoais
    </SectionTitle>
    
    <Grid container spacing={3}>
      <Grid size={{xs:12, sm:6}}>
        <FormField
          name="nomeCompleto"
          label="Nome Completo"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:6}}>
        <FormField
          name="cpf"
          label="CPF"
          control={control}
          errors={errors}
          placeholder="000.000.000-00"
          format={formatCPF}
        />
      </Grid>

      <Grid size={{xs:12, sm:6}}>
        <FormField
          name="email"
          label="Email"
          type="email"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:6}}>
        <FormField
          name="telefone"
          label="Telefone"
          control={control}
          errors={errors}
          placeholder="(00) 00000-0000"
          format={formatTelefone}
        />
      </Grid>
    </Grid>
  </>
);