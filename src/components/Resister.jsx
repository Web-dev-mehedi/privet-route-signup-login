import {  signInWithPopup } from "firebase/auth";
import React, { createRef, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import { FirebaseContext } from "../context api/AuthProvider";


const Resister = () => {

  const {createUser,signInWithGoogle} = useContext(FirebaseContext);

  const [error, setError] =useState('');
  const navigate = useNavigate()


const handleSubmit = (e)=>{
e.preventDefault();
const name = e.target.name.value;
const email = e.target.email.value;
const password = e.target.password.value;
console.log(name,email,password);
setError('')
// call the firebase auth from context api
 createUser(email,password)
.then((result)=>{
  console.log(result.user)
    setError('sign up successfull');
    e.target.reset();
    navigate("/")
}).catch(error =>{
  setError(error.message)
})

}



const handleGoogleSignUp = ()=>{
  // call from api
     signInWithGoogle()
      .then(result =>{
          console.log(result.user);
          navigate("/")
      }).catch(error=>{
        console.log(error)
      })
}

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            {/*  */}
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
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already have an account <strong> <Link to="/login">Login Now</Link> </strong> </p>
          </form>
                <p>OR</p>
             <div>
                 <button onClick={handleGoogleSignUp} className="btn btn-secondary">Google signUp</button>
             </div>

           
          <p className="bg-slate-500 py-2 text-green-200 px-8 capitalize"> {error}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Resister;
