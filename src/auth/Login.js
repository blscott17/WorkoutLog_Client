import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Use event.prevent default or e.preventdefult so page will NOT REFRESH on Form Submit. CAUTION whichever you use MUST also be in handleSubmit (event) or (e).
  // The onSubmit listens/responds to a 'SUBMIT' even with our handleSubmit callback.
  // NOTE-we do NOT use parens inside the curly bracces because the onSubmit handler is
  // doing the ACTUAL calling.
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user/login', {
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
      <h1>Login</h1>
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

export default Login;

// Application 12 - After adding this component to the file structure, add inital code
// See Analysis below at App-12 Analysis
// Application 13 - Add another new compone in auth/ named Signup, go ther now to code it

// App-12 Analysis
// 1. We import lots of bootstrap components, many of which are related to the bootstrap
// form.  If you're curious about bootstrap forms, please take a look here:
// https://getbootstrap.com/docs/4.0/components/forms/ (Links to an external site.)
// 2. We have created state variables 'username' and 'password' which will be fed
// information from the input fields in our form.  Even though we could grab the values of
// these input fields without using state variables, whenever manipulable information on
// your webpage is uncontrolled by React, it's an opportunity for bugs to arise in your
// program.
// 3. Notice that the value of the input fields is ultimately controlled by React, owing
// to point #2 above.  Because this component doesn't implement any use for setUsername
// or setPassword, the input fields will be stuck with no text inside, even if the user
// types in them.
