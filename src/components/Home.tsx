import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = function () {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const API_URL = 'http://localhost:8080/';
    const fetchMessage = async () => {
      try {
        const response = await axios.get(API_URL);
        setMessage(response.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchMessage();
  }, []);

  return (
    <div className="Home">
      <h1 className="welcome-message">{message}</h1>
    </div>
  );
};

export default Home;
