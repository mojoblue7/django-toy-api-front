import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { Component } from 'react';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {
  state = {
    resData: [],
  };

  componentDidMount() {
    this._renderText();
  }

  render() {
    const { resData } = this.state;
    return (
      <div className='App'>
        <h1>UserInfo App</h1>
        <div style={{ textAlign: 'center', width: '100%' }}>
          {resData.map((data, index) => {
            return (
              <div
                key={data.id}
                style={{
                  border: '1px solid black',
                  // marginBottom: '5px',
                  // width: '400px',
                  textAlign: 'left',
                  // paddingLeft: '20px',
                }}
              >
                <div>id : {data.id}</div>
                <div>username : {data.username}</div>
                <div>email : {data.email}</div>
                <div>gender : {data.gender}</div>
                <div>reg_date : {data.reg_date}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  _renderText = () => {
    axios
      .get('/toy_api/user_info/')
      .then((res) => this.setState({ resData: res.data.results }))
      .catch((err) => console.log(err));
  };
}

export default App;
