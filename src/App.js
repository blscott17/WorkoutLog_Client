import React, { useState, useEffect } from 'react';
import Sitebar from './home/Navebar'; // Application - 4
import Auth from './auth/Auth'; // Application - 9
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect(() => {
    if (localStorage.getItem('token'));
    setSessionToken(localStorage.getItem('token'));
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken();
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem('token') ? (
      <WorkoutIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };
  console.log(sessionToken);
  // render method is here
  return (
    <div>
      {/* Application - 5 */}
      <Sitebar clickLogout={clearToken} />
      {/* Parent Passing Down Props to the Children - 1.*/}
      {protectedViews()}
    </div>
  );
}

export default App;

// Application 5 - call Sitebar inside of your  return()
// Application 6 - Basic Component SetUp, Step2. Add code above, then we'll check out the
// App-6 notes below.
// Application 7 - In src add new folder auth, inside folder add new file Auth.js to build a
// new component, go to that component.
// Application 10 - call Auth inside of the return()
// Application 11 - Create a Login Component in auth/ go to that component to bulid it.
// Application 15 - call Login and Signin inside of the return()

// App-6 Notes
// 1. We are using the useState hook to create a new state variable, sessionToken.  Because our sessionToken will change during the course of our app running (it will start empty, be given a value upon logging in, then emptied upon logout), we also use the second argument of useState, which allows us to change our sessionToken state variable.
// 2. We have an effect that runs once upon initial component load.  It updates our sessionToken state variable if Chrome has saved a sessionToken in localStorage.  Because we pass an empty array as a second argument, there is no change our effect is tracking to re-run later, so the effect runs only upon initial component load.
// 3. This function takes in a token (we'll use this function later in a component that will grab the sessionToken after an API call) and saves it two places--both in our localStorage and in our state variable, sessionToken.  The localStorage is a secure place to store this data, and will persist as long as our browser is open.  The state variable allows child components to quickly access the sessionToken for use.
