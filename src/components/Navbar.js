import React from 'react';

import {Navbar as Nav, Button} from 'rbx';

function Navbar() {
    return <Nav>
        <Nav.Brand>
            <Nav.Item>
                Miniform
            </Nav.Item>
        </Nav.Brand>
        <Nav.Menu>
            <Nav.Segment align="end">
                <Button.Group>
                    <Button color="light">Sign in</Button>
                    <Button color="link">Sign up</Button>
                </Button.Group>
            </Nav.Segment>
        </Nav.Menu>
    </Nav>
}

export default Navbar;