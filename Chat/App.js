import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mainpage from './src/screens/mainpage/Mainpage';

import Login from './src/screens/loginSignup/login/Login';

import Signup_EnterEmail from './src/screens/loginSignup/signup/Signup_EnterEmail';
import Signup_EnterVerificationCode from './src/screens/loginSignup/signup/Signup_EnterVerificationCode';
import Signup_ChoosePassword from './src/screens/loginSignup/signup/Signup_ChoosePassword';
import Signup_ChooseUsername from './src/screens/loginSignup/signup/Signup_ChooseUsername';
import Signup_AccountCreated from './src/screens/loginSignup/signup/Signup_AccountCreated';

import ForgotPassword_AccountRecover from './src/screens/loginSignup/forgotPassword/ForgotPassword_AccountRecover';
import ForgotPassword_ChoosePassword from './src/screens/loginSignup/forgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_EnterEmail from './src/screens/loginSignup/forgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationCode from './src/screens/loginSignup/forgotPassword/ForgotPassword_EnterVerificationCode';

import All_Chats from './src/screens/chatSection/All_Chats';
import SearchUserPage from './src/screens/mainpage/SearchUserPage';
import NotificationPage from './src/screens/mainpage/NotificationPage';
import My_UserProfile from './src/screens/profile/My_UserProfile';

import Settings_1 from './src/screens/settings/Settings_1';
import EditProfile from './src/screens/settings/EditProfile';
import ChangePassword from './src/screens/settings/ChangePassword';
import ChangeUsername from './src/screens/settings/ChangeUsername';
import ChangeDescription from './src/screens/settings/ChangeDescription';
import UploadProfilePicture from './src/screens/settings/UploadProfilePicture';

import AddPost from './src/screens/mainpage/AddPost';
import Other_UserProfile from './src/screens/profile/Other_UserProfile';
import MessagePage from './src/screens/chatSection/MessagePage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions= {{
        headerShown: false,
        animation: 'slide_from_right'
        }}>

        <Stack.Screen name='Mainpage' component={Mainpage} />

        <Stack.Screen name="Login" component={Login} 
        options= {{ 
          //animation: 'slide_from_right'
        }} />

        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />

        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />

        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />

        <Stack.Screen name="ForgotPassword_AccountRecover" component={ForgotPassword_AccountRecover} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />

        <Stack.Screen name="All_Chats" component={All_Chats} options= {{ 
          animation: 'slide_from_right' }} />
          <Stack.Screen name="MessagePage" component={MessagePage} />

        <Stack.Screen name="SearchUserPage" component={SearchUserPage} options= {{ 
          animation: 'slide_from_bottom' }} />
          <Stack.Screen name="Other_UserProfile" component={Other_UserProfile} />

        <Stack.Screen name="NotificationPage" component={NotificationPage} options= {{ 
          animation: 'slide_from_right' }} />

        <Stack.Screen name="My_UserProfile" component={My_UserProfile} options= {{ 
          animation: 'slide_from_right' }} />

        <Stack.Screen name="Settings_1" component={Settings_1} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
        <Stack.Screen name="ChangeDescription" component={ChangeDescription} />
        <Stack.Screen name="UploadProfilePicture" component={UploadProfilePicture} />

        <Stack.Screen name="AddPost" component={AddPost} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
