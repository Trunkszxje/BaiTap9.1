import React from 'react';
import {View,Text,FlatList} from 'react-native';

const data=[
{id:'1',name:'Pizza'},
{id:'2',name:'Burger'},
{id:'3',name:'Steak'}
];

export default function Home(){

return(

<View style={{flex:1,padding:20}}>

<Text style={{fontSize:20}}>Explorer</Text>

<Text style={{marginTop:20}}>Top Categories</Text>

<FlatList
data={data}
horizontal
renderItem={({item})=>(
<View style={{padding:10,backgroundColor:'#eee',margin:5}}>
<Text>{item.name}</Text>
</View>
)}
/>

<Text style={{marginTop:20}}>Popular Items</Text>

</View>

);
}