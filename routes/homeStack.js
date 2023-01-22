import {createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about'
import { globalStyles } from '../styles/global';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Reviews' component={ReviewDetails} />
            <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
    )
}

export default MyStack
