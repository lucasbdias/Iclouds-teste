import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import facebookIcon from '../../assets/images/icons/facebook.png';
import twitterIcon from '../../assets/images/icons/twitter.png';
import linkedinIcon from '../../assets/images/icons/linkedin.png';
import mailIcon from '../../assets/images/icons/mail.png';

import './styles.css';

export default function SocialMedias({props}) {
    return (
        <div className="socialMedias" >
            <ul className={props}>
                <li>
                    <a href="#"><img src={whatsappIcon} alt="WhatsApp Icon"/></a>
                </li>
                <li>
                    <a href="#"><img src={facebookIcon} alt="Facebook Icon"/></a>
                </li>
                <li>
                    <a href="#"><img src={twitterIcon} alt="Twitter Icon"/></a>
                </li>
                <li>
                    <a href="#"><img src={linkedinIcon} alt="Linkedin Icon"/></a>
                </li>
                <li>
                    <a href="#"><img src={mailIcon} alt="Mail Icon"/></a>
                </li>
            </ul>
        </div>
    )
}