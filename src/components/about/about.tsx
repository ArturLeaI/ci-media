import { Users, Target, Zap } from 'lucide-react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Box
      id="about-section"
      ref={ref}
      component={motion.div}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      sx={{ py: { xs: 10, md: 12 }, bgcolor: 'black', color: 'white' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Texto */}
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2.8rem', md: '4rem' },
                  color: '#e6e8da',
                  mb: 4,
                }}
              >
                Sobre Nós
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'white', opacity: 0.7, mb: 2 }}>
                A Ci Media é uma agência digital liderada por{' '}
                <Box component="span" sx={{ color: '#b83143', fontWeight: '600' }}>
                  Camilla Helen
                </Box>{' '}
                e{' '}
                <Box component="span" sx={{ color: '#b83143', fontWeight: '600' }}>
                  Ianca Gomes
                </Box>
                , especializada em posicionamento, presença digital e marketing estratégico.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'white', opacity: 0.7 }}>
                Ajudamos pessoas e marcas a comunicar com clareza, propósito e resultado nas redes sociais,
                transformando sua presença digital em algo real e estratégico.
              </Typography>

              {/* Pontos-chave */}
              <Grid
                container
                spacing={8}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 6 }}
              >
                {[
                  {
                    icon: <Users size={32} />,
                    title: 'Expertise',
                    desc: 'Anos de experiência transformando marcas no digital.',
                  },
                  {
                    icon: <Target size={32} />,
                    title: 'Estratégia',
                    desc: 'Posicionamento com propósito e foco em resultado',
                  },
                  {
                    icon: <Zap size={32} />,
                    title: 'Impacto',
                    desc: 'Resultados reais, mensuráveis e que fazem diferença.',
                  },
                ].map((item, idx) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={idx}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: '#b83143',
                        width: 64,
                        height: 64,
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ color: '#e6e8da', mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', opacity: 0.6 }}>
                      {item.desc}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Missão */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 6,
                overflow: 'hidden',
                p: 4,
                background: 'linear-gradient(to bottom right, #b83143, #9d2a3a)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('images/missao2.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.2,
                  zIndex: 1,
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                  Nossa Missão
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', opacity: 0.9 }}>
                  Transformar marcas e pessoas em presenças digitais autênticas, estratégicas e memoráveis.
                  Criamos conteúdo que conecta, posiciona e vende, sempre com propósito, verdade e aquela cereja do bolo que só a Ci Media sabe entregar.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
