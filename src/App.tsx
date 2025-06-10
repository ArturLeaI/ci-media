import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentoringPage from './pages/mentoringPage';
import Header from './components/header';
import FormPage from './pages/formPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<MentoringPage/>} />
          <Route path="/form" element={<FormPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
