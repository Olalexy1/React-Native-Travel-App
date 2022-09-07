import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import HomePage from '../screens/HomePage';
import SavedPlans from '../screens/SavedPlans';
import Notifications from '../screens/Notifications';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');

const BottomNavigation = () => {

    const navigation = useNavigation();

    function MyTabs() {
        return (
          <Tab.Navigator 
            screenOptions={{headerShown: false, tabBarActiveTintColor: '#189AB4', tabBarInactiveTintColor: '#D4F1F4', tabBarShowLabel: false,}}>
            <Tab.Screen name="HomePage" component={HomePage} options={{
                    tabBarIcon: ({focused}) => (<Image source={require('../assets/images/Path.png')} style={{width:18,height:20,tintColor:focused?'#189AB4':'#D4F1F4'}}/>), 
                }}/>
            <Tab.Screen name="SavedPlans" component={SavedPlans} options={{
                    tabBarIcon: ({focused}) => (<Image source={require('../assets/images/Path1.png')} style={{width:16,height:18,tintColor:focused?'#189AB4':'#D4F1F4'}} />), 
                }}/>
              <Tab.Screen name="Notifications" component={Notifications} options={{
                    tabBarIcon: ({focused}) => (<Image source={require('../assets/images/Path2.png')} style={{width:17,height:16,tintColor:focused?'#189AB4':'#D4F1F4'}}/>), 
                }}/>
          </Tab.Navigator>
        );
    }

    return (
    <SafeAreaView style={{ flex: 1 }}>
      {MyTabs()}
    </SafeAreaView>
    )
};
  
  
export default BottomNavigation;