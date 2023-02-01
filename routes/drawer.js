import zreact from 'react'
import {Button} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeStack} />
            <Drawer.Screen name='About' component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default DrawerNavigator