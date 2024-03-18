import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeVid from '../components/WelcomeVid';
import Images from '../components/Images';
// import Lyrics from '../components/Lyrics'
import Tabs from '../components/Tabs';
import Copyright from '../components/Copyright';
import Home from '../components/Home';
import ComingSoon from '../components/ComingSoon';
import Discography from '../components/Discography';
import TermsOfService from '../components/TermsOfService';
import Contact from '../components/Contact';

function Main() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top whenever location.pathname changes

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<WelcomeVid />} />
          <Route path="/images" element={<Images />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/webstore" element={<ComingSoon/>} />
        </Routes>
        <Footer />
      <Copyright />
    </div>
  );
}

export default Main;