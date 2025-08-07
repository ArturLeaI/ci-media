import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'
import { Box, Alert, Typography, styled } from '@mui/material'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
}
const StripeInputWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 1.5),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#fff',
}))

export default function CardFieldsForm({ error }: { error?: string| null }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          mb: 3,
          p: 2,
          borderRadius: 1,
          display: 'grid',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Número do Cartão
          </Typography>
          <StripeInputWrapper>
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
          </StripeInputWrapper>
        </Box>

        <Box display="flex" gap={2}>
          <Box flex={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Validade
            </Typography>
            <StripeInputWrapper>
              <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
            </StripeInputWrapper>
          </Box>

          <Box flex={1}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              CVC
            </Typography>
            <StripeInputWrapper>
              <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
            </StripeInputWrapper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
