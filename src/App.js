import './App.css';
import Contact from './contact/Contact';
import Resume from './resume/Resume';
import Home from './Home';
import Project from './Project/Project';
import Header from './Helpers/Header';
import Footer from './Helpers/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
