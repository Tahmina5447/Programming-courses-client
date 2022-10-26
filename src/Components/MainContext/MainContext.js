import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase.init';


export const UserContext=createContext();
const auth =getAuth(app)
const MainContext = ({children}) => {
    const [user,setUser]=useState(null);

    const loginProvider=(Provider)=>{
        return signInWithPopup(auth,Provider);
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(logedInUser)=>{
            setUser(logedInUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userAllInfo={user,loginProvider,logout,createUser,userLogin}
    return (
        <UserContext.Provider value={userAllInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default MainContext;