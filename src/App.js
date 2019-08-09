import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render()
  {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes />
        </Router>
    </div>
  );
}
}

export default App;
