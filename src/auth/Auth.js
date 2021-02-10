import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
  //2
  return (
    <Container className='auth-container'>
      <Row>
        {/* Application - 15 - Mounting Signup */}
        <Col md='6'>
          <Signup updateToken={props.updateToken} />
        </Col>
        {/* Application - 15 - Mounting Login */}
        <Col md='6' className='login-col'>
          <Login updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;

// Application - 8, add the initial code above
// Application - 9, go to App.js and import this component

// Application - 8, Notes on this code:
// We are importing all of the Bootstrap tools that allow us to use its grid system.  For further reference on Bootstrap grid, refer here:
// https://getbootstrap.com/docs/4.0/layout/grid/ (Links to an external site.)
// We are creating a functional component. It has no state, and it will simply pull in the props that will be passed down eventually.  Currently, this component is basically going to hold our login and signup forms side by side.  We have stubbed them out as text, but we'll add them as components later.
