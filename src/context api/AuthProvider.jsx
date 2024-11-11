import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export const FirebaseContext = createContext(null);

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
      
    }

    // 
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    // signOut
    const signOutUser = ()=>{
        return signOut(auth);
    }
     

      useEffect(()=>{
         const unSubscribe =   onAuthStateChanged(auth,currentUser =>{
                console.log('currentUser', currentUser);
                setUser(currentUser)
            })

            return ()=>{
                // components unmount or clean up
                unSubscribe();
            }
      },[])
 
    

    const authInfo ={
        createUser,
        signInUser,
        user,
        signOutUser
    }




    return (
      <FirebaseContext.Provider value={authInfo}>
                {children}
      </FirebaseContext.Provider>
    );
};

export default AuthProvider;