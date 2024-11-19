import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";


export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path='/' Component={ Home } />
          <Route path='/about' Component={ About } />
          <Route path='/product' Component={ Product } />
          <Route path='/dashboard' Component={ Dashboard } />
          <Route path='/faq' Component={ Faq } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
