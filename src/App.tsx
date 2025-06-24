import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentoringPage from './pages/mentoringPage';
import Header from './components/header/header';
import FormPage from './pages/formPage';
import Footer from './components/footer/footer';
import CardFieldsForm from './components/cardFields/cardFields';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<MentoringPage/>} />
          <Route path="/form" element={<FormPage/>} />
          <Route path="/footer" element={<CardFieldsForm/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
