import React, { Component } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div className="cover-container d-flex h-100  mx-auto flex-column">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
