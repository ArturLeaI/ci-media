import { TrendingUp, Users, Heart, Star } from 'lucide-react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Rating,
} from '@mui/material';

const Results = () => {
  const stats = [
    {
      icon: Users,
      number: '500K+',
      label: 'Seguidores Gerados',
      color: 'linear-gradient(to right, #b83143, #9d2a3a)'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Média de Crescimento',
      color: 'linear-gradient(to right, #b83143, #9d2a3a)'
    },
    {
      icon: Heart,
      number: '10M+',
      label: 'Engajamento Total',
      color: 'linear-gradient(to right, #b83143, #9d2a3a)'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Satisfação dos Clientes',
      color: 'linear-gradient(to right, #b83143, #9d2a3a)'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empreendedora Digital',
      content: 'A Ci Media transformou completamente minha presença online. Em 6 meses, aumentei meu faturamento em 250% com as estratégias implementadas.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'João Santos',
      role: 'Coach de Vendas',
      content: 'O acompanhamento personalizado da mentoria me ajudou a definir meu posicionamento e criar conteúdo que realmente converte. Resultados incríveis!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Ana Costa',
      role: 'Consultora de Negócios',
      content: 'Profissionais excepcionais! A estratégia de conteúdo e tráfego pago desenvolvida pela equipe triplicou minha geração de leads.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];

  return (
    <Box py={12} sx={{ background: '#e6e8da' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" color="black" fontWeight="bold" gutterBottom>
            Resultados que falam por si
          </Typography>
          <Typography
            variant="h6"
            color="black"
            sx={{ opacity: 0.7, maxWidth: 700, mx: 'auto' }}
          >
            Nossos números refletem o impacto real que geramos para nossos clientes, transformando presença digital em resultados concretos.
          </Typography>
        </Box>

        <Grid container spacing={4} mb={10}>
          {stats.map((stat, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              <Box
                sx={{
                  background: stat.color,
                  borderRadius: 4,
                  p: 4,
                  textAlign: 'center',
                  color: '#fff',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <stat.icon style={{ width: 40, height: 40, marginBottom: 16 }} />
                <Typography variant="h4" fontWeight="bold">{stat.number}</Typography>
                <Typography>{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{xs:12, md:4}} key={index}>
              <Paper
                sx={{
                  borderRadius: 4,
                  p: 4,
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    borderColor: '#b83143',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mr: 2, border: '2px solid #b83143' }} />
                  <Box>
                    <Typography variant="subtitle1" color="#e6e8da" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="white" sx={{ opacity: 0.6 }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="white" sx={{ opacity: 0.7, fontStyle: 'italic' }}>
                  "{testimonial.content}"
                </Typography>
                <Rating value={5} readOnly sx={{ color: '#b83143', mt: 2 }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Results;
