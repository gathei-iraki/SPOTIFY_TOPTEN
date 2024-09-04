//in next index.js acts as the homepage/mainpage
import React from 'react';
import { StarsBackground } from '../components/ui/stars-background';

const HomePage = () => {
return (
    <div className="relative h-screen w-screen">
        <StarsBackground className="z-0" />
        <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-4xl">Welcome to Spotify Ten</h1>
        
        </div>
    </div>
);
};

export default HomePage;
