// pages/top-tracks.js
import React, { useEffect, useState } from 'react';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/top-tracks');
      const { tracks } = await res.json();
      setTracks(tracks);
    };

    fetchTracks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Tracks</h1>
      <ul className="space-y-4">
        {tracks.map((track, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg">
            <a
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {track.title} by {track.artist}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
