import Logo from '../src/svg/ValorousLogo.svg';
//import about photos
import img1 from '../src/img/about/valimg.JPEG';
import stormbringer from '../src/img/about/stormbringer.png';
import stormbringer2 from '../src/img/about/stormbringer2.png';
import warmachine from '../src/img/about/warmachine.png';
import morgulblade from '../src/img/about/morgulblade.png';
import deathdealer from '../src/img/about/deathdealer.png';
import carrionbird from '../src/img/about/carrionbird.png';
import stormbringerback from '../src/img/about/stormbringerback.png';
import stormbringer2back from '../src/img/about/stormbringer2back.png';
import warmachineback from '../src/img/about/warmachineback.png';
import deathdealerback from '../src/img/about/deathdealerback.png';
import carrionbirdback from '../src/img/about/carrionbirdback.png';
import jawbreakerfront from '../src/img/about/jawbreakerfront.png';
import jawbreakerback from '../src/img/about/jawbreakerback.png';
//import testimonials photos
import luket from '../src/img/testimonials/pwwarmachine2.jpg';
import TJtest from '../src/img/testimonials/TJtest.jpg';
import anotherdemon from '../src/img/testimonials/ANOTHERDEMON.jpg'; 
//import partner images
import kahler from '../src/img/partners/Kahler.jpg';
import hipshot from '../src/img/partners/hipshot-products-vector-logo.png';
import bareknuckle from '../src/img/partners/bareknuckle.jpg';
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
  subtitle: 'Custom Electric Guitars Handcrafted in Portland, Oregon.',
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
        'Behold! A new dawn breaks, for Valorous Guitars has been bestowed upon the realm. To labor over fretted wonders, a long-awaited yearning fulfilled, for it is the vocation of lutherie that finds solace within.',
      paragraph2:
        'I am Kevin, the sole luthier behind Valorous Guitars. In my workshop, each guitar is a testament to my unwavering passion for this timeless craft. My creations are not merely tools; they are to be extensions of the soul, forged with meticulous attention to detail and a steadfast commitment to quality. ',
      paragraph3:
        'I strive to create an instrument that resonates with the true spirit of those who wield it. Every build is unique, designed to deliver unparalleled performance, tone and appeal; to achieve a sense of power, captivation, and innovation every time you pick up your guitar.',
      paragraph4:
        'If you so desire to join the ranks, to wield a Valorous weapon of your own fortified for a lifetime of service, you shall find the freedom to inquire as above, so below. Whether you possess the knowledge of your preferred specifications, or you have yet to discover all the qualities that you crave, we shall council together to conceive your fantasized instrument.',
      img1: stormbringer,
      img2: warmachine,
      img3: morgulblade,
      img4: deathdealer,
      img5: carrionbird,
      img6: stormbringer2,
      img7: stormbringerback,
      img8: warmachineback,
      img9: deathdealerback,
      img10: carrionbirdback,
      img11: stormbringer2back,
      img12: jawbreakerfront,
      img13: jawbreakerback,
      img: img1,
    },
  ],
};

export const slides = [];

// testimonials
export const testimonials = [
  {
    authorImg: TJtest,
    authorText:
      "“ Kevin is truly a master of his craft and builds without compromise. We worked together to build my dream guitar. We were both on the same wave length for every aspect of the build. He was able to source the best components that bring life to the amazing woods he recommend. Not only is it the most well balanced guitar I've ever held but it sounds even better than it looks, and it's the most beautiful beast. The massive sustain is unlike anything else I've ever had out of any guitar I've owned, vintage or custom shop from all of the major dealers. From the first time I strummed it acoustically I was blown away. It sounded so full without even being plugged in... and then I cranked out of my high gain set up and every one in the room dropped their jaw. As time goes on and I play it more it just keeps getting better. I can't wait until we can start working on the next project together. “",
    authorName: 'Trevor Jayne',
    authorPosition: 'Austin, TEXAS',
  },
  {
    authorImg: luket,
    authorText:
      '"I\'ve owned many guitars over the years, but when I finally received the Warmachine from Kevin, my mind was immediately blown. The craftsmanship and love he puts into his work are instantly apparent. This is hands down the best guitar I\'ve ever played. The sustain is unparalleled, the instrument is perfectly balanced and from the first time I played it, it just felt right. His comminucation and follow-ups with pictures throughout the whole process made it a great experience. I will definitely be a repeat customer and can not wait to work on a new guitar together."',
    authorName: 'Luke Nukem',
    authorPosition: 'Guitarist, PSYCH-WAR',
  },
  {
    authorImg: anotherdemon,
    authorText:
      '"I didn\'t even know I was looking for a custom guitar, until I just happened to see the original Stormbringer one day on Instagram. Not soon after I reached out to Valorous Guitars, and quickly understood what this company was. An extremely detail oriented luthier, with a passion for metal music, and a natural talent for making weapons of metal devastation! After a few minutes of conversation back and forth, we had a solid idea of what I actually wanted out of a guitar. Measurements, Electronics, Looks, and a rendering was made within a day or two. I knew right then and there this was going to be fantastic. Within a matter of weeks, after receiving regular updates, my custom made Stormbringer was delivered to my door. Just in time to head out on tour. It was 100% everything I wanted in a custom guitar. It had every element I\'ve liked from each of my guitars from over the years, expertly blended into one hell of an instrument. Since I\'ve gotten it, I haven\'t been able to put it down! I\'m excited to get another one started! We\'ve already started the process, and I\'m pretty sure there will be a more in the future. If you are looking for a handcrafted masterpiece in your arsenal, look no further than Valorous Guitars!"',
    authorName: 'Frank Tossie',
    authorPosition: 'Guitarist, ANOTHER DEMON',
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
      {
        href: 'https://www.instagram.com/valorousguitars/',
        name: <AiFillInstagram />,
      },
    ],
  },
};

export const contactData = {
  title: 'Get in contact:',
  info: [
    {
      title: 'Email:',
      subtitle: 'Send me an email if you would like to get in contact',
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
  title: 'Some of our Partners',
  images: [
    { kahler: kahler },
    { hipshot: hipshot },
    { bareknuckle: bareknuckle },
    { emg: emg },
    { arcana: arcana },
    { musicnomad: musicnomad },
  ],
};
