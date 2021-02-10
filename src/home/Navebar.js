import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar color='faded' light expand='md'>
      <NavbarBrand href='/'>Workout Log</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
// Analysis
// Setup a basic Component
// A.	Inside of index.js, add the following to the top of the file:
// // import 'bootstrap/dist/css/bootstrap.min.css';
// B. Right click on your src folder and add new folder called home folder.
// •	Add a Navbar.js file (THIS FILE) in the home folder.
// C. Go to app.js and: import Sitebar from './home/Navebar';
