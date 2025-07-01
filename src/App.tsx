import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MentoringPage from './pages/mentoringPage';
import Header from './components/header/header';
import FormPage from './pages/formPage';
import Footer from './components/footer/footer';
import CardFieldsForm from './components/cardFields/cardFields';
import Home from './pages/aboutUS';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/mentoria" element={<MentoringPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/footer" element={<CardFieldsForm />} />
        </Routes>
      </div>

      {/* Renderiza o Footer apenas se a rota não for a home */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
