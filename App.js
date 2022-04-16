import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import CardOne from './src/component/CardOne'
import MovieScreen from './src/screens/MovieScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preview from './src/screens/Preview';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const Stack = createNativeStackNavigator();
const Stacknavigation=()=>{
  return<Stack.Navigator>
      <Stack.Screen name="Movie" component={MovieScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Preview" component={Preview} options={{headerBackTitleVisible:false,headerShown:false}}/>
      </Stack.Navigator>
}
export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
     <QueryClientProvider client={queryClient}>
      <Stacknavigation/>
      </QueryClientProvider>
    </NavigationContainer>
  )
}