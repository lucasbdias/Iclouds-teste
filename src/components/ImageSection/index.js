import React from 'react';

import './styles.css';

export default function ImageSection({src}) {
    return (
        <div className="imageSection">
            <img src="http://books.google.com/books/content?id=-DFjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="First Image"/>
            <img src="http://books.google.com/books/content?id=-DFjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Second Image"/>
            <img src="http://books.google.com/books/content?id=-DFjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Third Image"/>
        </div>
    );
}