import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
// import {Gallery} from './pages/Gallery/Gallery';
// import{ GalleryOne } from './pages/Gallery/GalleryOne';
// import {GalleryTwo } from './pages/Gallery/GalleryTwo';
import { ROUTES } from './routes';

const AppRouter: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      {/* <Route path={ROUTES.gallery} element={<Gallery />}>
        <Route path={ROUTES.galleryOne} element={<GalleryOne />} />
        <Route path={ROUTES.galleryTwo} element={<GalleryTwo />} /> */}
      {/* </Route> */}
    </Routes>
  </HashRouter>
);