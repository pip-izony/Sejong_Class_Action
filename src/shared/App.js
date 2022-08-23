import React, { Component, useState } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import { Home, About, Sign_in, Sign_up, Validation} from '../pages';
import Profile from '../pages/Profile'
import AuthRoute from '../components/AuthRoute';

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  //const login = ({ email, password }) => setUser(signIn({ email, password }));
  //const logout = () => setUser(null);
    return (
      <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign_in" element={<Sign_in />}/>
        <Route path="/sign_up" element={<Sign_up />}/>
        <AuthRoute
          authenticated={authenticated}
          path="/sign_up/validation"
          render={props => <Validation user={user} {...props} />}
        />
      </Routes>
      </div>
    );
  };
  

export default App;