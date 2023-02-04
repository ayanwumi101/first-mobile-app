import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about'
import { globalStyles } from '../styles/global';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4ae",
            height: 60,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Inter-Black",
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Game Zone",
            }}
          />
          <Stack.Screen
            name="Reviews"
            component={ReviewDetails}
            options={{
              title: "Reviews",
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              title: "About Us",
            }}
          />
        
      </Stack.Navigator>
    );
}

export default HomeStack
