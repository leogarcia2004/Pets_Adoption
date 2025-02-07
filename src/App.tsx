import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AdoptionPage from "./components/AdoptionPage";
import ThanksPage from "./components/ThanksPage";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="lg:px-36 px-4">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="/adoptables" element={<AdoptionPage />} />
        <Route path="/thank" element={<ThanksPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
