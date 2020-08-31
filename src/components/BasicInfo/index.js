import React from 'react';

import calendarIcon from '../../assets/images/icons/calendar.png';
import clockIcon from '../../assets/images/icons/clock.png';

import './styles.css';

export default function BasicInfo ({postDate, readTime}) {
    return (
        <div className="basicInfo">
            <ul>
                <li>
                    <img src={calendarIcon} alt="Calendar Icon"/>
                    <p>{postDate}</p>    
                </li>
                <li>
                    <img src={clockIcon} alt="Clock Icon"/>
                    <p>{readTime} min de leitura </p>    
                </li>
            </ul>
        </div>
    )
}