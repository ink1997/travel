import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Register from './supplier/Register';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="cover-container d-flex h-100  mx-auto flex-column">
            <Header/>
            <Home/>
            <Footer/>
            <Route exact path ="/supplier/register" component ={Register}/>
            
            
          </div>
      </Router>
    );
  }
}

export default App;
