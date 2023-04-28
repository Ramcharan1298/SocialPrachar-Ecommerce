import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Loginstyles.css";
import { useState } from "react";
// import {DefaultPlayer as Video} from 'react-html5video';
// import 'react-html5video/dist/styles.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="boxcontainer">
      <br />
      <br />
      <br />
      <br />

      <div className="formmain">
        <h2>Log-In</h2>
        <div class="inputbox">
          <input
            type="text"
            required="required"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email Address"
          />
          <i></i>
        </div>
        <div class="inputbox">
          <input
            type="password"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <i></i>
        </div>
        <div class="links">
          <a href="#">Forget Password?</a>
          <Link to={"/Signup"}>
            <a href="#">
              <h6>Signup</h6>
            </a>
          </Link>
        </div>
        <Link to={"/LoginPage"}>
          <input type="submit" value="Log-In" ></input>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
