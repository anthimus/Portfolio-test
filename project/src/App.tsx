import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lumiere from './pages/Lumiere';
import Installation from './pages/Installation';
import Video from './pages/Video';
import Image from './pages/Image';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lumiere" element={<Lumiere />} />
          <Route path="installation" element={<Installation />} />
          <Route path="video" element={<Video />} />
          <Route path="image" element={<Image />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;