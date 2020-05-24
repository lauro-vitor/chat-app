import React from 'react';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Conversation from './screens/Conversation';
import RegisterUser from './screens/RegisterUser';
import Profile from './screens/Profile';
import Index from './screens/index';
import Login from './screens/Login';
import HeaderChat from './components/HeaderChat';
import AvatarItem from './components/AvatarItem';
import HeaderOptions from './components/HeaderOptions';
import {useSelector} from 'react-redux';
export default function() {
  const handleUser = useSelector(state => state.handleUser);
  const lastUser = useSelector(state => state.lastUser);
  const user = handleUser.find(element => element.email === lastUser);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName={lastUser ? 'Index' : 'RegisterUser'}
          screenOptions={defaultScreenOptions}>
          <Stack.Screen
            name="RegisterUser"
            component={RegisterUser}
            options={{title: 'Register User'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({route}) => {
              return {
                title: route.params.title,
                headerLeft: null,
              };
            }}
          />
          <Stack.Screen
            name="Index"
            component={Index}
            options={({navigation}) => {
              return {
                title: user.name,
                headerLeft: () => <AvatarItem id={user.avatar} />,
                headerRight: () => <HeaderOptions navigation={navigation} />,
              };
            }}
          />
          <Stack.Screen
            name="Conversation"
            component={Conversation}
            options={({route}) => {
              return {
                headerTitle: () => (
                  <HeaderChat
                    image={route.params.image}
                    name={route.params.name}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={() => {
              return {title: 'Log In', headerLeft: null};
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: '#fff',
  },
};
const theme = {
  ...PaperDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#3b5998',
    accent: '#f1c40f',
  },
};
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
