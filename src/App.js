import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { Component, useState } from 'react';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const App = () => {
  const [token, setToken] = useState();
  const getAPIToken = () => {
    axios
      .post('/toy_api/token/', {
        username: 'mojoblue7',
        password: 'asdfASDF!@#$',
      })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={getAPIToken}>get token</button>
      <div>token : {token}</div>
    </>
  );
};
// class App extends Component {
//   state = {
//     resData: [],
//   };

//   divStyle = {
//     width: '500px',
//     height: '50px',
//   };

//   componentDidMount() {
//     this._renderText();
//   }

//   render() {
//     const { resData } = this.state;
//     return <div>{resData.token}</div>;
//   }

//   _renderText = () => {
//     axios
//       .post('/toy_api/token/', {
//         username: 'mojoblue7',
//         password: 'asdfASDF!@#$',
//       })
//       .then((res) => this.setState({ resData: res.data }))
//       .catch((err) => console.log(err));
//   };
// }

export default App;
