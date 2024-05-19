import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import City from "./component/City";
import Navbar from "./component/Navbar";
import PopUp from "./component/popUp";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import image from "./data/EastJavaCard";
import "./App.css";

export const CountContext = createContext();

const CityWrapper = () => {
  const { index } = useParams();
  const card = image[index];
  if (!card) {
    return <div>City not found</div>;
  }
  return (
    <City
      Food={card.food}
      Wallpaper={card.wallpaper}
      Culture={card.culture}
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
            <Route
              path="/city/:index"
              element={<CityWrapper />}
            />
          </Routes>
          {isOverlay && <PopUp {...popupContent} />}
        </div>
      </Router>
    </CountContext.Provider>
  );
}

export default App;