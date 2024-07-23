import Logo from '../src/svg/ValorousLogo.svg';
//import about photos
import img1 from '../src/img/about/valimg.JPEG';
import stormbringer from '../src/img/about/stormbringer.png';
import stormbringer2 from '../src/img/about/stormbringer2.png';
import warmachine from '../src/img/about/warmachine.png';
import morgulblade from '../src/img/about/morgulblade.png';
import deathdealer from '../src/img/about/deathdealer.png';
import carrionbird from '../src/img/about/carrionbird.png';
//import testimonials photos
import luket from "../src/img/testimonials/luketest.jpg";
import TJtest from "../src/img/testimonials/TJtest.jpg";
//import partner images
import kahler from '../src/img/partners/Kahler.jpg';
import hipshot from '../src/img/partners/hipshot-products-vector-logo.png';
import bareknuckle from '../src/img/partners/Bare_Knuckle_Pickups_Logo-38.jpg';
import emg from '../src/img/partners/emg.png';
import arcana from '../src/img/partners/arcanapickups.png';
import musicnomad from '../src/img/partners/music nomad.jpg';
//import icons
import { AiFillInstagram } from 'react-icons/ai';

export const headerData = {
  logo: Logo,
};

export const heroData = {
  title: 'Valorous Guitars',
  subtitle:
    'Custom Electric Guitars Handcrafted in Portland, Oregon.',
  btnText: 'ENTER',
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/main', name: 'Home' },
    { href: 'custombuildform', name: 'Custom Builds' },
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
      img5: carrionbird,
      paragraph1:
        'Behold! A new dawn breaks, for Valorous Guitars has been bestowed upon the realm. To labor over fretted wonders, a long-awaited yearning fulfilled, for it is the vocation of lutherie that finds solace within.',
        img1: stormbringer,
        paragraph2:
        'I am Kevin, the sole luthier behind Valorous Guitars. In my workshop, each guitar is a testament to my unwavering passion for this timeless craft. My creations are not merely tools; they are to be extensions of the soul, forged with meticulous attention to detail and a steadfast commitment to quality. ',
        img2: warmachine,
        paragraph3: 
        'I strive to create an instrument that resonates with the true spirit of those who wield it. Every build is unique, designed to deliver unparalleled performance, tone and appeal; to achieve a sense of power, captivation, and innovation every time you pick up your guitar.',
        img3: morgulblade,
        paragraph4:
        'If you so desire to join the ranks, to wield a Valorous weapon fortified for a lifetime of service, you shall find the freedom to inquire above and below. Whether you possess the knowledge of your preferred specifications, or you have yet to discover all the qualities that you crave, we shall council together to conceive your dream instrument.',
        img4: deathdealer,
        img6: stormbringer2,
      img: img1,
    },
  ],
};

export const slides = [

];

// testimonials
export const testimonials = [
  {
    authorImg: TJtest,
    authorText:
      '“ Kevin is truly a master of his craft and builds without compromise. We worked together to build my dream guitar. We were both on the same wave length for every aspect of the build. He was able to source the best components that bring life to the amazing woods he recommend. Not only is it the most well balanced guitar I\'ve ever held but it sounds even better than it looks, and it\'s the most beautiful beast. The massive sustain is unlike anything else I\'ve ever had out of any guitar I\'ve owned, vintage or custom shop from all of the major dealers. From the first time I strummed it acoustically I was blown away. It sounded so full without even being plugged in... and then I cranked out of my high gain set up and every one in the room dropped their jaw. As time goes on and I play it more it just keeps getting better. I can\'t wait until we can start working on the next project together. “',
    authorName: 'Trevor Jayne',
    authorPosition: 'Austin, TEXAS',
  },
  {
    authorImg: luket,
    authorText:
      '"I\'ve owned many guitars over the years, but when I finally received the Warmachine from Kevin, my mind was immediately blown. The craftsmanship and love he puts into his work are instantly apparent. This is hands down the best guitar I\'ve ever played. The sustain is unparalleled, and from the first time I played it, it just felt right. I will definitely be a repeat customer."',
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
        'Send me an email if you would like to get in contact',
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

export const partnersData = {
  title: "Some of our Partners",
  images: [
    { kahler: kahler },
    { hipshot: hipshot },
    { bareknuckle: bareknuckle },
    { emg: emg },
    { arcana: arcana },
    { musicnomad: musicnomad },
  ],
};