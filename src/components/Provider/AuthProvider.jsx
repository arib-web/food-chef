import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

import app from '../../firebase/firebase.config';


export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password, photo) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password,photo)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name,photo) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
            setLoading(false)
        })

        return () => unsubscribe();
    })

    const info = {
        user,
        createUser,
        loginUser,
        updateUser,
        logOut,
        loading,
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;