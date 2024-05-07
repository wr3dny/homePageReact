import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import i18n from './i18n';
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

        <Routes>
          {PATHS.map(({ key, path, Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};