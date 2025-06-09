import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentoringPage from './pages/mentoringPage';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<MentoringPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
