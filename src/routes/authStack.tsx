import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signup from '../screens/signup';
import login from '../screens/login';


export type AuthStackParamList = {
    signup: undefined;
    login: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitle: '',
            }}
        >
            <Stack.Screen name="signup" component={signup} />
            <Stack.Screen name="login" component={login} />
        </Stack.Navigator>
    );
};

// export default AppStack;