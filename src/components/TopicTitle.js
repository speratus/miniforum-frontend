import React from 'react';

import { withRouter } from 'react-router-dom';
import { Box, Title } from 'rbx';

const TopicTitle = props => {
    return <Box onClick={()=> props.history.push({pathname: props.to})}>
        <Title>{ props.text }</Title>
    </Box>
}

export default withRouter(TopicTitle);