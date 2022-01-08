import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home.Screen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import theme from '../theme.json';
import ExploreScreen from '../pages/ExploreScreen';
import CartScreen from '../pages/CartScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const activeIconColor = theme.primary.blue;
  const inactiveIconColor = theme.neutral.grey;
  const tabBarBadgeBackgroundColor = theme.primary.red;
  const tabBarBadgeTextColor = theme.background.white;
  const iconSize = 28;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 55},
        tabBarActiveTintColor: activeIconColor,
        tabBarBadgeStyle: {
          backgroundColor: tabBarBadgeBackgroundColor,
          color: tabBarBadgeTextColor,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="home"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="search"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name="shoppingcart"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Offer"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name="tago"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="user"
              size={iconSize}
              color={focused ? activeIconColor : inactiveIconColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
