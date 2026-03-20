import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function IconButton({title,onPress}){

return(
<TouchableOpacity style={styles.btn} onPress={onPress}>
<Text style={styles.text}>{title}</Text>
</TouchableOpacity>
);
}

const styles = StyleSheet.create({

btn:{
flex:1,
padding:12,
borderWidth:1,
alignItems:'center',
margin:5,
borderRadius:5
},

text:{
fontWeight:'bold'
}

});