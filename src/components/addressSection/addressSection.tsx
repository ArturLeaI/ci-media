// components/AddressSection.tsx
import { Box, Grid } from '@mui/material';
import { FormField } from '../formField/formField';
import { SectionTitle } from '../checkoutForm/checkoutForm.style';

type AddressSectionProps = {
  control: any;
  errors: any;
  buscarEnderecoPorCEP: () => void;
  formatCEP: (value: string) => string;
};

export const AddressSection = ({ 
  control, 
  errors, 
  buscarEnderecoPorCEP,
  formatCEP
}: AddressSectionProps) => (
  <Box sx={{ mb: 4 }}>
    <SectionTitle variant="h6">
      Endereço
    </SectionTitle>

    <Grid container spacing={3}>
      <Grid size={{xs:12, sm:4}}>
        <FormField
          name="cep"
          label="CEP"
          control={control}
          errors={errors}
          placeholder="00000-000"
          format={formatCEP}
          onBlur={buscarEnderecoPorCEP}
        />
      </Grid>

      <Grid size={{xs:12, sm:8}}>
        <FormField
          name="rua"
          label="Rua"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:3}}>
        <FormField
          name="numero"
          label="Número"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:9}}>
        <FormField
          name="complemento"
          label="Complemento (opcional)"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:6}}>
        <FormField
          name="bairro"
          label="Bairro"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:4}}>
        <FormField
          name="cidade"
          label="Cidade"
          control={control}
          errors={errors}
        />
      </Grid>

      <Grid size={{xs:12, sm:2}}>
        <FormField
          name="estado"
          label="Estado (UF)"
          control={control}
          errors={errors}
          placeholder="SP"
          inputProps={{ 
            maxLength: 2, 
            style: { textTransform: 'uppercase' } 
          }}
        />
      </Grid>
    </Grid>
  </Box>
);