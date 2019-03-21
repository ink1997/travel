import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Main from './component/Main';
import Customer from './customer/Customer';
import Login from './supplier/Login';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="cover-container d-flex h-100  mx-auto flex-column">
              <Route path="/" exact component={Main}/>
              <Route path="/customer" exact component={Customer}/>
              <Route path="/supplier/login" exact component={Login}/>

          </div>
        </Router>
    );
  }
}

export default App;
