import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MyDrawer from './Drawer';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={MyDrawer} options={{tabBarIcon:({tintColor,focused})=><Entypo name="home" size={24} color={focused?"red":"black"} />}}/>
      <Tab.Screen name="About" component={About} options={{tabBarIcon:({tintColor,focused})=><AntDesign name="minussquareo" size={24} color={focused?"red":"black"}/>}} />
    </Tab.Navigator>
  );
}

export default MyTabs