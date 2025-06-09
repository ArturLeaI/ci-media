import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MentoringPage: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // anima só uma vez
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
        <Box>
            {/* Seção 1: Capa com fundo e título */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/images/intro.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e6e8da',
                    textAlign: 'center',
                }}
            >
                {/* Overlay escurecedor */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)',
                        opacity: 0.8, // ou qualquer valor fixo
                        zIndex: 1,
                    }}
                />

                {/* Conteúdo central */}
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography sx={{ fontFamily: 'Anton', fontSize: '15rem', fontWeight: 'bold', color: "#e6e8da" }}>
                        MENTORIA
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Brittany, sans-serif',
                            fontSize: '7rem',
                            whiteSpace: 'nowrap', // evita que o texto quebre e fique escondido
                            color: '#b83143',
                            position: 'absolute',
                            top: 'calc(62% + 60px)', // pode ajustar esse valor
                            left: '50%',
                            transform: 'translate(-50%, 0)',
                            zIndex: 3,
                            opacity: 0.9,
                            userSelect: 'none',
                            pointerEvents: 'none',
                        }}
                    >
                        Presença com Propósito
                    </Typography>
                </Box>
            </Box>

            {/* Seção 2: Conteúdo com fundo preto */}
            <Box
                sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    py: 5,
                    px: 2,
                    textAlign: 'center',


                }}
            >
                <Typography
                    ref={ref}
                    variant="body1"
                    sx={{
                        marginTop: "5rem",
                        marginBottom: "15rem",
                        position: 'relative',
                        zIndex: 3,
                        maxWidth: '70%',
                        mx: 'auto',
                        fontSize: "2.5rem",
                        lineHeight: 1.8,
                        textAlign: "justify",
                        color: '#e6e8da',
                        textShadow: '0 0 0px rgba(0,0,0,0.5)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 2s ease-in-out',
                    }}
                >
                    Acredita que tem um potencial significativo para crescer nas redes sociais, porem não sabe por onde começar ou como posicionar-se com clareza? Esta mentoria foi feita para você.<br /><br />
                    Aqui, você aprenderá a transformar sua presença digital em algo estratégico, verdadeiro e funcional, mesmo que esteja começando agora. Nossa missão é ajudar você a construir uma base sólida para o seu Instagram: com identidade, conteúdo com intenção e autonomia na criação.
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/images/Portifolio.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
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
                        opacity: 0.8, // ou qualquer valor fixo
                        zIndex: 1,
                    }}
                />

                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography sx={{ fontFamily: 'Anton', fontSize: '7rem', fontWeight: 'bold', color: "#e6e8da" }}>
                        Para quem é essa mentoria?
                    </Typography>
                    <Typography sx={{ fontFamily: 'Glacial', fontSize: '2rem', fontWeight: 'bold', color: "#e6e8da", textAlign: "justify", lineHeight: 3, marginTop: "7rem" }}>
                        • Para quem quer começar ou reorganizar sua presença no Instagram<br />
                        • Para empreendedores, profissionais autônomos e criadores que desejam comunicar com propósito<br />
                        • Para quem quer mais do que seguidores — quer posicionamento, clareza e estratégia<br />
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#e6e8da',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    paddingTop: 10
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        backgroundColor: '#e6e8da',
                        opacity: 0.8,
                        zIndex: 1,
                    }}
                />

                <Box sx={{ position: 'relative', zIndex: 2, pl: { xs: 10, md: 5 }, pt: 0 }}>

                </Box>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    paddingTop: "10rem",
                    backgroundColor: '#e6e8da',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000',
                    flexDirection: { xs: 'row', md: 'row' }
                }}
            >
                <Grid container spacing={4} sx={{ px: { xs: 80, md: 30 }, py: 15, }}>

                    <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'flex-start', pl: { xs: 15, md: 20 }, pt: 30 }}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        >
                            <Typography
                                sx={{
                                    color: '#b83143',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    fontFamily: 'Anton',
                                    mt: 1,
                                    fontSize: {
                                        xs: '2rem',
                                        md: '2.5rem',
                                        lg: '6rem',
                                    },
                                }}
                            >
                                O que você<br /> aprendera :
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ pl: { xs: 15, md: 35 } }}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 3, ease: 'easeOut' }}
                        >
                            <Typography variant="h3" sx={{ color: '#b83143', mb: 1, fontFamily: 'Glacial' }}>
                                Módulo 1 – Presença com Propósito
                            </Typography>
                            <Typography sx={{ fontSize: '2rem', color: '#000', mb: 3, whiteSpace: 'pre-line', fontFamily: 'Glacial' }}>
                                • Como definir um posicionamento autêntico
                                {'\n'}• Construção de bio estratégica
                                {'\n'}• Identidade visual e tom de voz
                            </Typography>

                            <Typography variant="h3" sx={{ color: '#b83143', mb: 1, fontFamily: 'Glacial' }}>
                                Módulo 2 – Conteúdo que Conecta
                            </Typography>
                            <Typography sx={{ fontSize: '2rem', color: '#000', mb: 3, whiteSpace: 'pre-line', fontFamily: 'Glacial' }}>
                                • Diferença entre conteúdo de valor, conexão e conversão
                                {'\n'}• Como criar roteiros simples e impactantes para reels e carrosséis
                                {'\n'}• Quando e como usar feed, reels, carrossel e stories
                            </Typography>

                            <Typography variant="h3" sx={{ color: '#b83143', mb: 1, fontFamily: 'Glacial' }}>
                                Módulo 3 – Ferramentas e Técnicas
                            </Typography>
                            <Typography sx={{ fontSize: '2rem', color: '#000', mb: 3, whiteSpace: 'pre-line', fontFamily: 'Glacial' }}>
                                • Edição de vídeos com CapCut (básico e truques)
                                {'\n'}• Apps essenciais (Canva, Trello, etc.)
                                {'\n'}• Escrita de legendas estratégicas e uso de hashtags
                            </Typography>

                            <Typography variant="h3" sx={{ color: '#b83143', mb: 1, fontFamily: 'Glacial' }}>
                                Módulo 4 – Métrica e Crescimento
                            </Typography>
                            <Typography sx={{ fontSize: '2rem', color: '#000', mb: 3, whiteSpace: 'pre-line', fontFamily: 'Glacial' }}>
                                • Como ler métricas básicas e entender o que funciona
                                {'\n'}• Como ajustar e planejar conteúdo baseado em dados
                            </Typography>
                        </motion.div>
                    </Grid>

                </Grid>


            </Box>

            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#e6e8da',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#fff',
                }}
            >
                <Grid container spacing={4} sx={{ px: { xs: 75, md: 30 }}}>
                    <Grid item xs={12} md={8} sx={{ pl: { xs: 2, md: 4 }, pt: 30 }}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 3, ease: 'easeOut' }}
                        >
                            <Typography variant="h3" sx={{
                                color: '#b83143', mb: 1, fontFamily: 'Anton', fontSize: '4.5rem'
                            }}>
                                CARGA HORARIA <br /> E MODALIDADE
                            </Typography>
                            <Typography sx={{ fontSize: '2.0rem', color: '#000', mb: 3, whiteSpace: 'pre-line', fontFamily: 'Glacial' }}>
                                Duração: 4 horas de mentoria
                                Modalidade:
                                {'\n'} • On-line (via Google Meet)
                                {'\n'} • Presencial (em Brasília – DF)
                            </Typography>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'flex-start', pl: { xs: 15, md: 15 }, pt: 95 }}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#b83143',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    fontFamily: 'Anton',
                                    mt: 1,
                                    fontSize: '4.5rem'
                                }}
                            >
                                INVESTIMENTO
                            </Typography>
                            <Typography sx={{ fontSize: '2rem', color: '#000', mb: 3, whiteSpace: 'pre-line', fontFamily: 'Glacial' }}>
                                R$ 797,00 dividido em até 12x<br /> pelo infinitepay<br />
                                (inclui 1 encontro individual<br /> para personalização das estratégias<br /> e esclarecimento de dúvidas).
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#e6e8da',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    paddingTop:"25rem",
                    paddingBottom:"15rem",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', // centraliza horizontalmente
                    color: '#fff',
                }}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 3, ease: 'easeOut' }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    color: '#b83143',
                                    mb: 1,
                                    fontFamily: 'Anton',
                                    fontSize: '5.5rem',
                                    textAlign: 'center',
                                }}
                            >
                                ADIQUIRIR MENTORIA
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default MentoringPage;
