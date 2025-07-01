import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#b83143',
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
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