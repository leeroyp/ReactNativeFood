/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import {Provider as PaperProvider } from 'react-native-paper';

import {DrawerContent} from './src/screens/DrawerContent';

import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';

import {AuthContext} from './components/context'

import RootStackScreen from './src/screens/RootStackScreen'



const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

const loginReducer = (prevState, action) => {
  switch(action.type){
    case'RETRIEVE_TOKEN':
      return{
        ...prevState,
       userToken:action.token,
        isLoading: false,
      };
    case'LOGIN':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token, 
        isLoading: false,
      }
    case'LOGOUT':
      return{
        ...prevState,
        userName: null,
        userToken:null,
        isLoading: false,
      }
    case'REGISTER':
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token, 
        isLoading: false,
      }
  }
}

const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState)

  const authContext= React.useMemo ( () => ({
    signIn:(userName, password) =>{
      // setUserToken('sjhds');
      // setIsLoading(false)
      let userToken;
      userName=null;
      if (userName== 'user' && password=='pass'){
        userToken='fdhfk'
      }
      dispatch({type:'LOGIN', id: userName, token: userToken})
    },
    signOut:() =>{
      // setUserToken(null);
      // setIsLoading(false)
      dispatch({type: 'LOGOUT'})
    },
    signUp:() =>{
      setUserToken('sjhds');
      setIsLoading(false)
    },

  }), [])

  useEffect(() => {
    setTimeout(()=>{
      dispatch({type:'REGISTER', token: 'fdjh'})

      // setIsLoading(false);
    }, 1000);
  },[]);


  if (loginState.isLoading){
    return( 
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken != null ?(
      
    <Drawer.Navigator drawerContent={props => < DrawerContent { ...props}/>}>
     <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
     <Drawer.Screen name="SupportScreen" component={SupportScreen} />
     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
     <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />

 </Drawer.Navigator>
) 
:
<RootStackScreen/>
}
 </NavigationContainer>
 </AuthContext.Provider>  
  );
};

export default App;
