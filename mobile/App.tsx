import { StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App(){
  <NavigationContainer>
    <StatusBar 
      translucent={false}
      barStyle="light-content" 
      backgroundColor="#1d1d2e" 
    />
    <Routes />
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    color: 'red',
    fontSize: 40
  }
});