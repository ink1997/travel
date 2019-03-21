import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import img5 from './../assets/hon.jpg';
import './css/Tailor.css';

class Tailor extends Component {
    render() {
      return (
            <div className="cover-container d-flex h-100  mx-auto flex-column">
              <Header/>
              <main className="inner cover lead" role="main">
              <img src={img5} />
             
              <p>dfghujkghxcvfkuhk7ujytgfrddfghjkjhgfsdfgulkjfghjkjjjhgfdghj
                  jmnbfghjmnbvvbnmnnbvjhgfdfgghjkhjhfgghjkmnbvbnm,m
                  mmnbvvbvbnnmnfghjkjhgghjkhghm/.,mknjhgfdfvgbj/.,njbhgfdcvbn,m
                  nbvcfdfghjjhgvvbn,mnbvcvbnmnj</p>
              <h3>sdfghgfjukukkyujuytrrtyujhygtfrrjhgghnbvbn</h3>
              </main>
              <Footer/>
              {/* <Route path="/" exact component={Todo}/>
              <Route path="/login" component={Login}/>
              <Route path="/create" component={Create}/> */}
            </div>
      );
    }
  }
  
  export default Tailor;