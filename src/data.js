import Logo from '../src/svg/ValorousLogo.svg';
//import about photos
import img1 from '../src/img/about/valimg.jpg';
import img2 from "../src/img/finishedguitars/2FADAB6C-9C19-4C5A-BFCF-281752F664DA.png"
//import icons
import { AiFillInstagram } from 'react-icons/ai';

export const headerData = {
  logo: Logo,
};

export const heroData = {
  title: 'Valorous Guitars',
  subtitle:
    'Custom Guitar Shop and Luthier based out of Portland, Oregon.',
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
    href: 'https://www.instagram.com/valorousguitars/',
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
      '"Great to work with! Great communication, sent photos every step of the way. Beautiful work!"',
    authorName: 'Luke Nukem',
    authorPosition: 'Guitarist, PSYCH-WAR',
  },
  {
    authorImg: img2,
    authorText:
      '"Great to work with! Great communication, sent photos every step of the way. Beautiful work!"',
    authorName: 'Luke Nukem',
    authorPosition: 'Guitarist, PSYCH-WAR',
  },
  {
    authorImg: img1,
    authorText:
      '"Great to work with! Great communication, sent photos every step of the way. Beautiful work!"',
    authorName: 'Luke Nukem',
    authorPosition: 'Guitarist, PSYCH-WAR',
  },
  {
    authorImg: img2,
    authorText:
      '"Great to work with! Great communication, sent photos every step of the way. Beautiful work!"',
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
      { href: 'https://www.instagram.com/valorousguitars/', name: <AiFillInstagram /> },
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
        address: 'valorousguitars@gmail.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    btnText: 'Send',
  },
};
