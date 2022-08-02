import React from 'react'
import EventBanner from './EventBanner';
import EventStore from './EventStore';
import Test from './Test';
import BrMenu from './BrMenu';
import BrStore from './BrStore';
import BrSns from './BrSns';



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
