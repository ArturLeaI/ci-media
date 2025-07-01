import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Sparkles, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Mentorships = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ py: 12, bgcolor: '#e6e8da' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={10}>
          <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold', mb: 3 }}>
            Mentorias para quem quer ir além do conteúdo
          </Typography>
          <Typography variant="h6" sx={{ color: 'black', opacity: 0.7, maxWidth: 720, mx: 'auto' }}>
            Desenvolvemos programas de mentoria personalizados para diferentes níveis, 
            desde iniciantes até marcas que buscam performance estratégica.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Mentoria Presença com Propósito */}
          <Grid size={{xs:12, lg:6}}>
            <Box
              sx={{
                p: 5,
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(6px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  borderColor: '#b83143aa',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 128,
                  height: 128,
                  bgcolor: '#b8314310',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                }}
              />

              <Box display="flex" alignItems="center" mb={3}>
                <Box sx={{ bgcolor: '#b83143', borderRadius: '50%', p: 1.5, mr: 2 }}>
                  <Sparkles style={{ color: 'white', width: 24, height: 24 }} />
                </Box>
                <Typography variant="h5" sx={{ color: '#e6e8da', fontWeight: 'bold' }}>
                  Presença com Propósito
                </Typography>
              </Box>

              <Typography sx={{ color: 'white', opacity: 0.7, fontSize: '1.1rem', mb: 4 }}>
                Ideal para iniciantes e autônomos que querem construir uma presença digital 
                autêntica e estratégica do zero.
              </Typography>

              <Box mb={4}>
                {[ 
                  'Definição de posicionamento e propósito',
                  'Estratégia de conteúdo personalizada',
                  'Criação de identidade visual consistente',
                  'Planejamento de postagens e stories',
                  'Técnicas de engajamento orgânico',
                  'Acompanhamento semanal personalizado'
                ].map((item, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={1.5}>
                    <CheckCircle style={{ color: '#b83143', width: 20, height: 20, marginRight: 8 }} />
                    <Typography sx={{ color: 'white', opacity: 0.7 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                fullWidth
                sx={{
                  backgroundColor: '#b83143',
                  color: 'white',
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#9d2a3a',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out'
                  },
                }}
                endIcon={<ArrowRight style={{ transition: 'transform 0.3s ease-in-out' }} />}
                onClick={() => navigate('/mentoria')}
              >
                Começar Jornada
              </Button>
            </Box>
          </Grid>

          {/* Mentoria Impacto Real */}
          <Grid size={{xs:12, lg:6}}>
            <Box
              sx={{
                p: 5,
                borderRadius: 6,
                background: 'linear-gradient(to bottom right, #b83143, #9d2a3a)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 12px 30px rgba(184,49,67,0.3)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 128,
                  height: 128,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                }}
              />

              <Box display="flex" alignItems="center" mb={3}>
                <Box sx={{ bgcolor: 'white', borderRadius: '50%', p: 1.5, mr: 2 }}>
                  <Zap style={{ color: '#b83143', width: 24, height: 24 }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Impacto Real
                </Typography>
              </Box>

              <Typography sx={{ opacity: 0.9, fontSize: '1.1rem', mb: 4 }}>
                Para marcas e criadores que buscam performance estratégica, 
                crescimento acelerado e resultados mensuráveis.
              </Typography>

              <Box mb={4}>
                {[ 
                  'Análise completa de mercado e concorrência',
                  'Estratégias avançadas de growth hacking',
                  'Otimização de conversão e funil de vendas',
                  'Campanhas de tráfego pago otimizadas',
                  'Automação de processos de marketing',
                  'Métricas avançadas e relatórios de ROI'
                ].map((item, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={1.5}>
                    <CheckCircle style={{ color: 'white', width: 20, height: 20, marginRight: 8 }} />
                    <Typography sx={{ opacity: 0.9 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                fullWidth
                sx={{
                  backgroundColor: 'white',
                  color: '#b83143',
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#e6e8da',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out'
                  },
                }}
                endIcon={<ArrowRight style={{ transition: 'transform 0.3s ease-in-out' }} />}
              >
                Acelerar Crescimento
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentorships;