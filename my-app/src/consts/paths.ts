import { Books } from '../pages/Books/Books';
import { About } from '../pages/About/About';
import { Home } from '../pages/Home/Home';


export const PATHS = [
  { path: '/', key: 'Home', Component: Home , available: true },
  { path: '/books', key: 'Books', Component: Books, available: true },
  { path: '/about', key: 'About', Component: About , available: true }
];