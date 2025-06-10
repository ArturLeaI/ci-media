import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography, useTheme, useMediaQuery, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MentoringPage: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const navigate = useNavigate();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* Seção 1: Capa com fundo e título */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/images/intro.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                    height: { xs: '100vh', sm: '90vh', md: '100vh' },
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e6e8da',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)',
                        opacity: 0.8,
                        zIndex: 1,
                    }}
                />

                <Container maxWidth="lg" sx={{
                    position: 'relative',
                    zIndex: 2,
                    px: { xs: 2, sm: 3, md: 4 }
                }}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <Typography sx={{
                            fontFamily: 'Anton',
                            fontSize: {
                                xs: '3.5rem',
                                sm: '5rem',
                                md: '8rem',
                                lg: '12rem',
                                xl: '15rem'
                            },
                            fontWeight: 'bold',
                            color: "#e6e8da",
                            lineHeight: { xs: 0.9, md: 1 },
                            letterSpacing: { xs: '0.02em', md: '0.05em' }
                        }}>
                            MENTORIA
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Brittany, sans-serif',
                                fontSize: {
                                    xs: '2rem',
                                    sm: '3rem',
                                    md: '4.5rem',
                                    lg: '6rem',
                                    xl: '7rem'
                                },
                                color: '#b83143',
                                mt: { xs: 1, md: 2 },
                                zIndex: 3,
                                opacity: 0.9,
                                userSelect: 'none',
                                pointerEvents: 'none',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            }}
                        >
                            Presença com Propósito
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* Seção 2: Conteúdo com fundo preto */}
            <Box
                sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    py: { xs: 4, sm: 6, md: 8, lg: 10 },
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        ref={ref}
                        variant="body1"
                        sx={{
                            position: 'relative',
                            zIndex: 3,
                            fontSize: {
                                xs: "1.1rem",
                                sm: "1.3rem",
                                md: "1.6rem",
                                lg: "2rem",
                                xl: "2.2rem"
                            },
                            lineHeight: { xs: 1.6, md: 1.8 },
                            textAlign: "justify",
                            color: '#e6e8da',
                            textShadow: '0 0 0px rgba(0,0,0,0.5)',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 2s ease-in-out',
                            px: { xs: 2, sm: 3, md: 0 },
                            '& br': {
                                display: { xs: 'none', sm: 'block' }
                            }
                        }}
                    >
                        Acredita que tem um potencial significativo para crescer nas redes sociais, porem não sabe por onde começar ou como posicionar-se com clareza? Esta mentoria foi feita para você.
                        <br /><br />
                        Aqui, você aprenderá a transformar sua presença digital em algo estratégico, verdadeiro e funcional, mesmo que esteja começando agora. Nossa missão é ajudar você a construir uma base sólida para o seu Instagram: com identidade, conteúdo com intenção e autonomia na criação.
                    </Typography>
                </Container>
            </Box>

            {/* Seção 3: Para quem é essa mentoria */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/images/Portifolio.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                    minHeight: { xs: '80vh', sm: '70vh', md: '100vh' },
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e6e8da',
                    py: { xs: 4, md: 0 }
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%)',
                        zIndex: 1,
                    }}
                />

                <Container maxWidth="lg" sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <Typography sx={{
                            fontFamily: 'Anton',
                            fontSize: {
                                xs: '2.5rem',
                                sm: '3.5rem',
                                md: '4.5rem',
                                lg: '6rem',
                                xl: '7rem'
                            },
                            fontWeight: 'bold',
                            color: "#e6e8da",
                            mb: { xs: 3, md: 5 },
                            lineHeight: { xs: 1.1, md: 1.2 }
                        }}>
                            Para quem é essa mentoria?
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    >
                        <Box sx={{
                            maxWidth: { xs: '100%', md: '80%' },
                            mx: 'auto',
                            px: { xs: 2, sm: 3, md: 0 }
                        }}>
                            <Typography sx={{
                                fontFamily: 'Glacial',
                                fontSize: {
                                    xs: '1.1rem',
                                    sm: '1.3rem',
                                    md: '1.5rem',
                                    lg: '1.8rem',
                                    xl: '2rem'
                                },
                                fontWeight: 'bold',
                                color: "#e6e8da",
                                textAlign: "left",
                                lineHeight: { xs: 1.8, md: 2.2 },
                                '& br': {
                                    display: { xs: 'none', sm: 'block' }
                                }
                            }}>
                                • Para quem quer começar ou reorganizar sua presença no Instagram<br />
                                • Para empreendedores, profissionais autônomos e criadores que desejam comunicar com propósito<br />
                                • Para quem quer mais do que seguidores — quer posicionamento, clareza e estratégia
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Seção 4: O que você aprenderá */}
            <Box
                sx={{
                    backgroundColor: '#e6e8da',
                    py: { xs: 6, sm: 8, md: 12, lg: 15 },
                    color: '#000',
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 4, md: 6, lg: 45 }} alignItems="flex-start">
                        <Grid item xs={12} lg={4} sx={{ pl: { lg: 15 } }} >
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            >
                                <Typography
                                    sx={{
                                        mt: { lg: 30 },
                                        color: '#b83143',
                                        fontWeight: 'bold',
                                        textAlign: { xs: 'center', lg: 'left' },
                                        fontFamily: 'Anton',
                                        fontSize: {
                                            xs: "2.2rem",
                                            sm: "2.8rem",
                                            md: "3.2rem",
                                            lg: "3.8rem",
                                            xl: "4.2rem"
                                        },
                                        lineHeight: 1.1,
                                        mb: { xs: 4, lg: 0 }
                                    }}
                                >
                                    O que você<br /> aprenderá:
                                </Typography>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} lg={8} sx={{ pl: { lg: 10 } }}>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: { xs: 3, md: 4 },
                                    px: { xs: 1, sm: 2, lg: 0 }
                                }}>
                                    {/* Módulo 1 */}
                                    <Box>
                                        <Typography variant="h3" sx={{
                                            color: '#b83143',
                                            mb: { xs: 1, md: 2 },
                                            fontFamily: 'Glacial',
                                            fontSize: {
                                                xs: '1.3rem',
                                                sm: '1.6rem',
                                                md: '1.8rem',
                                                lg: '2rem',
                                                xl: '2.2rem'
                                            },
                                            fontWeight: 'bold'
                                        }}>
                                            Módulo 1 – Presença com Propósito
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '0.95rem',
                                                sm: '1.1rem',
                                                md: '1.2rem',
                                                lg: '1.3rem',
                                                xl: '1.4rem'
                                            },
                                            color: '#000',
                                            lineHeight: 1.6,
                                            fontFamily: 'Glacial',
                                            '& br': {
                                                display: { xs: 'none', sm: 'block' }
                                            }
                                        }}>
                                            • Como definir um posicionamento autêntico<br />
                                            • Construção de bio estratégica<br />
                                            • Identidade visual e tom de voz
                                        </Typography>
                                    </Box>

                                    {/* Módulo 2 */}
                                    <Box>
                                        <Typography variant="h3" sx={{
                                            color: '#b83143',
                                            mb: { xs: 1, md: 2 },
                                            fontFamily: 'Glacial',
                                            fontSize: {
                                                xs: '1.3rem',
                                                sm: '1.6rem',
                                                md: '1.8rem',
                                                lg: '2rem',
                                                xl: '2.2rem'
                                            },
                                            fontWeight: 'bold'
                                        }}>
                                            Módulo 2 – Conteúdo que Conecta
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '0.95rem',
                                                sm: '1.1rem',
                                                md: '1.2rem',
                                                lg: '1.3rem',
                                                xl: '1.4rem'
                                            },
                                            color: '#000',
                                            lineHeight: 1.6,
                                            fontFamily: 'Glacial',
                                            '& br': {
                                                display: { xs: 'none', sm: 'block' }
                                            }
                                        }}>
                                            • Diferença entre conteúdo de valor, conexão e conversão<br />
                                            • Como criar roteiros simples e impactantes para reels e carrosséis<br />
                                            • Quando e como usar feed, reels, carrossel e stories
                                        </Typography>
                                    </Box>

                                    {/* Módulo 3 */}
                                    <Box>
                                        <Typography variant="h3" sx={{
                                            color: '#b83143',
                                            mb: { xs: 1, md: 2 },
                                            fontFamily: 'Glacial',
                                            fontSize: {
                                                xs: '1.3rem',
                                                sm: '1.6rem',
                                                md: '1.8rem',
                                                lg: '2rem',
                                                xl: '2.2rem'
                                            },
                                            fontWeight: 'bold'
                                        }}>
                                            Módulo 3 – Ferramentas e Técnicas
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '0.95rem',
                                                sm: '1.1rem',
                                                md: '1.2rem',
                                                lg: '1.3rem',
                                                xl: '1.4rem'
                                            },
                                            color: '#000',
                                            lineHeight: 1.6,
                                            fontFamily: 'Glacial',
                                            '& br': {
                                                display: { xs: 'none', sm: 'block' }
                                            }
                                        }}>
                                            • Edição de vídeos com CapCut (básico e truques)<br />
                                            • Apps essenciais (Canva, Trello, etc.)<br />
                                            • Escrita de legendas estratégicas e uso de hashtags
                                        </Typography>
                                    </Box>

                                    {/* Módulo 4 */}
                                    <Box>
                                        <Typography variant="h3" sx={{
                                            color: '#b83143',
                                            mb: { xs: 1, md: 2 },
                                            fontFamily: 'Glacial',
                                            fontSize: {
                                                xs: '1.3rem',
                                                sm: '1.6rem',
                                                md: '1.8rem',
                                                lg: '2rem',
                                                xl: '2.2rem'
                                            },
                                            fontWeight: 'bold'
                                        }}>
                                            Módulo 4 – Métrica e Crescimento
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '0.95rem',
                                                sm: '1.1rem',
                                                md: '1.2rem',
                                                lg: '1.3rem',
                                                xl: '1.4rem'
                                            },
                                            color: '#000',
                                            lineHeight: 1.6,
                                            fontFamily: 'Glacial',
                                            '& br': {
                                                display: { xs: 'none', sm: 'block' }
                                            }
                                        }}>
                                            • Como ler métricas básicas e entender o que funciona<br />
                                            • Como ajustar e planejar conteúdo baseado em dados
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#e6e8da',
                    py: { xs: 6, sm: 8, md: 12 },
                    borderTop: '1px solid rgba(184, 49, 67, 0.2)'
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} alignItems="flex-start">
                        <Grid item xs={12} lg={7} order={{ xs: 2, lg: 1 }}>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            >
                                <Typography variant="h3" sx={{
                                    color: '#b83143',
                                    mb: { xs: 2, md: 3 },
                                    fontFamily: 'Anton',
                                    fontSize: {
                                        xs: '2.2rem',
                                        sm: '2.8rem',
                                        md: '3.5rem',
                                        lg: '4.2rem',
                                        xl: '5rem'
                                    },
                                    lineHeight: 1.1,
                                    textAlign: { xs: 'center', lg: 'left' }
                                }}>
                                    CARGA HORÁRIA<br />E MODALIDADE
                                </Typography>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '1.1rem',
                                        sm: '1.3rem',
                                        md: '1.5rem',
                                        lg: '1.8rem',
                                        xl: '2rem'
                                    },
                                    color: '#000',
                                    lineHeight: 1.6,
                                    fontFamily: 'Glacial',
                                    textAlign: { xs: 'center', lg: 'left' },
                                    px: { xs: 2, lg: 0 },
                                    '& br': {
                                        display: { xs: 'none', sm: 'block' }
                                    }
                                }}>
                                    <strong>Duração:</strong> 4 horas de mentoria<br />
                                    <strong>Modalidade:</strong><br />
                                    • On-line (via Google Meet)<br />
                                    • Presencial (em Brasília – DF)
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#e6e8da',
                    py: { xs: 6, sm: 5, md: 5 },
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} alignItems="flex-start">
                        <Grid item xs={12} lg={5} order={{ xs: 1, lg: 15 }} sx={{
                            ml: { lg: 'auto' },
                            textAlign: { xs: 'center', lg: 'right' },
                        }}>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#b83143',
                                        fontWeight: 'bold',
                                        textAlign: { xs: 'center', lg: 'left' },
                                        fontFamily: 'Anton',
                                        mb: { xs: 2, md: 3 },
                                        fontSize: {
                                            xs: '2.2rem',
                                            sm: '2.8rem',
                                            md: '3.5rem',
                                            lg: '4.2rem',
                                            xl: '5rem'
                                        },
                                        lineHeight: 1.1
                                    }}
                                >
                                    INVESTIMENTO
                                </Typography>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '1.1rem',
                                        sm: '1.3rem',
                                        md: '1.5rem',
                                        lg: '1.8rem',
                                        xl: '2rem'
                                    },
                                    color: '#000',
                                    lineHeight: 1.6,
                                    fontFamily: 'Glacial',
                                    textAlign: { xs: 'center', lg: 'left' },
                                    px: { xs: 2, lg: 0 },
                                    '& br': {
                                        display: { xs: 'none', sm: 'block' }
                                    }
                                }}>
                                    <strong>R$ 797,00</strong> dividido em até 12x<br />
                                    pelo infinitepay<br />
                                    (inclui 1 encontro individual<br />
                                    para personalização das estratégias<br />
                                    e esclarecimento de dúvidas).
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Seção 6: Adquirir mentoria */}
            <Box
                sx={{
                    backgroundColor: '#e6e8da',
                    py: { xs: 8, sm: 10, md: 15, lg: 20 },
                    borderTop: '1px solid rgba(184, 49, 67, 0.2)'
                }}
            >
                <Container maxWidth="lg" onClick={() => navigate('/form')}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <Typography
                            
                            variant="h3"
                            sx={{
                                color: '#b83143',
                                cursor: 'pointer',
                                fontFamily: 'Anton',
                                fontSize: {
                                    xs: '2.5rem',
                                    sm: '3.2rem',
                                    md: '4rem',
                                    lg: '5rem',
                                    xl: '6rem'
                                },
                                textAlign: 'center',
                                lineHeight: 1.1,
                                letterSpacing: '0.02em'
                            }}
                        >
                            ADQUIRIR MENTORIA
                        </Typography>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default MentoringPage;

