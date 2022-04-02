import initializeFirebase from '../Pages/Login/Login/Firebase/firebase.init'
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";



initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()


    const registerUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name}
                console.log(newUser)
                setUser(newUser)
                sendUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name 
                }).then(() =>{
                }).catch((error) =>{
                })
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                sendUser(user.email, user.displayName, 'PUT')
                setAuthError('')
            }) 
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])


    const loginUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const sendUser = (email, displayName, method) =>{
        const user = {email, displayName}
        fetch('https://vast-shelf-93304.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    const logout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        registerUser,
        signInWithGoogle,
        loginUser,
        authError,
        logout,
    }
}

export default useFirebase;
