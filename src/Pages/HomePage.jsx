import React from 'react';
import Sidebar from '../component/SideBar';
import HomePageContent from '../component/HomePageContent';
function HomePage() {
  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <HomePageContent/>
    </div>
  );
}

export default HomePage;