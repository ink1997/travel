import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Main from './component/Main';
import Customer from './customer/Customer';
import Tailor from './customer/Tailor';
// import Login from './component/pages/login';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="cover-container d-flex h-100  mx-auto flex-column">
              <Route path="/" exact component={Main}/>
              <Route path="/customer" exact component={Customer}/>
              <Route path="/customer/Tailor" exact component={Tailor}/>
            {/* <Route path="/login" component={Login}/>
            <Route path="/create" component={Create}/> */}
          </div>
        </Router>
    );
  }
}

export default App;
