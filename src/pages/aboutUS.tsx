import { CssBaseline, Box } from '@mui/material';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Services from '../components/servicesProvided/services';
import Clients from '../components/cases/cases';
import Mentorships from '../components/mentorShips/mentorShips';
import Results from '../components/results/results';
import Contact from '../components/contact/contact';

function Home() {
  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <CssBaseline />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Mentorships />
      <Results />
      <Contact />
    </Box>
  );
}

export default Home;
