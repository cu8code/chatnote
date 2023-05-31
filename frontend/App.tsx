import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './pages/home';
import { NavigationContainer } from '@react-navigation/native';
import { Title } from './components/tile';
import { ChatArea } from './pages/chatArea';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: (props) => <><Title text={props.route.name} /></>
      }}>
        <Stack.Screen name="ChatNote" component={Home} />
        <Stack.Screen name="ChatArea" component={ChatArea} initialParams={{name:'test'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: 'pink',
    width: '500px',
  },
  container2: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    flex: 1
  },
  chatList: {
    width: '500px',
  },
  chatMessages: {},
  text: {
    color: 'black'
  }
});
