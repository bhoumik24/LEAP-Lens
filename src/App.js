import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
      </div>
    );
  }
}



export default App;
