import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import SplashScreen from '../screens/splash';
import FlightList from '../screens/flightList';

import Header from './header';
import FlightDetails from '../screens/flightDetails';

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name={'splashscreen'}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <stack.Screen
          name={'dashboard'}
          component={Dashboard}
          options={{
            header: () => <Header title="Book Flight" isBackButton={false} />,
          }}
        />
        <stack.Screen
          name={'flightList'}
          component={FlightList}
          options={{
            header: () => <Header title="Search Results" isBackButton={true} />,
          }}
        />
        <stack.Screen
          name={'flightDetails'}
          component={FlightDetails}
          options={{
            header: () => <Header title="Flight Details" isBackButton={true} />,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
