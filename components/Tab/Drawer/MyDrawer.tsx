import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Todo from './Todo';
import Counter from '../Counter';

const Drawer = createDrawerNavigator();


const MyDrawer=()=>{

    return(
<Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Screen name='Todo' component={Todo}/>
    <Drawer.Screen name='Counter' component={Counter}/>
</Drawer.Navigator>
    )
}

export default MyDrawer;