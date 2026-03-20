import React,{useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';
import BottomTabs from './BottomTabs';
import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function StackNavigator(){

const {isLoggedIn} = useContext(AuthContext);

return(

<Stack.Navigator screenOptions={{headerShown:false}}>

{isLoggedIn ? (
<Stack.Screen name="Main" component={BottomTabs}/>
) : (
<>
<Stack.Screen name="SignIn" component={SignIn}/>
<Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
</>
)}

</Stack.Navigator>

);
}