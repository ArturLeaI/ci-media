import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { Instagram, Mail, Phone, MessageCircle, ArrowRight, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@c.i_media',
    href: 'https://instagram.com/c.i_media',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'c.i.comudigital@gmail.com',
    href: 'mailto:c.i.comudigital@gmail.com',
  },
  {
    icon: Phone,
    label: 'Ci Media',
    value: '(61) 99681-6438',
    href: 'tel:+5561996816438',
  },
];

const Contact = () => {

  return (
    <Box sx={{ py: 12, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{
        position: 'absolute',
        top: '25%',
        left: '25%',
        width: 256,
        height: 256,
        bgcolor: '#b83143',
        opacity: 0.1,
        borderRadius: '50%',
        filter: 'blur(64px)'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '25%',
        right: '25%',
        width: 384,
        height: 384,
        bgcolor: '#b83143',
        opacity: 0.05,
        borderRadius: '50%',
        filter: 'blur(64px)'
      }} />

      <Container sx={{ position: 'relative', zIndex: 10, bgcolor: 'brack'}}>
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" sx={{ color: '#e6e8da', fontWeight: 'bold', mb: 3 }}>
            Vamos Conectar!
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.7, fontSize: '1.25rem', maxWidth: 800, mx: 'auto' }}>
            Pronto para transformar sua presença digital em algo real e estratégico? Entre em contato conosco e descubra como destacar sua marca no digital com propósito.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{xs: 12, lg: 6}}>
            <Box display="flex" flexDirection="column" gap={3}>
              {contactMethods.map((method, index) => (
                <Box
                  key={index}
                  component="a"
                  href={method.href}
                  target={method.label === 'Instagram' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e6e8da',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(184,49,67,0.2)',
                      borderColor: '#b83143',
                    }
                  }}
                >
                  <Box sx={{ bgcolor: 'linear-gradient(to right, #b83143, #9d2a3a)', background: 'linear-gradient(to right, #b83143, #9d2a3a)', p: 2, borderRadius: 2, mr: 3 }}>
                    <method.icon color="white" size={24} />
                  </Box>
                  <Box flex={1}>
                    <Typography fontWeight="bold">{method.label}</Typography>
                    <Typography sx={{ color: 'white', opacity: 0.7 }}>{method.value}</Typography>
                  </Box>
                  <ArrowRight size={20} color="white" style={{ transition: 'transform 0.3s' }} />
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{xs: 12, lg: 6}}>
            <Box
              sx={{
                p: 6,
                borderRadius: 6,
                position: 'relative',
                background: 'linear-gradient(to bottom right, #b83143, #9d2a3a)',
                overflow: 'hidden',
                color: 'white'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('images/missao.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                  zIndex: 0
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h5" fontWeight="bold" mb={3}>
                  Pronto para começar?
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', mb: 5 }}>
                  Agende uma conversa gratuita e descubra como podemos transformar sua presença digital em resultados concretos.
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: 'white',
                      color: '#b83143',
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: '#e6e8da',
                        transform: 'scale(1.05)'
                      }
                    }}
                    endIcon={<ArrowRight size={20} />}
                  >
                    Solicitar Orçamento
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box mt={12} pt={6} borderTop="1px solid rgba(255,255,255,0.1)" textAlign="center">
          <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <MapPin size={18} color="#b83143" style={{ marginRight: 8 }} />
            <Typography sx={{ color: 'white', opacity: 0.7 }}>
              Brasília, DF - Brasil
            </Typography>
          </Box>
          <Typography sx={{ color: 'white', opacity: 0.6, mb: 2 }}>
            Desde 2023 criando presença digital com impacto real.
          </Typography>
          <Typography sx={{ color: '#e6e8da', fontWeight: 'bold', fontSize: '1.1rem' }}>
            🍒 Ci Media
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
