import React from 'react';

import { Icon } from 'rbx';
import MdiIcon from '@mdi/react';

import { mdiThumbUpOutline } from '@mdi/js';

const LikeButton = props => {
    return <Icon onClick={props.action}>
        <MdiIcon path={mdiThumbUpOutline} 
            size={1}
        />
    </Icon>
};

export default LikeButton;