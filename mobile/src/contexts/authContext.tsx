import React, { useState, createContext, ReactNode } from "react";
import { api } from "../services/api";

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}
type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: ( credentials: SingInProps ) => Promise<void>;
}
type AuthProviderProps = {
    children: ReactNode;
}
type SingInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps ) {
    const [user, setUser] = useState<UserProps>({
        id: '1',
        name: 'thais tocafundo',
        email: 'tahisf@gmail.com',
        token: '32153218523157416832185'
    });
    
    const [loadingAuth, setLoadingAuth] = useState(false);

    const isAuthenticated = !!user.name;

    async function signIn({ email, password }: SingInProps) {
        setLoadingAuth(true);

        try {
            const response = await api.post('/session', {
                email,
                password
            })

            console.log(response.data);
            
        } catch (err) {
            console.log('erro ao acessar ', err)
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}