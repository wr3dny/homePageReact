import { Lego } from '../pages/Lego/Lego';
import { Books } from '../pages/Books/Books';
import { Gallery } from '../pages/Gallery/Gallery';
import { About } from '../pages/About/About';
import { Home } from '../pages/Home/Home';


export const PATHS = [
  { path: '/lego', key: 'Lego', Component: Lego },
  { path: '/books', key: 'Books', Component: Books },
  { path: '/gallery', key: 'Gallery', Component: Gallery },
  { path: '/about', key: 'About', Component: About },
  { path: '/', key: 'Home', Component: Home }
];