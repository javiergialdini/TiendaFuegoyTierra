import { createContext, useState, useEffect } from "react"
import { auth, db } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { setDoc, doc, getDoc } from 'firebase/firestore';
export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const[user, setUser] = useState({
        email: null,
        logged: false,
        adminAcces: false,
        uid: null
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err.message))
    }

    const register = async (values) => {
        const userAdded = await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userResponse) => {
                return userResponse;
            })
            .catch((err) => console.log(err.message))

            console.log(userAdded)

            const userDb = {
                email: userAdded.user.email,
                logged: true,
                adminAcces: false,
                uid: userAdded.user.uid
            }

            const userRef = doc(db, 'users', userDb.uid)
                setDoc(userRef, userDb)
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({
                email: null,
                logged: false,
                adminAcces: false,
                uid: null
            })
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user.uid){
                const docRef = doc(db, 'users', user.uid)
                const responseDoc = await getDoc(docRef)
                    .then((doc) => {
                        return doc
                    })

                setUser({
                    email: user.email,
                    logged: true,
                    adminAcces: responseDoc.data().adminAcces,
                    uid: user.uid
                })
            }
            else {
                logOut()
            }
        })
    }, [])

    return(
        <LoginContext.Provider value={{
            user, register, login, logOut
        }}>
            {children}
        </LoginContext.Provider>
    )
}