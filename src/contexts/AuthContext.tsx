import firebase from "firebase";
import { useState } from "react";
import { createContext, ReactNode, useEffect } from "react";
import { auth } from "../services/firebase";

type User = {
    id: string
    name: string
    avatar: string
}

type AuthContextType = {
    user: User | undefined;
    loginWhithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)



export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user


                if (!displayName || !photoURL) {
                    throw new Error("Miss Information")
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unsubscribe();
        }

    }, [])


    const loginWhithGoogle = async () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);

        if (result.user) {
            const { displayName, photoURL, uid } = result.user


            if (!displayName || !photoURL) {
                throw new Error("Miss Information")
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })

        }

    }


    return (
        <AuthContext.Provider value={{ user, loginWhithGoogle }}>
            {props.children}
        </AuthContext.Provider>

    );
}