import Logo from '../src/svg/ValorousLogo.svg';
//import about photos
import img1 from '../src/img/about/valimg.JPEG';
//import testimonials photos
import luket from "../src/img/testimonials/luketest.jpg"
import TJtest from "../src/img/testimonials/TJtest.jpg"
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
      paragraph1:
        'My name is Kevin, I am the founder of Valorous Custom Guitars, established in 2023. With over two decades of experience in woodworking, art, audio engineering, performing, and lutherie, I have cultivated a diverse skill set that shapes my craft.',
        paragraph2:
        'My journey with guitars began at the age of 12, inspired by bands like Metallica, Slayer, and Motörhead. Through hands-on exploration of fretwork, electronics, and woodwork on my own instruments, I opted for experiential learning over traditional apprenticeships.',
        paragraph3: 
        'Drawing upon my professional background in furniture building, tattooing, and audio engineering, I have developed a unique approach to crafting custom guitars. Valorous is the culmination of my lifelong passion for creating instruments of superior quality and craftsmanship.',
        paragraph4:
        'Each guitar I build is a labor of love, reflecting my unwavering commitment to excellence. Valorous Custom Guitars is not just a business to me; it is a manifestation of my vocation and a testament to my dedication to producing exceptional instruments for musicians who share my reverence for music and artistry.',
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
