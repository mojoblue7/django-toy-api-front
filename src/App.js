import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import './';
import MainContainer from './containers/MainContainer';
import { Route } from 'react-router-dom';
import SignupContainer from './containers/SignupContainer';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const App = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [salt, setSalt] = useState();

  const postLogin = () => {
    const password = 'asdfASDF!@#$';

    const postData = (hashed, salt) => {
      axios
        .post('/toy_api/login/', {
          username: 'mojoblue7',
          password: hashed,
          salt: salt,
        })
        .then((res) => {
          const data = res.data;
          setUsername(data.username);
          setPassword(data.password);
          setSalt(data.salt);
        })
        .catch((err) => console.log(err));
    };
  };
  return (
    <>
      <Route path='/' component={MainContainer} exact={true} />
      <Route path='/signup' component={SignupContainer} exact={true} />
      {/* <Route path="/signup" component={}/> */}
      {/* <button onClick={postLogin}>get token</button>
      <div>username : {username}</div>
      <div>password : {password}</div>
      <div>salt : {salt}</div> */}
    </>
  );
};

export default App;
