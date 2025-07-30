import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/Functions/ScrollToTop";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Donate from './components/Donate';
import Donors from './components/Donors';
import News from './components/News';
import Contactus from './components/Contactus';
import Loanprogram from './components/loanprogram';
import Deities from './components/Deities ';
import Board from './components/Board';

import LandProjectDetails from './components/LandProjectDetails';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Place it here, outside Routes */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/landprojectdetails" element={<LandProjectDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/loanprogram" element={<Loanprogram />} />
        <Route path="/Deities" element={<Deities />} />
        <Route path="/Board" element={<Board />} />

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
