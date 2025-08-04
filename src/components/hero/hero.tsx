import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'black',
        overflow: 'hidden',
      }}
      ref={ref}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.1), rgba(184,49,67,0.2))',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('/images/about2.jpg')",
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: 3,
          maxWidth: 'lg',
        }}
        component={motion.div}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <Typography
          variant={isMobile ? 'h2' : 'h1'}
          sx={{
            fontWeight: 'bold',
            fontFamily: "'Miskan', sans-serif",
            color: 'white',
            mb: 1,
            letterSpacing: '-0.03em',
          }}
        >
          Ci Media
        </Typography>

        <Typography variant={isMobile ? 'h5' : 'h2'} sx={{ color: '#b83143', fontWeight: 300, mb: 4, fontFamily: 'Brittany, sans-serif' }}>
          Presença com Propósito
        </Typography>

        <Typography
          sx={{
            color: 'white',
            opacity: 0.8,
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            maxWidth: 720,
            mx: 'auto',
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          Mais do que ideias: criamos presença com propósito.
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            const target = document.getElementById('about-section');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          sx={{
            background: '#b83143',
            color: 'white',
            px: 6,
            py: 2,
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: 999,
            boxShadow: 10,
            '&:hover': {
              background: '#9d2a3a',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        >
          Conhecer Mais
        </Button>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          zIndex: 2,
        }}
      >
        <ChevronDown style={{ color: '#e6e8da', width: 24, height: 24 }} />
      </Box>
    </Box>
  );
};

export default Hero;
