import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Clients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const clients = [
    { name: 'Taguatinga Shopping', logo: '/images/tgs.png' },
    { name: 'Park Shopping', logo: '/images/pks.jpg' },
    { name: 'GPS', logo: '/images/gps.jpg' },
    { name: 'Sunaika Bruna', logo: '/images/sunaika.jpg' },
    { name: 'Chao de Estrela', logo: '/images/chao.jpg' },
    { name: 'World Cann', logo: '/images/worldcann.jpg' },
    { name: 'Eu sou Noel', logo: '/images/noel.jpg' },
    { name: 'Priscila carvalho', logo: '/images/priscila.jpg' },
    { name: 'Barbrasa', logo: '/images/barbrasa.jpg' },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: 'black', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: '100%', px: 3 }}>
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h4"
            sx={{ color: '#e6e8da', fontWeight: 'bold', mb: 2 }}
          >
            Clientes que Confiam em Nós
          </Typography>
          <Typography
            sx={{ color: 'white', opacity: 0.7, fontSize: '1.1rem', maxWidth: 600, mx: 'auto' }}
          >
            Marcas de diversos segmentos que transformaram sua presença digital conosco
          </Typography>
        </Box>

        {/* Infinite Carousel */}
        <Box
          sx={{
            mt: 6,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'scroll 60s linear infinite',
              gap: 3,
              width: 'fit-content',
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <Box key={index} sx={{ flexShrink: 0, width: 160 }}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    p: 4,
                    backdropFilter: 'blur(4px)',
                    height: 128,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(184,49,67,0.2)',
                      borderColor: '#b83143',
                    },
                  }}
                >
                  <Box textAlign="center">
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        mb: 1.5,
                        borderRadius: 2,
                        background: 'linear-gradient(to bottom right, #b83143, #9d2a3a)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {client.logo.includes('/images') ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      ) : (
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
                          {client.logo}
                        </Typography>
                      )}
                    </Box>
                    <Typography sx={{ color: '#e6e8da', fontWeight: 600, fontSize: '0.9rem' }}>
                      {client.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Estatísticas */}
        <Box mt={10} textAlign="center">
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              px: 6,
              py: 3,
              borderRadius: 999,
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
            }}
          >
            {[
              { label: 'Clientes Ativos', value: '50+' },
              { label: 'Anos de Experiência', value: '3+' },
              { label: 'Setores Atendidos', value: '15+' },
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <Box textAlign="center">
                  <Typography sx={{ color: '#b83143', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: 'white', opacity: 0.7, fontSize: '0.875rem' }}>
                    {item.label}
                  </Typography>
                </Box>
                {idx < 2 && <Box sx={{ width: 2, height: 32, bgcolor: 'rgba(255,255,255,0.2)' }} />}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default Clients;