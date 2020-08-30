import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data.items);
        })
    }, []);


    return (
        <>
            <Header title="oi" />
        </>
    )
}