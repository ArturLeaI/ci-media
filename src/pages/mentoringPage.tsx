import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Users, BookOpen, Target, BarChart3, Clock, DollarSign, ArrowRight } from 'lucide-react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
} from '@mui/material';

const App: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

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

    const modules = [
        {
            icon: <Target fontSize="large" />,
            title: "Módulo 1 – Presença com Propósito",
            content: [
                "Como definir um posicionamento autêntico",
                "Construção de bio estratégica",
                "Identidade visual e tom de voz"
            ]
        },
        {
            icon: <BookOpen fontSize="large" />,
            title: "Módulo 2 – Conteúdo que Conecta",
            content: [
                "Diferença entre conteúdo de valor, conexão e conversão",
                "Como criar roteiros simples e impactantes para reels e carrosséis",
                "Quando e como usar feed, reels, carrossel e stories"
            ]
        },
        {
            icon: <Users fontSize="large" />,
            title: "Módulo 3 – Ferramentas e Técnicas",
            content: [
                "Edição de vídeos com CapCut (básico e truques)",
                "Apps essenciais (Canva, Trello, etc.)",
                "Escrita de legendas estratégicas e uso de hashtags"
            ]
        },
        {
            icon: <BarChart3 fontSize="large" />,
            title: "Módulo 4 – Métrica e Crescimento",
            content: [
                "Como ler métricas básicas e entender o que funciona",
                "Como ajustar e planejar conteúdo baseado em dados"
            ]
        }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'black', overflow: 'hidden' }}>
            {/* Hero Section */}
            <Box
                component="section"
                sx={{
                    position: 'relative',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'black'
                }}
            >
                {/* Background Image with Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(184,49,67,0.3))',
                        zIndex: 10
                    }}
                />

                <Box sx={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
                    <Box
                        component="img"
                        src='/images/intro.png'
                        alt="Background"
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>

                <Box sx={{
                    position: 'relative',
                    zIndex: 20,
                    textAlign: 'center',
                    px: 2,
                    maxWidth: 'md',
                    mx: 'auto',
                    animation: 'fadeIn 1s ease-in'
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '3.75rem', md: '6rem', lg: '8rem' },
                                fontWeight: 'bold',
                                color: 'white',
                                letterSpacing: 'tight',
                                fontFamily: '"Miskan", sans-serif'
                            }}
                        >
                            Mentoria
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                                fontWeight: 'light',
                                color: '#b83143',
                                fontFamily: '"Brittany", cursive'
                            }}
                        >
                            Presença com Propósito
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                color: 'white',
                                opacity: 0.8,
                                maxWidth: '3xl',
                                mx: 'auto',
                                lineHeight: 'relaxed'
                            }}
                        >
                            Transformando ideias em posicionamento real.
                        </Typography>
                        <Button
                            onClick={() => scrollToSection('about')}
                            sx={{
                                mx: 'auto',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 4,
                                py: 2,
                                bgcolor: '#b83143',
                                color: 'white',
                                borderRadius: '9999px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    bgcolor: '#9d2a3a',
                                    transform: 'scale(1.05)'
                                },
                                transition: 'all 0.3s',
                                boxShadow: 6
                            }}
                        >
                            Descobrir Mais
                        </Button>
                    </Box>
                </Box>

                {/* Scroll Indicator */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 20,
                        animation: 'bounce 2s infinite'
                    }}
                >
                    <ChevronDown sx={{ color: '#e6e8da', fontSize: '1.5rem' }} />
                </Box>
            </Box>

            {/* About Section */}
            <Box
                id="about"
                component="section"
                sx={{ py: 10, bgcolor: 'black' }}
            >
                <Container maxWidth="md">
                    <Box
                        ref={ref}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            transition: 'all 1s',
                            ...(visible ? {
                                opacity: 1,
                                transform: 'translateY(0)'
                            } : {
                                opacity: 0,
                                transform: 'translateY(2rem)'
                            })
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '2.25rem', md: '3rem' },
                                fontWeight: 'bold',
                                color: '#e6e8da',
                                lineHeight: 'tight',
                                '& span': {
                                    color: '#b83143'
                                }
                            }}
                        >
                            Construa sua presença digital com <span>estratégia</span>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                color: 'white',
                                opacity: 0.7,
                                lineHeight: 'relaxed'
                            }}
                        >
                            Acredita que tem um potencial significativo para crescer nas redes sociais, porém não sabe por onde começar ou como posicionar-se com clareza? Esta mentoria foi feita para você.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                color: 'white',
                                opacity: 0.7,
                                lineHeight: 'relaxed'
                            }}
                        >
                            Aqui, você aprenderá a transformar sua presença digital em algo estratégico, verdadeiro e funcional, mesmo que esteja começando agora. Nossa missão é ajudar você a construir uma base sólida para o seu Instagram: com identidade, conteúdo com intenção e autonomia na criação.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Target Audience Section */}
            <Box
                component="section"
                sx={{
                    py: 10,
                    bgcolor: 'black',
                    position: 'relative'
                }}
            >
                {/* Background Image with Overlay */}
                <Box sx={{ position: 'absolute', inset: 0, opacity: 0.7 }}>
                    <Box
                        component="img"
                        src='/images/intro.png'
                        alt="Background"
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.2))' }} />

                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '2.25rem', md: '3rem' },
                                fontWeight: 'bold',
                                color: 'white',
                                mb: 4
                            }}
                        >
                            Para quem é essa mentoria?
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {[
                            {
                                title: "Iniciantes",
                                description: "Para quem quer começar ou reorganizar sua presença no Instagram",
                                icon: <Target sx={{ fontSize: '3rem', color: '#b83143' }} />
                            },
                            {
                                title: "Empreendedores",
                                description: "Para empreendedores, profissionais autônomos e criadores que desejam comunicar com propósito",
                                icon: <Users sx={{ fontSize: '3rem', color: '#b83143' }} />
                            },
                            {
                                title: "Estrategistas",
                                description: "Para quem quer mais do que seguidores — quer posicionamento, clareza e estratégia",
                                icon: <BarChart3 sx={{ fontSize: '3rem', color: '#b83143' }} />
                            }
                        ].map((item, index) => (
                            <Grid
                                item
                                key={index}
                                sx={{
                                    flex: {
                                        xs: '1 1 100%',  // Mobile: ocupa 100%
                                        md: '0 0 360px'  // Desktop: largura fixa
                                    },
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        height: '100%',
                                        bgcolor: 'rgba(0,0,0,0.5)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 4,
                                        p: 4,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            borderColor: '#b83143',
                                            transform: 'scale(1.05)'
                                        }
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            gap: 2
                                        }}
                                    >
                                        <Box sx={{ bgcolor: '#b83143', p: 2, borderRadius: 2 }}>
                                            {item.icon}
                                        </Box>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e6e8da' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'white', opacity: 0.7 }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>


            </Box>

            {/* Modules Section */}
            <Box
                component="section"
                sx={{
                    py: 10,
                    bgcolor: '#e6e8da'
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '2.25rem', md: '3rem' },
                                fontWeight: 'bold',
                                color: '#b83143',
                                mb: 4
                            }}
                        >
                            O que você aprenderá
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'black', maxWidth: 'lg', mx: 'auto' }}>
                            Conteúdo estruturado em 4 módulos práticos para transformar sua presença digital
                        </Typography>
                    </Box>

                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                    >
                        {modules.map((module, index) => (
                            <Grid
                                item
                                key={index}
                                sx={{
                                    flex: {
                                        xs: '1 1 100%',  // 100% no mobile
                                        md: '0 0 48%'    // ~2 cards por linha com espaço entre eles
                                    },
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Paper
                                    elevation={activeSection === index ? 6 : 0}
                                    sx={{
                                        flexGrow: 1,
                                        height: '100%',
                                        bgcolor: 'rgba(255,255,255,0.8)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: 4,
                                        p: 4,
                                        transition: 'all 0.3s',
                                        cursor: 'pointer',
                                        border: activeSection === index ? '2px solid #b83143' : '2px solid transparent',
                                        '&:hover': {
                                            boxShadow: 6
                                        }
                                    }}
                                    onClick={() => setActiveSection(index)}
                                >
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Box
                                            sx={{
                                                flexShrink: 0,
                                                bgcolor: '#b83143',
                                                p: 1,
                                                borderRadius: 2,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {module.icon}
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#b83143', mb: 2 }}>
                                                {module.title}
                                            </Typography>
                                            <List>
                                                {module.content.map((item, itemIndex) => (
                                                    <ListItem key={itemIndex} sx={{ p: 0, mb: 1, alignItems: 'center' }}>
                                                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                                                            <Box
                                                                sx={{
                                                                    width: 8,
                                                                    height: 8,
                                                                    bgcolor: '#b83143',
                                                                    borderRadius: '50%'
                                                                }}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} sx={{ color: 'black' }} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Details Section */}
            <Box
                component="section"
                sx={{
                    py: 10,
                    bgcolor: '#e6e8da',
                    borderTop: '1px solid rgba(184,49,67,0.2)'
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* CARGA HORÁRIA E MODALIDADE */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                mb: { xs: 6, md: 10 } // Espaçamento apenas em telas pequenas
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                <Clock sx={{ fontSize: '2rem', color: '#b83143' }} />
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#b83143' }}>
                                    CARGA HORÁRIA E MODALIDADE
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            bgcolor: '#b83143',
                                            borderRadius: '50%',
                                            mt: '10px'
                                        }}
                                    />
                                    <Typography variant="body1" sx={{ color: 'black' }}>
                                        <strong>Duração:</strong> 4 horas de mentoria
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            bgcolor: '#b83143',
                                            borderRadius: '50%',
                                            mt: '10px'
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="body1" sx={{ color: 'black' }}>
                                            <strong>Modalidade:</strong>
                                        </Typography>
                                        <List sx={{ py: 0, ml: 2 }}>
                                            <ListItem sx={{ p: 0 }}>• On-line (via Google Meet)</ListItem>
                                            <ListItem sx={{ p: 0 }}>• Presencial (em Brasília – DF)</ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        {/* INVESTIMENTO */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                                <DollarSign sx={{ fontSize: '2rem', color: '#b83143' }} />
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#b83143' }}>
                                    INVESTIMENTO
                                </Typography>
                            </Box>
                            <Paper
                                sx={{
                                    background: 'linear-gradient(to bottom right, #b83143, #9d2a3a)',
                                    borderRadius: 4,
                                    p: 4,
                                    color: 'white',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Imagem de fundo com opacidade */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        opacity: 0.2,
                                        '& img': {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src='/images/intro.png'
                                        alt="Background"
                                    />
                                </Box>

                                {/* Conteúdo do card */}
                                <Box sx={{ position: 'relative', zIndex: 10 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        R$ 797,00
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        dividido em até 12x pelo infinitepay
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 'relaxed' }}>
                                        (inclui 1 encontro individual para personalização das estratégias e esclarecimento de dúvidas)
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                component="section"
                sx={{
                    py: 10,
                    bgcolor: '#e6e8da',
                    borderTop: '1px solid rgba(184,49,67,0.2)'
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                fontWeight: 'bold',
                                color: '#b83143',
                                mb: 4,
                                letterSpacing: 'tight'
                            }}
                        >
                            ADQUIRIR MENTORIA
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'black', mb: 6, maxWidth: 'lg', mx: 'auto' }}>
                            Comece hoje mesmo sua jornada para uma presença digital estratégica e autêntica
                        </Typography>
                        <Button
                            variant="contained"

                            sx={{
                                mx: 'auto',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 6,
                                py: 3,
                                bgcolor: '#b83143',
                                color: 'white',
                                borderRadius: '9999px',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                '&:hover': {
                                    bgcolor: '#9d2a3a',
                                    transform: 'scale(1.05)'
                                },
                                transition: 'all 0.3s',
                                boxShadow: 6
                            }}
                        >
                            COMEÇAR AGORA
                            <ArrowRight sx={{ fontSize: '1.5rem' }} />
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default App;