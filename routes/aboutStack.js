import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

const AboutStack = () => {
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
        name="About"
        component={About}
        options={{
          title: "About Game Zone",
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
