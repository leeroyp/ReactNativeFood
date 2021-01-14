import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',

          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            >
            <HomeStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Overview',
                headerLeft:() => (
                  <Icon.Button 
                    name="menu" size={25} 
                    backgroundColor= "#009387" 
                    onPress={() =>navigation.openDrawer()}
                    >
                    </Icon.Button> 
                )
              }}
            />
          </HomeStack.Navigator>
       );
    
     const DetailsStackScreen =({navigation}) => (
      <DetailsStack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#1f65ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              <DetailsStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                  headerLeft:() => (
                    <Icon.Button 
                      name="menu" size={25} 
                      backgroundColor= "#1f65ff" 
                      onPress={() =>navigation.openDrawer()}
                      >
                      </Icon.Button>
                    
                  )
                }}
              />
            </DetailsStack.Navigator>
       );
      
