import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLink.css';

const SocialLink = (props) => (
    <div className="social_link">
        <a href={props.socialLink.url} target="_blank">
        <FontAwesomeIcon icon={['fab', props.socialLink.fa_icon]} /><div className="label">{props.socialLink.label}</div>
        </a>
    </div>
)

export default SocialLink;
