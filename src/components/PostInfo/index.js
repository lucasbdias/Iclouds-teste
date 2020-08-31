import React from 'react';

import BasicInfo from '../BasicInfo';

import './styles.css';

export default function PostInfo ({category}) {
    return (
        <div id="postInfo">
            <p> Categoria: <span>{category}</span> </p>
            <BasicInfo postDate="01/SETEMBRO/2020" readTime="7" />
        </div>
    )
}