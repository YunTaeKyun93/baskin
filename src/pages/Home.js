import React from 'react'
import EventBanner from '../components/EventBanner';
import EventStore from '../components/EventStore';
import BrMenu from '../components/BrMenu';
import BrStore from '../components/BrStore';
import BrSns from '../components/BrSns';
import { useEffect } from 'react';



const Home = () => {
  return (
    <>
      <EventBanner/>
      <EventStore/>
      <BrMenu/>
      <BrStore/>
      <BrSns/>
 
      {/* <Test/> */}
    </>
  )
}

export default Home;
