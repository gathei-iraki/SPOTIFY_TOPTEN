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
  <h1 className="text-white text-4xl fade-in">Welcome to Spotify Ten</h1>
  <h1 className="text-white text-3xl fade-in delay-1">Get to know your top ten Spotify tracks.</h1>
</div>



</div>

);
};

export default HomePage;
