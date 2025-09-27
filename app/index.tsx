import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import 'react-native-gesture-handler';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import Friends from "./screens/Friends";
import Groups from "./screens/Groups";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";
const Tab = createMaterialTopTabNavigator()

const styles = StyleSheet.create({
  topOffset: {
    marginTop: StatusBar.currentHeight
  }
})

export default function Index() {
  return (
    <>
    <GestureHandlerRootView>
    <StatusBar
    backgroundColor="#FFFFFF"
    animated={true}
    hidden={false}
    barStyle={"dark-content"}
    showHideTransition={"none"}
    />
    <View style={styles.topOffset}/>
    <SafeAreaProvider>
    <SafeAreaView>
    <ScrollView>
      <View style={{height: 5500}}>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if(route.name === "Home") iconName= 'home'
            else if(route.name === 'Friends') iconName = 'account-multiple-outline'
            else if(route.name === 'Groups') iconName = 'account-group'
            else if(route.name === 'Profile') iconName = 'account-circle-outline'
            else if(route.name === 'Notifications') iconName = 'bell-outline'
            else if(route.name === 'Menu') iconName = 'menu'
            return <MaterialCommunityIcons name={iconName} size={26} color={color} />
          },
          tabBarActiveTintColor: '#3a86e9',
          tabBarInactiveTintColor: '#9F9F9F',
          tabBarShowIcon: true,
          tabBarShowLabel: false,
          swipeEnabled: true
        })}>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Friends" component={Friends}/>
          <Tab.Screen name="Groups" component={Groups}/>
          <Tab.Screen name="Profile" component={Profile}/>
          <Tab.Screen name="Notifications" component={Notifications}/> 
          <Tab.Screen name="Menu" component={Menu}/>
        </Tab.Navigator>
        </View>
        </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
        </GestureHandlerRootView> 
    </>
  );
}
