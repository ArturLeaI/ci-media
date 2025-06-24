import {
  Box,
  Typography,
  Paper,
  Chip,
  Avatar
} from '@mui/material';
import { Security, TrendingUp } from '@mui/icons-material';

export const HeaderCard = () => {
  return (
    <Paper sx={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: 2,
      padding: 3,
      marginBottom: 2,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      marginTop: '50px',
      maxWidth: '75vh',
    }}>
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
    </Paper>
  );
};