import React from 'react';
import Navbar from './Navbar';

const Banner = () => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: "url('../assets/images/cover-bg.png')" }}
    >
      {/* Your content here */}
     {/* <Navbar/> */}
    </div>
  );
};

export default Banner;
