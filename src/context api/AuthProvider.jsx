import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export const FirebaseContext = createContext(null);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoding] = useState(true);





const provider = new GoogleAuthProvider()
   
const signInWithGoogle =()=>{
    signInWithPopup(auth,provider)
}

// 
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
      
    }

    // 
    const signInUser = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    // signOut
    const signOutUser = ()=>{
        setLoding(true)
        return signOut(auth);
    }
     

      useEffect(()=>{
         const unSubscribe =   onAuthStateChanged(auth,currentUser =>{
                console.log('currentUser', currentUser);
                setUser(currentUser);
                setLoding(false)
            })

            return ()=>{
                // components unmount or clean up
                unSubscribe();
            }
      },[ user])
 
    

    const authInfo ={
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    }




    return (
      <FirebaseContext.Provider value={authInfo}>
                {children}
      </FirebaseContext.Provider>
    );
};

export default AuthProvider;