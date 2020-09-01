import React from 'react';

import './styles.css';

export default function ImageSection({imagesSource}) {
    return (
        <div className="imageSection">
            {imagesSource.map(source => <img key={source} src={source} alt="Book Thumnail" /> )}
        </div>
    );
}