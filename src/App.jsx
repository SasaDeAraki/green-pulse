from { BrownserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Router>
            <div>
                <Routes>
                    <Router>
                </Routes>
            </div>
      </Router>
      <Footer />
    </>
  );
}
