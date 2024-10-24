import React from 'react';
import Navbar from './components/navbar';
import Logos from './components/ctrl-society';
import Helpline from './components/helpline';
import Slider from './components/slider';
import HivTest from './components/hivtest';
// import Map from './components/map';
import Activities  from './components/activities';
import Form from './components/form';
// import About from './components/about';
import Nbtc from './components/nbtc';
import Aidnumber from './components/aidnumber';
import Hivpoints from './components/hivpoints';
// import Indialogos from './components/indialogos';
 import Footer from './components/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Logos/>
      <Slider/>
      <HivTest/>
      
   
      {/* <Map/> */}
    
      {/* <About/> */}
      <Nbtc/>
      <Aidnumber/>
      <Activities/>
      <Hivpoints/>
      {/* <Helpline/> */}
      
      {/* <Indialogos/> */}
      
      <Form/>
      <Footer/>
    </div>
  )
}

export default page