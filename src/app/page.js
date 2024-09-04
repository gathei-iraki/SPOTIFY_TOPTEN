//in next index.js acts as the homepage/mainpage
import React from 'react';
import { StarsBackground } from '../components/ui/stars-background';
import { ShootingStars } from '../components/ui/shooting-stars';


const HomePage = () => {
return (
  <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>

  <StarsBackground />
  <ShootingStars />
  <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
  <h1 className="text-white text-6xl fade-in">Welcome to Spotify Ten</h1>
  <h1 className="text-white text-5xl fade-in delay-1">Get to know your top ten Spotify tracks.</h1>
  <div className="mt-6"></div>
  <button className="p-[3px] relative mt-4 w-[300px]">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    GET STARTED
  </div>
</button>
</div>



</div>

);
};

export default HomePage;
