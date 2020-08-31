import React from 'react';

import './styles.css';

export default function TagSection({}) {
    return (
        <div className="tagSection">
            <span>tags:</span>
            <div className="tagContent">
                <ul>
                    <li><a href="#">Diy</a></li>
                    <li><a href="#">Vendas</a></li>
                    <li><a href="#">Aplicativo</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Ipsum</a></li>
                    <li><a href="#">Dolor</a></li>
                </ul>
            </div>
        </div>
    )
}