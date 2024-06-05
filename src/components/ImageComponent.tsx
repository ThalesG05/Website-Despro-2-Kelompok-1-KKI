import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageComponent({ style }) {
  const [latestImage, setLatestImage] = useState('');

  useEffect(() => {
    const fetchLatestImage = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/latestImage');
        console.log('Server response:', response); // Log the server response
        setLatestImage(response.data.latestFile);
      } catch (error) {
        console.error('Failed to fetch latest image:', error);
      }
    };

    fetchLatestImage();
    const intervalId = setInterval(fetchLatestImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        style={style}
        src={latestImage ? `http://localhost:3000/images/${latestImage}` : undefined} 
        alt="Latest" 
      />
    </div>
  );
}

export default ImageComponent;