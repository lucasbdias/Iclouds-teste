import React from 'react';

import avatarImage from '../../assets/images/avatar.png';

import './styles.css';

export default function Header({ title, description }) {
    return (
        <header>
            <img src={avatarImage} alt="Avatar Image"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}