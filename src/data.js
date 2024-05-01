import Logo from '../src/svg/ValorousLogo.svg';
//import about photos
import img1 from '../src/img/about/valimg.jpg';
//import icons
import { AiFillInstagram } from 'react-icons/ai';
import { FaSpotify, FaYoutube } from 'react-icons/fa';

export const headerData = {
  logo: Logo,
};

export const heroData = {
  title: 'HVMΛNE',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    ',
  btnText: 'ENTER',
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/main', name: 'Home' },
    { href: 'custombuildform', name: 'Custom Builds' },
    { href: 'images', name: 'Images' },
    { href: 'videos', name: 'Videos' },
  ],
};

export const socialData = [
  {
    href: 'https://www.instagram.com/valorous_guitars/',
    icon: <AiFillInstagram />,
  },
];

export const aboutData = {
  items: [
    {
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: img1,
    },
  ],
};

export const slides = [

];

// testimonials
export const testimonials = [
  {
    authorImg: img1,
    authorText:
      'Great to work with! Great communication, sent photos every step of the way. Beautiful work!',
    authorName: 'Luke Nukem',
    authorPosition: 'Guitarist, PSYCH-WAR',
  },
];

export const footerData = {
  about: {
    title: 'HVMΛNE',
    subtitle: 'For getting in touch you can send and email to:',
    email: {
      address: 'hvmane@gmail.com(placeholder)',
    },
  },
  links: {
    title: 'links:',
    items: [
      { href: '#/main/termsofservice', name: 'Terms of Service' },
      {
        href: '#/main/contact',
        name: 'Contact',
      },
      { href: '#/main/webstore', name: 'Webstore' },
      { href: 'https://www.instagram.com/hvmane_official/', name: <AiFillInstagram /> },
      { href: 'https://www.youtube.com/@HVMANE_OFFICIAL', name: <FaYoutube /> },
      { href: 'https://spotify.link/H7FSWMF8ZDb', name: <FaSpotify /> },
    ],
  },
};

export const contactData = {
  title: 'Get in contact:',
  info: [
    {
      title: 'Email:',
      subtitle:
        'Send us an email if you would like to get in contact',
      email: {
        icon: 'email:',
        address: 'hvmane@gmail.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};
