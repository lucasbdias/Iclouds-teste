import React from 'react';

import Likes from '../Likes';
import  SocialMedias from '../SocialMedias';

import './styles.css';

export default function SideBar({}) {
    return (
        <aside>
            <Likes qtdLikes="7" props={'flex-wrapper-columm'} />
            <SocialMedias props={'flex-wrapper-colum'} />
        </aside>
    )
}