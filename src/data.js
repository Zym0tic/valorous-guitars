import Logo from '../src/svg/ValorousLogo.svg';
//import about photos
import img1 from '../src/img/about/valimg.jpg';
import img2 from '../src/img/about/1hristo-4430.jpg';
import img3 from '../src/img/about/1hristo-4462.jpg';
import img4 from '../src/img/about/1hristo-4497.jpg';
import img5 from '../src/img/about/1hristo-4499.jpg';
import img6 from '../src/img/about/1hristo-4506.jpg';
import img7 from '../src/img/about/1hristo-8338.jpg';
//import discography photos
import todayEp from '../src/img/discography/today-ep.png';
import deadDogsSingle from '../src/img/discography/dead-dogs-single.png';
//import pdf's
import pdf1 from '../src/pdf/Stay-Humane-Guitar.pdf';
import pdf2 from '../src/pdf/Stay-Humane-Ukulele.pdf';
import pdf3 from '../src/pdf/Dont Cry-Humane.pdf';
import pdf4 from '../src/pdf/Black Horses-Humane-Capo.pdf';
import pdf5 from '../src/pdf/Black Horses-Humane-Ukulele.pdf';
import pdf6 from '../src/pdf/Black Horses-Humane-Concert Key.pdf';
import pdf7 from '../src/pdf/Blue Pills ~ Humane ~ Guitar.pdf';
import pdf8 from '../src/pdf/Blue Pills ~ Humane ~ Ukulele.pdf';
import pdf9 from '../src/pdf/Dead Dogs _ Humane _ Guitar.pdf';
import pdf10 from '../src/pdf/Dead Dogs _ Humane _ Guitar w.Capo.pdf';
import pdf11 from '../src/pdf/Dead Dogs _ Humane _ Ukulele.pdf';
import pdf12 from '../src/pdf/Today ~ Humane ~ Guitar.pdf';
import pdf13 from '../src/pdf/Today ~ Humane ~ Ukulele.pdf';
//import icons
import { AiFillInstagram } from 'react-icons/ai';
import { FaSpotify, FaYoutube } from 'react-icons/fa';

export const headerData = {
  logo: Logo,
};

export const heroData = {
  title: 'HVMΛNE',
  subtitle:
    '"I learned many languages, not all of them human. Music has always been a big part of my existence, connecting me with reality, and accompanying my life path with messages from within so deep, sometimes they take me decades to unravel." ',
  btnText: 'ENTER SITE',
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/main', name: 'Home' },
    { href: 'discography', name: 'Discography' },
    { href: 'images', name: 'Images' },
    { href: 'videos', name: 'Videos' },
  ],
};

export const socialData = [
  {
    href: 'https://www.instagram.com/hvmane_official/',
    icon: <AiFillInstagram />,
  },
  {
    href: 'https://spotify.link/H7FSWMF8ZDb',
    icon: <FaSpotify />,
  },
  {
    href: 'https://www.youtube.com/@HVMANE_OFFICIAL',
    icon: <FaYoutube />,
  },
];

export const aboutData = {
  items: [
    {
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      subtitle1:
        'Since I was very young, I found out white noise caused me to ‘hear’ music and compose original pieces in my head that were big and grandiose. Symphonies of harmonies and instruments flooded my brain on a regular basis, and every car ride was a concert in my head. ',
      subtitle2:
        'At home, I was infused with the rock music of the 60’s and 70’s while growing up in the vibes of the 80’s and 90’s on the street. I loved all music. Original Bulgarian folklore had also left its mark with its magical rhythms, dances, and harmonies.',
      subtitle3:
        'By age 6 I had started playing my grandfather’s accordion and learning songs on my dad’s guitar. There was a tambourine at home, my mom’s melodica and harmonica, later electric pianos, I’d play anything that made a sound.',
      img: img1,
    },
    {
      subtitle:
        'I absolutely loved the guitar and by age 9 I transitioned to acoustic guitar as a main instrument and began taking lessons. I remember writing my first songs at age 10.',
      subtitle1:
        'I played lots of Spanish and Flamenco guitar in high school, while my exposure to musical influences continued to grow.',
      subtitle2:
        'I learned many languages, not all of them human. Music has always been a big part of my existence, connecting me with reality, and accompanying my life path with messages from within so deep, sometimes they take me decades to unravel.',
      subtitle3:
        "Through ups and ups and twists and turns in my 40's, I gave way to my soul, to my doggie, to HVMANE. Hundreds of poems, songs, and compositions descended upon me so hard and so fast. I was fully immersed. From some eternal abyss they came at me and sang me deep down into the sky.",
      img: img2,
    },
    {
      subtitle:
        'I’ve always loved recording my music. Since a very young age, I played around with cassettes and reel-to-reel recorders. Eventually that love evolved into digital recording in home studios.',
      subtitle1:
        'By the start of the covid pandemic, I had written and composed so many songs, it started to get really heavy inside. The weight created a strong urge to record and release what I had written.',
      subtitle2:
        ' The covid lockdown brought an opportunity to focus on these songs and there began my quest to record them all. I met and collaborated with a very talented musical collective which we later dubbed ‘And The Mysteries’.',
      img: img3,
    },
  ],
};

export const slides = [
  {
    url: img4,
  },
  {
    url: img5,
  },
  {
    url: img6,
  },
  {
    url: img7,
  },
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];

