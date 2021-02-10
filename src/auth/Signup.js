import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Use event.prevent default or e.preventdefult so page will NOT REFRESH on Form Submit. CAUTION whichever you use MUST also be in handleSubmit (event) or (e).
  // The onSubmit listens/responds to a 'SUBMIT' even with our handleSubmit callback.
  // NOTE-we do NOT use parens inside the curly bracces because the onSubmit handler is
  // doing the ACTUAL calling.
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user/register', {
      method: 'POST',
      body: JSON.stringify({
        user: { username: username, passwordhash: password },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name='username'
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            value={password}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Signup;

// Application 14 - After adding this component to the file structure, add inital code
// See Analysis below at App-14 Analysis
// Application 15 - Go to App.js and import this component and the Login component.
// Application 16 - Token Auth -Adding State Form Data
// const [username, setUsername] = useState(''); & const [password, setPassword] = useState('');
// Application 17 - Token Auth -Handling Form Data Change
// Added onChange={(e)=> setUsername(e.target.value)} & onChange={(e)=> setPassword(e.target.value)}
// to Input on each Element for Token Authentication

// App-14 Analysis
// Like the Log in component, this is a functional component with two state variables to  control what the user types into the input fields.  The form will be handling our username and password fields. A few key items to note:
// 1. Our use of bootstrap is the same as in our Login component.  Ultimately, these forms contain the same information, but differ only in their titles and the action they initiate with our server when a successful use account is made or processed.
// 2. Once again, because our input fields are tied the state variables, which currently never change, their text content will be static as well (in this case it will be empty).
// Application 17 - Token Auth -Handling Form Data Change - Analysis
// Each time the user types inside of the input, we want the state to change:
// We have defined two functions in-line with our JSX.  Each of these functions is a callback responding to the onChange event listener we've inserted into the input fields.  Just as with vanilla JS we saw in gold badge, these callback functions are called by the event handler, not by us.  Thus, we never have to call these functions in our code, just defined them.  These callback functions, being called within the onChange event handlers, are called with an 'event' object as an argument.  This is default behavior to any event handler.  Digging into these event objects let us grab hold of the input data the user has typed.
