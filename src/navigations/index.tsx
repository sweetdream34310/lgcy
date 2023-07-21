import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ThemeProvider } from "styled-components";
import { LoginScreen } from '../screens/Auth/Login';
import { SignUpScreen } from '../screens/Auth/Signup';
import { CreateUserScreen } from '../screens/Auth/signupSteps/CreateUser';
import { CreatePasswordScreen } from '../screens/Auth/signupSteps/CreatePassword';
import { HomeScreen } from '../screens/Home/Home';
import { ProfileScreen } from '../screens/Profile/Profile';
import { MyProfileScreen } from '../screens/Profile/MyProfile';
import { GalleryScreen } from '../screens/Content/Gallery';
import { VideoScreen } from '../screens/Content/Video';
import { PostViewScreen } from '../screens/Post/PostView';
// import { NewPostScreen } from '../screens/Post/NewPost';
import { SelectStyleScreen } from '../screens/SelectStyle/SelectStyle'
import { CommentsViewScreen } from '../screens/Comments/CommentsView';
import { LikesViewScreen } from '../screens/Likes/Likes';
import { theme } from '../global/styles';
import { RootStackParamList } from '../global/Type';
import { NotiViewScreen } from '../screens/Notification/NotiView';
import { NewTimelineScreen } from '../screens/Timeline/NewTimeline';

const RootStack = createNativeStackNavigator<RootStackParamList>();
 
export default (): JSX.Element => {
    const navigationOptions: NativeStackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false,
    }
    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <RootStack.Navigator
                    initialRouteName='LogIn'
                    screenOptions={navigationOptions}>
                    <RootStack.Screen name="LogIn" component={LoginScreen} />
                    <RootStack.Screen name="SignUp" component={SignUpScreen} />
                    <RootStack.Screen name="CreateUser" component={CreateUserScreen} />
                    <RootStack.Screen name="CreatePassword" component={CreatePasswordScreen} />
                    <RootStack.Screen name="Home" component={HomeScreen} />
                    <RootStack.Screen name="Profile" component={ProfileScreen} />
                    <RootStack.Screen name="MyProfile" component={MyProfileScreen} />
                    <RootStack.Screen name="Gallery" component={GalleryScreen} />
                    <RootStack.Screen name="Video" component={VideoScreen} />
                    <RootStack.Screen name="PostView" component={PostViewScreen} />
                    <RootStack.Screen name="Filter" component={SelectStyleScreen} initialParams={{ image: '' }} />
                    <RootStack.Screen name="CommentsView" component={CommentsViewScreen} />
                    <RootStack.Screen name="LikesView" component={LikesViewScreen} />
                    <RootStack.Screen name="NotiView" component={NotiViewScreen} />
                    <RootStack.Screen name="NewTimeline" component={NewTimelineScreen} />
                </RootStack.Navigator>
            </ThemeProvider>
        </NavigationContainer>
    )
}