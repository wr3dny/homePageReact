import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
import { ROUTES } from './routes';

const AppRouter: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
    </Routes>
  </HashRouter>
);