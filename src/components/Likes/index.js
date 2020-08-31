import React from 'react';

import clapIcon from '../../assets/images/icons/clap.png';

import './styles.css';

export default function Likes({props, qtdLikes}) {
    return (
        <div className="likeBox">
            <div className={props}>
                <img src={clapIcon} alt="Clap Icon"/>
                <span>{qtdLikes}</span>
            </div>
        </div>
    )
}