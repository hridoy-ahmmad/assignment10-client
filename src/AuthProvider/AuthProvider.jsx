import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState('')
     const provider = new GoogleAuthProvider();

    const createUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }
    const googleLogin = (auth, provider) =>{
        return signInWithPopup(auth, provider)
    }
    const loginEmailPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        createUSer,
        user, 
        setUser,
        updateUser,
        googleLogin,
        provider,
        loginEmailPassword
    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;
