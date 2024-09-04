//in next index.js acts as the homepage/mainpage
import React from 'react';
import { StarsBackground } from '../components/ui/stars-background';

const HomePage = () => {
return (
  <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>

  <StarsBackground />
</div>
);
};

export default HomePage;
