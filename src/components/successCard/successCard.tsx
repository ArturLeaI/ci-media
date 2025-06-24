import {
  Box,
  Typography,
  Card,
  CardContent,
  Paper,
  Grid,
  Button,
  Avatar,
  Chip
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export const SuccessCard = ({ orderData }: { orderData: any }) => {
  return (
    <Card sx={{
      background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
      color: 'white',
      textAlign: 'center',
      padding: 4,
      maxWidth: 600,
      margin: '0 auto',
      borderRadius: 2,
      boxShadow: '0 8px 32px rgba(72, 187, 120, 0.3)',
    }}>
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
    </Card>
  );
};