import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Carousel } from "./components/Pages/Carousel";

import { Scroll } from "./components/Pages/Scroll";

import  About  from "./components/Pages/About";

import { Collage } from "./components/Pages/Collage";

import { slides } from "./data/imageData.json";

import { images } from "./data/collageData.json";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/carousel" element={<Carousel data={slides} />} />
        <Route path="/scroll" element={<Scroll data={images} />} />
        <Route path="/collage" element={<Collage />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;