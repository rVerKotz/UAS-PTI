import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import City from "./pages/City";
import Navbar from "./pages/Navbar";
import PopUp from "./pages/popUp";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import image from "./data/EastJavaCard";
import Login from "./pages/Login"; 
import "./App.css";

export const CountContext = createContext();

const CityWrapper = () => {
  const { index } = useParams();
  const card = image[index];
  if (!card) {
    return alert("City not found")
  }
  return (
    <City
      Food={card.food}
      Wallpaper={card.wallpaper}
      Culture={card.culture}
      Index = {index}
    />
  );
};

function App() {
  const [isOverlay, setOverlay] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const changeOverlay = (title, image, description) => {
    setOverlay(!isOverlay);
    setPopupContent({ title, image, description });
  };

  return (
    <CountContext.Provider value={{ isOverlay, changeOverlay }}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="*" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/city/:index" element={<CityWrapper />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lo" element={<Login />} />
          </Routes>
          {isOverlay && <PopUp {...popupContent} />}
        </div>
      </Router>
    </CountContext.Provider>
  );
}

export default App;