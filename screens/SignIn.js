import React,{useContext} from 'react';
import {View,Text,Button} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
import {AuthContext} from '../context/AuthContext';

export default function SignIn({navigation}){

const {signIn} = useContext(AuthContext);

return(

<View style={{flex:1,padding:20,justifyContent:'center'}}>

<Text>Email</Text>
<CustomTextInput placeholder="Enter email"/>

<Text>Password</Text>
<CustomTextInput placeholder="Enter password" secureTextEntry/>

<Button title="Sign In" onPress={signIn}/>

<Text
style={{color:'orange',marginTop:10}}
onPress={()=>navigation.navigate("ForgotPassword")}
>
Forgot password?
</Text>

<View style={{flexDirection:'row',marginTop:20}}>
<IconButton title="Google"/>
<IconButton title="Facebook"/>
</View>

</View>

);
}