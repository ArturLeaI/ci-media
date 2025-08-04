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
        'Conteúdo estratégico e gestão completa para suas redes, com foco em posicionamento e vendas.'
    },
    {
      icon: Users,
      title: 'Mentorias Personalizadas',
      description:
        'Acompanhamento individual pra você dominar sua presença digital e aplicar estratégias que convertem.'
    },
    {
      icon: Target,
      title: 'Tráfego Pago (Meta/Google)',
      description:
        'Campanhas inteligentes que maximizam seu ROI e colocam sua marca na frente de quem importa.'
    },
    {
      icon: Palette,
      title: 'Branding e Identidade Visual',
      description:
        'Criação de marcas fortes, alinhadas e memoráveis, que falam direto com seu público.',
    },
    {
      icon: Video,
      title: 'Produção de Conteúdo',
      description:
        'Reels, Stories, vídeos e fotos de alta qualidade que elevam sua comunicação.',
    },
    {
      icon: Star,
      title: 'Marketing de Influência & UGC',
      description:
        'Ações com influenciadores e conteúdos reais gerados por usuários para impulsionar sua marca.',
    },
    {
      icon: Camera,
      title: 'Coberturas e Media Day',
      description:
        'Conteúdo ao vivo e cobertura estratégica para eventos e lançamentos.',
    },
    {
      icon: TrendingUp,
      title: 'Análise e Performance',
      description:
        'Acompanhamento de métricas e otimizações constantes para garantir resultados cada vez melhore.',
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
            Transformamos sua presença digital com estratégias completas que aceleram resultados e posicionam sua marca do jeito certo no online.
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
