/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screens/Home';
import HomePage from './src/screens/HomePage';
import SavedPlans from './src/screens/SavedPlans';
import Notifications from './src/screens/Notifications';
import NoNotifications from './src/components/NoNotificationComp';
import AccountProfile from './src/screens/AccountProfile';
import BottomNavigation from './src/navigation';
import { ScreenProps } from './types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {

  const Stack = createStackNavigator();
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flexGrow: 1 }}
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              flex: 1,
            }}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Home"
                component={Home}/>

              <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}/>

              <Stack.Screen
                name="HomePage"
                component={HomePage}/>

              <Stack.Screen
                name="SavedPlans"
                component={SavedPlans}/>

              <Stack.Screen
                name="NoNotifications"
                component={NoNotifications}/> 

              <Stack.Screen
                name="Notifications"
                component={Notifications}/>

              <Stack.Screen
                name="AccountProfile"
                component={AccountProfile}/>

            </Stack.Navigator>

          </View>
        </ScrollView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
