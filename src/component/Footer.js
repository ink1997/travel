import React, {Component} from 'react';
import './css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer classNam="mastfoot mt-auto">
                <div className="inner">
                    <p>
                        <ul>Contact Us: <br/>
                        <li>Fixed : +94112222222  </li>
                        <li>Mobile : +94702323233</li></ul>
                    </p>
                    <p>
                        <ul>Email Address : gotrip@gmail.com</ul>
                    </p>
                </div>
            </footer>
        )
    }
}
export default Footer;