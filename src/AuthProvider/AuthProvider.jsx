import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState('')

    const createUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const authData = {
        createUSer,
        user, 
        setUser,
        updateUser
    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;
