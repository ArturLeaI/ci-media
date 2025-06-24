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

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#b83143',
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
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
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

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Ci Media. Todos os direitos reservados.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        CNPJ: 28.630.970/0001-90
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;