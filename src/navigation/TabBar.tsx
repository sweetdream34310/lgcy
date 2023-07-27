import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/Home';
import {MyProfileScreen} from '../screens/Profile/MyProfile';
import {NotiViewScreen} from '../screens/Notification/NotiView';
import HomeMenuScreen from '../screens/Home/HomeMenu';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ChatDetailScreen from '../screens/ChatDetailScreen/ChatDetailScreen';

export type TabStackList = {
  Home: undefined;
  ChatScreen: undefined;
  Gallery: undefined;
  NotiView: undefined;
  MyProfile: undefined;
  ChatDetailScreen: undefined;
  ChatStack: undefined;
};

const Tab = createBottomTabNavigator<TabStackList>();

const Stack = createStackNavigator<TabStackList>();

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBar={() => <HomeMenuScreen />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ChatStack" component={ChatStack} />
      <Tab.Screen name="NotiView" component={NotiViewScreen} />
      <Tab.Screen name="MyProfile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
