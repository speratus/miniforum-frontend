import React from 'react';

import { Title, Media } from 'rbx';

function postAuthorText(isTopic) {
    if (isTopic) {
        return 'Asked By: ';
    } else {
        return 'Answered By: ';
    }
}

const AuthorInfo = props => (
    <Media>
        <Media.Item align='content'>
            {postAuthorText(props.topic)}
        </Media.Item>
        <Media.Item align='right'>
            <Title size={6}>
                {props.author}
            </Title>
            <Title subtitle size={6}>
                {props.pubDate}
            </Title>
        </Media.Item>
    </Media>
);

export default AuthorInfo;