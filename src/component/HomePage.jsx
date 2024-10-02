import React from 'react';
import Sidebar from './SideBar';
import HomePageContent from './HomePageContent';
function HomePage() {
  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <HomePageContent/>
    </div>
  );
}

export default HomePage;