import {
  Instagram,
  Users,
  Target,
  Palette,
  Video,
  Star,
  Camera,
  TrendingUp,
} from 'lucide-react';
import { Box, Grid, Typography, Paper, useTheme, Avatar } from '@mui/material';

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      icon: Instagram,
      title: 'Gestão de Redes Sociais',
      description:
        'Criação e gestão completa de conteúdo para suas redes sociais com estratégia focada em resultados.',
    },
    {
      icon: Users,
      title: 'Mentorias Personalizadas',
      description:
        'Acompanhamento individual para desenvolver sua presença digital e estratégias de marketing.',
    },
    {
      icon: Target,
      title: 'Tráfego Pago (Meta/Google)',
      description:
        'Campanhas publicitárias otimizadas para maximizar seu retorno sobre investimento.',
    },
    {
      icon: Palette,
      title: 'Branding e Identidade Visual',
      description:
        'Desenvolvimento de marca forte e consistente que conecta com seu público-alvo.',
    },
    {
      icon: Video,
      title: 'Produção de Conteúdo',
      description:
        'Criação de Reels, Stories, Vídeos e conteúdo visual de alta qualidade.',
    },
    {
      icon: Star,
      title: 'Marketing de Influência & UGC',
      description:
        'Estratégias de influenciadores e conteúdo gerado por usuários para amplificar sua marca.',
    },
    {
      icon: Camera,
      title: 'Coberturas e Media Day',
      description:
        'Cobertura profissional de eventos e criação de conteúdo para suas campanhas.',
    },
    {
      icon: TrendingUp,
      title: 'Análise e Performance',
      description:
        'Monitoramento e otimização contínua baseada em dados e métricas de performance.',
    },
  ];

  return (
    <Box py={12} bgcolor="#e6e8da">
      <Box maxWidth="lg" mx="auto" px={2}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#000000"
            gutterBottom
          >
            Nossas Soluções em Marketing Digital
          </Typography>
          <Typography variant="h6" color="#000000" sx={{ opacity: 0.7 }}>
            Oferecemos um conjunto completo de serviços para transformar sua presença
            digital e acelerar seus resultados no mundo online.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{xs:12, sm:6, md:4, lg:3}} key={index}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: 'rgba(0,0,0,0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  p: 4,
                  height: '100%',
                  backdropFilter: 'blur(6px)',
                  transition: '0.3s',
                  '&:hover': {
                    borderColor: '#b83143',
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 20px rgba(184,49,67,0.2)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#b83143',
                    width: 64,
                    height: 64,
                    mb: 2,
                    '&:hover': { bgcolor: '#9d2a3a' },
                    transition: '0.3s',
                  }}
                >
                  <service.icon size={28} color="#fff" />
                </Avatar>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#e6e8da"
                  gutterBottom
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="white" sx={{ opacity: 0.6 }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
