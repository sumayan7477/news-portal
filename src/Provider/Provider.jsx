import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export  const AuthContext = createContext(null);


const auth = getAuth(app);

const Provider = ({children}) => {
    const [user ,setUser]=useState(null);
    // losding setup
    const [loading ,setLoading]=useState(true);

    // creat user
    const creatUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email,password);
    }

    // login
    const signsin =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout
    const logout =()=>{
        setLoading(true);
        return signOut(auth);
    }

    // check user
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('userin dtate change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[])

    

    const authInfo ={user,creatUser,logout,signsin,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.object,
}

export default Provider;