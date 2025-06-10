import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Slide, useScrollTrigger, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate =useNavigate()
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Slide appear={false} direction="down" in={true}>
      <AppBar position="fixed" elevation={4} sx={{ backgroundColor: 'rgba(184, 49, 67)'}}>
        <Toolbar>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
            <Typography
              variant="h4"
              component="div"
              onClick={() => navigate('/')}
              sx={{ fontFamily: "'Miskan', sans-serif", cursor: 'pointer', }}
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
