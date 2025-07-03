import {
    Box,
    Container,
    Typography,
    IconButton
} from '@mui/material';
import {
    Instagram,
    LinkedIn,
    Email,
    Phone,
} from '@mui/icons-material';
import { FaTiktok } from 'react-icons/fa';
import { MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'black',
                color: 'white',
                py: 4,
                width: '100%',
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 4
                    }}
                >
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Contato
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Email fontSize="small" />
                            <Typography variant="body2">c.i.comudigital@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Phone fontSize="small" />
                            <Typography variant="body2">(61) 9681-6438</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Redes Sociais
                        </Typography>
                        <Box>
                            <IconButton
                                color="inherit"
                                href="https://www.instagram.com/c.i_media?igsh=MW95bHk0dDBsaHh6cA== "
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="#"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <LinkedIn />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="#"
                                target="_blank"
                                aria-label="TikTok"
                            >
                                <FaTiktok />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Box mt={3} pt={3} borderTop="1px solid rgba(255,255,255,0.1)" textAlign="center">
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                        <MapPin size={18} color="#b83143" style={{ marginRight: 8 }} />
                        <Typography sx={{ color: 'white', opacity: 0.7 }}>
                            Brasília, DF - Brasil
                        </Typography>
                    </Box>
                    <Typography sx={{ color: 'white', opacity: 0.6, mb: 2 }}>
                        Transformando presença digital em impacto real desde 2022
                    </Typography>
                    <Typography sx={{ color: '#e6e8da', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Ci Media - Presença com Propósito
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;