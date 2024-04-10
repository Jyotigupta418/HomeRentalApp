import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Services from '../screens/Services';
import BottomTabNavigation from './BottomTabNavigation';


const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tab" component={BottomTabNavigation} />                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;