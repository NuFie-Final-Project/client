import React from 'react'
import store from './src/store/index'
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyPost from './src/screens/myPost'
import Home from './src/screens/home'

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Search" component={Home}/>
          <Tab.Screen name="My Post" component={MyPost}/>
          <Tab.Screen name="Account" component={MyPost}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


