import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firbase/firebase.init';
// import app from '../../firbase/firebase.init' 

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const createUser = (email, pwd) =>{
        return createUserWithEmailAndPassword(auth, email, pwd)
    }

    const login = (email, pwd)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, pwd);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser)
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        googleSignIn,
        user,
        loading,
        logOut,
        createUser,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;