export const discographyData = {
  items: [
    {
      title: 'TODAY EP',
      img: todayEp,
      tracks: [
        {
          songtitle: 'Stay',
          writer: 'Hvmane',
          recordingEng: 'Blaine Misner',
          masteringEng: 'Mike Monseur',
          vocals: 'Hvmane, Mary Lankford',
          guitar: 'Hvmane',
          percussion: 'Blaine Minser',
          bass: 'Blaine Misner',
          keys: 'Blaine Misner',
          arrangements: 'Hvmane, Blaine Minser',
          composers: 'Hvmane',
          cello: 'Erin Snedecor',
          Studio: 'Cue Recording Studio',
          label: 'Hvmane Records',
          href: 'https://open.spotify.com/track/4GRbAOgK3mU0HLTF4BCtYw?si=94c3e7a92d3041bf',
        },
        {
          songtitle: 'Blue Pills',
          writer: 'Hvmane',
          recordingEng: 'Blaine Misner',
          masteringEng: 'Mike Monseur',
          vocals: 'Hvmane',
          guitar: 'Hvmane, Blaine Minser',
          percussion: 'Blaine Minser',
          bass: 'Blaine Minser',
          keys: 'Blaine Minser',
          accordion: 'Hvmane',
          arrangements: 'Hvmane, Blaine Minser',
          composers: 'Hvmane',
          Studio: 'Cue Recording Studio',
          label: 'Hvmane Records',
          href: 'https://open.spotify.com/track/1IX5vNc6BmbpkbU1tEh3l6?si=1b95ba44fc794978',
        },
        {
          songtitle: 'Today',
          writer: 'Hvmane',
          recordingEng: 'Blaine Misner',
          masteringEng: 'Mike Monseur',
          vocals: 'Hvmane',
          guitar: 'Hvmane',
          percussion: 'Blaine Minser',
          bass: 'Blaine Minser',
          key: 'Blaine Minser',
          arrangements: 'Hvmane, Blaine Minser',
          composers: 'Hvmane',
          Studio: 'Cue Recording Studio',
          label: 'Hvmane Records',
          href: 'https://open.spotify.com/track/67A5FhB17IuV0X6kQKCW13?si=69654f65e82b4616',
        },
        {
          songtitle: 'Black Horses',
          writer: 'Hvmane',
          recordingEng: 'Blaine Misner',
          masteringEng: 'Mike Monseur',
          vocals: 'Hvmane',
          guitar: 'Hvmane, Blaine Minser',
          percussion: 'Blaine Minser',
          bass: 'Blaine Minser',
          key: 'Blaine Minser',
          arrangements: 'Hvmane, Blaine Minser',
          composers: 'Hvmane',
          Studio: 'Cue Recording Studio',
          label: 'Hvmane Records',
          href: 'https://open.spotify.com/track/7mAsYzWT7w2mUKU5BA5Z3v?si=55e674013d444073',
        },
        {
          songtitle: "Don't Cry",
          writer: 'Hvmane',
          recordingEng: 'Blaine Misner',
          masteringEng: 'Mike Monseur',
          vocals: 'Hvmane, Mary Lankford',
          guitar: 'Hvmane, Rhys',
          percussion: 'Blaine Minser',
          bass: 'Blaine Minser, Blade Ronetz',
          key: 'Blaine Minser, Blade Ronetz',
          arrangements: 'Hvmane, Blaine Minser',
          composers: 'Hvmane',
          cello: 'Erin Snedecor',
          Studio: 'Cue Recording Studio',
          label: 'Hvmane Records',
          href: 'https://open.spotify.com/track/1A0URnZlju8qarn1stuZ7G?si=388a8beede914a20',
        },
      ],
    },
    {
      title: 'DEAD DOGS (Single)',
      img: deadDogsSingle,
      tracks: [
        {
          songtitle: 'Dead Dogs',
          writer: 'Hvmane',
          recordingEng: 'Blaine Misner',
          masteringEng: 'Mike Monseur',
          vocals: 'Hvmane',
          guitar: 'Hvmane, Blaine Minser',
          percussion: 'Blaine Minser',
          bass: 'Blaine Minser',
          key: 'Blaine Minser',
          arrangements: 'Hvmane, Blaine Minser',
          composers: 'Hvmane',
          whistle: 'Hvmane',
          Studio: 'Cue Recording Studio',
          label: 'Hvmane Records',
          href: 'https://open.spotify.com/track/5YONFDgf0SJEyi7OrCvKSe?si=2508631c2c654c0b',
        },
      ],
    },
  ],
};


export const tabsData = {
  sub: 'click the links to view PDF',
  items: [
    {
      href: pdf4,
      subtitle: 'Black Horses(Capo) PDF',
    },
    {
      href: pdf6,
      subtitle: 'Black Horses(concert Key) PDF',
    },
    {
      href: pdf5,
      subtitle: 'Black Horses(Ukulele) PDF',
    },
    {
      href: pdf7,
      subtitle: 'Blue Pills(Guitar) PDF',
    },
    {
      href: pdf8,
      subtitle: 'Blue Pills(Ukulele) PDF',
    },
    {
      href: pdf9,
      subtitle: 'Dead Dogs(Guitar) PDF',
    },
    {
      href: pdf10,
      subtitle: 'Dead Dogs(Capo) PDF',
    },
    {
      href: pdf11,
      subtitle: 'Dead Dogs(Ukulele) PDF',
    },
    {
      href: pdf3,
      subtitle: "Don't Cry(Guitar) PDF",
    },
    {
      href: pdf1,
      subtitle: 'Stay(Guitar) PDF',
    },
    {
      href: pdf2,
      subtitle: 'Stay(Ukulele) PDF',
    },
    {
      href: pdf12,
      subtitle: 'Today(Guitar) PDF',
    },
    {
      href: pdf13,
      subtitle: 'Today(Ukulele) PDF',
    },
  ],
};

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
