import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Slide, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Só atualiza se tiver diferença significativa no scroll (evita tremores)
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Slide appear={false} direction="down" in={showHeader}>
      <AppBar position="fixed" elevation={4} sx={{ backgroundColor: 'rgba(184, 49, 67)' }}>
        <Toolbar>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="h4"
              component="div"
              onClick={() => navigate('/')}
              sx={{
                fontFamily: "'Miskan', sans-serif",
                cursor: 'pointer',
              }}
            >
              Ci Media
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;
