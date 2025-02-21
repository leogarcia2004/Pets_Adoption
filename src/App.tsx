import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AdoptionPage from "./components/AdoptionPage";
import ThanksPage from "./components/ThanksPage";
import Footer from "./components/Footer";

function App() {
  const url = window.location.href;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="/adoptables" element={<AdoptionPage />} />
        <Route path="/thank" element={<ThanksPage />} />
      </Routes>
      {url == 'http://localhost:5173/thank' ? null : <Footer />}
    </>
  )
}

export default App
