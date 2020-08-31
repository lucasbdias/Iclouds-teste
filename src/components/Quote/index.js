import React from 'react';

import './styles.css';

export default function Quote({citation}) {
    return (
        <div id="quote">
            <span>"</span>
            <p>{citation}</p>
            <span>"</span>
        </div>
    )
}