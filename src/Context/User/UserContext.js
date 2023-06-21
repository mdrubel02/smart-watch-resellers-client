import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import app from "../../firebase/firebase.config";



const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const [user,setUser]= useState({})
    const provider = new GoogleAuthProvider()

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password)=>{
      console.log(email,password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const nameAndPhotoUpdate = (name)=>{
      console.log(name);
        setLoading(true)
          return updateProfile(auth.currentUser, { displayName: name })
      }
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut = () => {
        setLoading(true)
        return signOut(auth)
      }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
    const authInfo = {signInWithGoogle,createUser,signIn,nameAndPhotoUpdate,logOut,loading,user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;