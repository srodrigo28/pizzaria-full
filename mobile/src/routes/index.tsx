import React from 'react'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { View, ActivityIndicator } from 'react-native';

function Routes(){
    const isAuthenticated = false;
    const loading = false;

    if(loading){
        return(
            <View style={{ 
                    flex:1, 
                    backgroundColor: '#1D1D2E', 
                    justifyContent: 'center'
                }}
            >
                <ActivityIndicator size={50} color="#fff"/>
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes