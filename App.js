import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import ShowScreen from './src/Screen/ShowScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title : "Home",
          headerTintColor:"#fff",
          headerStyle : {
            backgroundColor:"#435334"
          }
        }}/>
        <Stack.Screen name="Show" component={ShowScreen} options={{
          title : "ShowScreen",
          headerTintColor:"#fff",
          headerStyle : {
            backgroundColor:"#435334"
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF1E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
