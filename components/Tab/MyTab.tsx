import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from './Counter';
import MyDrawer from './Drawer/MyDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const MyTab =()=>{


    return(
       <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          position: 'absolute',
          height: 80,
          padding: 20,
        },
     
     
      }}>
        <Tab.Screen name='MyDrawer' component={MyDrawer} options={{headerShown:false,
            tabBarIcon: ({focused}) => (
              <View>
                <MaterialCommunityIcons
                  name="mastodon"
                  size={30}
                  color={focused ? '#CDE7BE' : '#C4CCCC'} style={{alignSelf:'center'}}
                />
                <Text
                  style={{
                    color: focused ? '#CDE7BE' : '#C4CCCC',
                     textAlign:'center',fontSize:18,paddingVertical:4, fontFamily:'Roboto',fontWeight:'600'
                  }}>
                  TODO
                </Text>
              </View>
            ),
          }}/>
        <Tab.Screen name='Counter' component={Counter}
         options={{ headerShown:false,
            tabBarIcon: ({focused}) => (
              <View>
                <MaterialCommunityIcons
                  name="counter"
                  size={30}
                  color={focused ? '#CDE7BE' : '#C4CCCC'}
                  style={{alignSelf:'center'}}
                />
                <Text
                  style={{
                    color: focused ? '#CDE7BE' : '#C4CCCC',
                    alignSelf:'center',fontSize:18,paddingVertical:4, fontFamily:'Roboto',fontWeight:'600'
                  }}>
                  COUNTER
                </Text>
              </View>
            ),
          }}/>
       </Tab.Navigator>
    )
}
export default MyTab;