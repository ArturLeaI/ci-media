import { styled } from '@mui/material/styles';
import { Box, Typography, Card, CardContent, Divider, Paper, List, ListItem, ListItemIcon, ListItemText, Chip,} from '@mui/material';
import { Star, FlashOn, AdsClick,  } from '@mui/icons-material';

const ProductCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #b83143 10%, #ff8494 100%)',
  color: 'white',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  position: 'relative',
  maxWidth: '80vh',
  marginRight: '10vh',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  }
}));

const PriceBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
}));

const FeatureList = styled(List)(({ theme }) => ({
  '& .MuiListItem-root': {
    paddingLeft: 0,
    paddingRight: 0,
  },
  '& .MuiListItemIcon-root': {
    minWidth: theme.spacing(4),
    color: 'rgba(255, 255, 255, 0.9)',
  },
  '& .MuiListItemText-primary': {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
  }
}));

export const ProductCardComponent = () => {
  return (
    <ProductCard>
      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Star sx={{ color: '#ffd700' }} />
            <Chip
              label="OFERTA LIMITADA"
              size="small"
              sx={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </Box>
          <PriceBox>
            <Typography variant="body2" sx={{ textDecoration: 'line-through', opacity: 0.7 }}>
              R$ 994,00
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              R$ 497,00
            </Typography>
            <Typography variant="caption" sx={{ color: '#ffd700' }}>
              50% de desconto
            </Typography>
          </PriceBox>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Mentoria Completa
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Aprenda as estratégias mais eficazes para criar campanhas publicitárias de sucesso e multiplicar seus resultados
        </Typography>

        <Paper sx={{
          p: 3,
          mb: 3,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2
        }}>
          <Typography variant="h6" sx={{
            fontWeight: 'bold',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <AdsClick />
            O que você vai aprender:
          </Typography>

          <FeatureList dense>
            <ListItem>
              <ListItemIcon>
                <FlashOn />
              </ListItemIcon>
              <ListItemText primary="Clareza de posicionamento e propósito" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlashOn />
              </ListItemIcon>
              <ListItemText primary="Estratégia de conteúdo pensada pra você" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlashOn />
              </ListItemIcon>
              <ListItemText primary="⁠Identidade visual que comunica quem você é" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlashOn />
              </ListItemIcon>
              <ListItemText primary="Planejamento de feed e stories que faz sentido" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlashOn />
              </ListItemIcon>
              <ListItemText primary="Técnicas reais pra engajar e crescer organicamente" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlashOn />
              </ListItemIcon>
              <ListItemText primary="Acompanhamento semanal, lado a lado" />
            </ListItem>
          </FeatureList>
        </Paper>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.3)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Total:
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" sx={{ textDecoration: 'line-through', opacity: 0.7 }}>
              R$ 994,00
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffd700' }}>
              R$ 497,00
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </ProductCard>
  );
};