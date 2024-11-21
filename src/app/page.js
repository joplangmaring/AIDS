'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Logos from './components/ctrl-society';
import Helpline from './components/helpline';
import Slider from './components/slider';
import HivTest from './components/hivtest';
// import Map from './components/map';
import Activities from './components/activities';
import Form from './components/form';
// import About from './components/about';
import Nbtc from './components/nbtc';
import Aidnumber from './components/aidnumber';
import Hivpoints from './components/hivpoints';
// import Indialogos from './components/indialogos';
import Footer from './components/footer';
import Officials from './components/Officials';
import ComplaintForm from './components/ComplaintForm';
import NearbyServices from './components/NearbyServices';
import AlertBar from './components/AlertBar';

const Page = () => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    // Scroll to Logos immediately on page load
    const logosElement = document.querySelector('#logos');
    if (logosElement) {
      logosElement.scrollIntoView({ behavior: 'auto' }); // No animation, direct scroll
    }

    // Lock the scroll
    document.body.style.overflow = 'hidden';

    // After 2 seconds, unlock the scroll and reset to the top
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'auto'; // Unlock scroll
      setIsLocked(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = 'auto'; // Clean up scroll lock
    };
  }, []);

  return (
    <div className={`overflow-hidden ${isLocked ? 'no-scroll' : ''}`}>
      <Navbar />
      <AlertBar />
      <Officials />
      {/* Logos Section */}
      <div id="logos">
        <Logos />
      </div>
      <HivTest />
      {/* <Slider /> */}
      <Activities />

      {/* <Map/> */}

      {/* <About/> */}
      <Aidnumber />
      <Nbtc />

      <ComplaintForm />
      <Hivpoints />
      {/* <Helpline/> */}

      {/* <Indialogos/> */}

      {/* <Form /> */}

      <Footer />
    </div>
  );
};

export default Page;
