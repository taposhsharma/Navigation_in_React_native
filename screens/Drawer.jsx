import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default MyDrawer