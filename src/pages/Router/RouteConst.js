import AboutUs from '../AboutUs/AboutUs';
import ContactPage from '../Contact/ContactPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import Home from '../Home/Home';
import Programs from '../Programs/Programs';
import CenovnikPage from '../CenovnikPage/CenovnikPage';
import SelectedProgram from '../SelectedProgram/SelectedProgram';

export const routesConfig = [
  {
    path: '/',
    component: <Home />,
    title: 'Home',
  },
  {
    path: '/o-nama',
    component: <AboutUs />,
    title: 'O nama',
  },
  {
    path: '/programi',
    component: <Programs />,
    title: 'Programi',
  },
  {
    path: '/galerija',
    component: <GalleryPage />,
    title: 'Galerija',
  },

  {
    path: '/kontakt',
    component: <ContactPage />,
    title: 'Kontakt',
  },

  {
    path: '/cenovnik',
    component: <CenovnikPage />,
    title: 'Cenovnik',
  },
  {
    path: '/programi/:program',
    component: <SelectedProgram />,
    title: 'Program',
  },
];
