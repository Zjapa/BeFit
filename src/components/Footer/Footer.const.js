import { FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

export const SITE_MAP = {
  title: 'MAPA SAJTA',
  items: [
    {
      name: 'Početna',
      path: '/',
      dropdown: [],
    },
    {
      name: 'O nama',
      path: '/o-nama',
      dropdown: [],
    },
    {
      name: 'Programi',
      path: '/programi',
      dropdown: [],
    },
    {
      name: 'Cenovnik',
      path: '/cenovnik',
      dropdown: [],
    },
    {
      name: 'Galerija',
      path: '/galerija',
      dropdown: [],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      dropdown: [],
    },
  ],
};

export const SERVICES = {
  title: 'USLUGE',
  items: [
    {
      name: 'Individualni',
      path: '/individualni',
    },
    {
      name: 'Power',
      path: '/power',
    },
    {
      name: 'Foundations',
      path: '/foundations',
    },
    {
      name: 'Wod',
      path: '/wod',
    },
    {
      name: 'Cardio',
      path: '/cardio',
    },
    {
      name: 'Everyday fitness',
      path: '/everyday-fitness',
    },
  ],
};

export const CONTACT = {
  title: 'KONTAKT',
  items: [
    { name: 'Cenovnik', path: '/cenovnik' },
    { name: 'Besplatan trening', path: '/kontakt' },
    { name: 'Pronađi svoj trening', path: '/programi' },
  ],
};

export const SOCIAL_LIST = [
  { Icon: (props) => <FiTwitter {...props} />, url: 'www.twitter.com', id: 'twt' },
  { Icon: (props) => <FiFacebook {...props} />, url: 'www.facebook.com', id: 'fcb' },
  { Icon: (props) => <FiYoutube {...props} />, url: 'www.youtube.com', id: 'yttb' },
];
