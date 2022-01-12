import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_ERROR } from '../error_messages/error_messages';

const Home: React.FC = function () {
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const API_URL = 'http://localhost:8080/';
        const fetchMessage = async () => {
            try {
                const response = await axios.get(API_URL);
                setMessage(response.data);
            } catch (error: any) {
                console.log(error);
                setErrorMessage(SERVER_ERROR);
            }
        };
        fetchMessage();
    }, []);

    return (
        <div className="Home">
            <h1 className="welcome-message">{message}</h1>
            <p className="error-message">{errorMessage}</p>
        </div>
    );
};

export default Home;
