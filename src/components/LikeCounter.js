import React from 'react';

import {Generic} from 'rbx';

const LikeCounter = props => (
    <Generic>
        <strong style={{fontSize: '1.2em'}}>{props.likes}</strong> Likes
    </Generic>
);

export default LikeCounter;