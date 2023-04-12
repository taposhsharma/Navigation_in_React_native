import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import MyDrawer from './Drawer';
import MyTabs from './TabScreens';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator    screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato' },
      

    }} >
      <Stack.Screen name="Tab" component={MyTabs}/>
      <Stack.Screen name="drawer" component={MyDrawer}/>
      <Stack.Screen name="home" component={Home}   options={{
          title: 'Home',
         
        }} />
      <Stack.Screen name="about" component={About} />
      <Stack.Screen name="service" component={ContactUs} />
      
    </Stack.Navigator>
  );
}

export default Navigation