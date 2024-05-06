import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import i18n from './i18n';
import { Lego } from './pages/Lego/Lego';
import { Books } from './pages/Books/Books';
import { useTranslation } from 'react-i18next';
import { PATHS } from './consts/paths';

export const App = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {PATHS.map((link) => (
              <li key={link.key}>
                <Link to={link.path}>{t(link.key)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Route configuration */}
        <Routes>
          {PATHS.map((link) => {
            const Component = link.key === 'Lego' ? Lego : Books;
            return <Route key={link.key} path={link.path} element={<Component />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
};