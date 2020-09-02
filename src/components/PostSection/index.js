import React from 'react';

import BasicInfo from '../BasicInfo';
import Likes from '../Likes';

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
                <div>
                    <BasicInfo postDate="01/SETEMBRO/2020" readTime="7" />
                    <Likes qtdLikes="7" props="flex-wrapper-row" />
                </div>
                <img src={avatarImage} alt="Avatar Image"/>
            </footer>
        </div>
    )
}