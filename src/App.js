import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Main from './components/main/Main';
import './';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const crypto = require('crypto');
const util = require('util');

const App = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [salt, setSalt] = useState();

  const postLogin = () => {
    const password = 'asdfASDF!@#$';

    const makeHashedPwd = async () => {
      const randombytesPromise = util.promisify(crypto.randomBytes);
      const pbkdf2Promise = util.promisify(crypto.pbkdf2);
      const buf = await randombytesPromise(64);
      const salt = buf.toString('base64');
      const key = await pbkdf2Promise(password, salt, 101385, 64, 'sha512');
      const hashed = key.toString('base64');
      postData(hashed, salt);
    };
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
    makeHashedPwd();
  };
  return (
    <>
      <Main />
      {/* <button onClick={postLogin}>get token</button>
      <div>username : {username}</div>
      <div>password : {password}</div>
      <div>salt : {salt}</div> */}
    </>
  );
};

export default App;
