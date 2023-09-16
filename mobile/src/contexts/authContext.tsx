import React, { useState, createContext, ReactNode } from "react";

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps ) {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const isAuthenticated = !!user.name;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}