import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routeNames from '../../routes';
import Breeds from '../../routes/Breeds';
import Favorites from '../../routes/Favorites';
import Profile from '../../routes/Profile';

import type { NavigationParams } from './types';

const routes = {
  [routeNames.Breeds]: Breeds,
  [routeNames.Favorites]: Favorites,
  [routeNames.Profile]: Profile,
};

const Tab = createBottomTabNavigator<NavigationParams>();

const HomeNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(routes).map(([name, component]) => (
        <Tab.Screen
          name={name as keyof NavigationParams}
          component={component}
          key={name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeNavigator;
