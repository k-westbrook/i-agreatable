import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Routes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
