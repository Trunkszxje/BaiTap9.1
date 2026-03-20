import React,{useContext} from 'react';
import {View,Text,Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export default function Profile(){

const {signOut} = useContext(AuthContext);

return(

<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

<Text style={{fontSize:20}}>User Profile</Text>

<Button title="Sign Out" onPress={signOut}/>

</View>

);
}