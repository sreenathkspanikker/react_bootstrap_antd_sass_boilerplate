import React from 'react';
import logo from './assets/images/logo.svg';
import sass_logo from './assets/images/sass_logo.png';
import antd_logo from './assets/images/antd_logo.svg';
import bootstrap_logo from './assets/images/bootstrap_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://reactjs.org/" target="_blank"><img src={logo} className="React-logo" alt="logo" style={{width: '250px'}} /></a>
        <a href="https://react-bootstrap.github.io/" target="_blank"><img src={bootstrap_logo} className="Bootstrap-logo" alt="logo" style={{width: '130px'}} /></a>
        <a href="https://ant.design/" target="_blank"><img src={antd_logo} className="Antd-logo" alt="logo" style={{width: '130px', margin: '0 4rem'}} /></a>
        <a href="https://sass-lang.com/" target="_blank"><img src={sass_logo} className="Antd-logo" alt="logo" style={{width: '150px'}} /></a>
      </header>
    </div>
  );
}

export default App;
