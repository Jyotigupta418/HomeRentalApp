// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
// import Services from '../screens/Services';
// import Activity from '../screens/Activity';
// import More from '../screens/More';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigation = () => {
//     return (
//         <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
//             <Tab.Screen name="Home" component={Home}  />
//             <Tab.Screen name="Services" component={Services} />
//             <Tab.Screen name="Activity" component={Activity} />
//             <Tab.Screen name="More" component={More} />
//         </Tab.Navigator>
//     );
// }

// export default BottomTabNavigation



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Services from '../screens/Services';
import Activity from '../screens/Activity';
import More from '../screens/More';
import { Entypo, AntDesign, MaterialIcons, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconComponent; 
                    switch (route.name) {
                        case 'Home':
                            iconComponent = <FontAwesome5 name="home" size={size} color={color} />;
                            break;
                        case 'Services':
                            iconComponent = <MaterialIcons name="miscellaneous-services" size={size} color={color} />;
                            break;
                        case 'Activity':
                            iconComponent = <MaterialCommunityIcons name="account-wrench" size={size} color={color} />;
                            break;
                        case 'More':
                            iconComponent = <AntDesign name="bars" size={size} color={color} />;
                            break;
                        default:
                            iconComponent = null;
                            break;
                    }
                    return iconComponent;
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.darkGray,
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true
            })}
            sceneContainerStyle={{ backgroundColor: 'white' }}
            initialRouteName='Home'
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Services' component={Services} />
            <Tab.Screen name='Activity' component={Activity} />
            <Tab.Screen name='More' component={More} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;
