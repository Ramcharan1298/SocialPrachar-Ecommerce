import React from "react";
import { Link } from "react-router-dom";
import './Signupstyle.css';
// import {DefaultPlayer as Video} from 'react-html5video';
// import 'react-html5video/dist/styles.css';


const SignupPage = () => {
    return (
        <div className="boxcontainer"><br /><br /><br /><br />
        
            <div className="formmain">
                <h2>Sign Up</h2>
                <div class="inputbox">
                    <input type="text" required="required" placeholder="First Name"/>
                    <i></i>
                </div>
                <div class="inputbox">
                    <input type="text" required="required" placeholder="Last Name"/>
                    <i></i>
                </div>
                <div class="inputbox">
                    <input type="text" required="required" placeholder="Enter Email Address"/>
                    <i></i>
                </div>

                <div class="inputbox">
                    <input type="password" required="required" placeholder="Password"/>
                    <i></i>
                </div>
                <div class="links">
                    <a href='#'>Forget Password</a>
                    <Link to={'/Login'}><a href='#'>Login</a></Link>
                </div>
                <Link to={'/LoginPage'}><input type="submit" value="Sign Up"></input></Link>
            </div>
            
        </div>
    )
}

export default SignupPage;
