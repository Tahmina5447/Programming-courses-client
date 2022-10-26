import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase.init';


export const UserContext=createContext();
const auth =getAuth(app)
const MainContext = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const loginProvider=(Provider)=>{
        setLoading(true);
        return signInWithPopup(auth,Provider);
        
    }

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
      
    }

    const userLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const logout=()=>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(logedInUser)=>{
            setUser(logedInUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userAllInfo={user,loading,loginProvider,logout,createUser,userLogin}
    return (
        <UserContext.Provider value={userAllInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default MainContext;