
import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../context api/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
     
   const {signInUser,user} = useContext(FirebaseContext);
  console.log(user)
  
  const[error,setError] = useState('')
  const navigate = useNavigate()
const handleSignIn = (event)=>{
    setError('')
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // call from api
    signInUser(email,password)
    .then(result=>{
        console.log(result.user)
        setError("login successfully");
        navigate("/");
        event.target.reset()
    }).catch(error=>{
        console.log(error);
        setError(error.message);
        navigate("/login")
    })
}



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
               
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button  className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="bg-slate-500 py-2 text-green-200 px-8 capitalize">{error} </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
