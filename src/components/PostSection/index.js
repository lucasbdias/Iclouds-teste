import React from 'react';

import BasicInfo from '../BasicInfo';

import avatarImage from '../../assets/images/avatar.png';

import './styles.css';

export default function PostSection({title, description}) {
    return (
        <div className="postSection">
            <main>
                <h3>{title}</h3>
                <p>{description}</p>
            </main>
            <footer>
                <BasicInfo postDate="01/SETEMBRO/2020" readTime="7" />
                <img src={avatarImage} alt="Avatar Image"/>
            </footer>
        </div>
    )
}