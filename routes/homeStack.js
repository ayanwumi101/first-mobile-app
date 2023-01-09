import {createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Revies Details' component={ReviewDetails} />
        </Stack.Navigator>
    )
}

export default MyStack
// const screens = {
//     Home: {
//         screen: Home
//     },
//     ReviewDetails: {
//         screen: ReviewDetails
//     }
// }


// export default NavigationContainer(HomeStack);
