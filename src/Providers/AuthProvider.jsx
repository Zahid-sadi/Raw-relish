import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log("from authProvider ", currentUser);

            if (currentUser) {
                axios.post("https://raw-relish-server.vercel.app/jwt", { email: currentUser.email }).then((data) => {
                    // console.log(data.data.token);
                    localStorage.setItem("access-token", data.data.token);
                    setLoading(false);
                });
            } else {
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        };
    }, [ user ]);

    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        logIn,
        logOut,
        updateUserProfile,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
