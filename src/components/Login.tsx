import React, { useState } from "react";
import {  useNavigate} from "react-router-dom";
import { PasswordInput } from "./PasswordInput";
import "./styles/Login.scss";

const Login = () => {

   let navigate = useNavigate();
   
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate("/dashboard");
      console.log('working or not')
   };

   return (
      <div className="whole">
         <div className="firstSide">
            <img className="icon" src="/assets/images/icon.png" alt="" />
            <img className="big-icon" src="/assets/images/backimg.png" alt="" />
         </div>

         <div className="page">
            <form action="" onSubmit={handleSubmit}>
               <h1 className="welcometext"> Welcome!</h1>
               <p className="enter">Enter details to login</p>

               <img src="/assets/images/Group.png" alt="" />

               <input
                  type="email"
                  id="name"
                  name="email"
                  placeholder="Enter email address"
                  className="email"
                  required
               />

               <PasswordInput placeholder="Password" name="password" />

               <p className="forgot">FORGOT PASSWORD ?</p>
               <button type="submit" className="login">
                  Login
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
