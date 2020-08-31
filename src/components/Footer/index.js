import React from 'react';

import TagSection from '../TagSection';
import SocialMedias from '../SocialMedias';
import Likes from '../Likes';

import './styles.css';

export default function Footer({}) {
    return (
        <footer>
            <TagSection />
            <div>
                <SocialMedias props="flex-wrapper-row" />
                <Likes qtdLikes="7" props="flex-wrapper-row" />
            </div>
        </footer>
    )
}