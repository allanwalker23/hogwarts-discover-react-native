import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';

export function Routes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                orientation: 'portrait'
            }}
        >
            <Screen name="SignIn" component={Login} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}