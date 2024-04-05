import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accueil from "./Accueil";
import Contact from "./Contact";
import { NavigationContainer } from "@react-navigation/native";

function Tabs() {
    const accueil = "Accueil";
    const places = "Lieux";
    const contact = "Contact";
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerStyle: { backgroundColor: '#A7000C' },
                    headerTintColor: '#fff',
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Accueil') {
                            iconName = 'home';
                        } else if (route.name === 'Lieux') {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (route.name === 'Contact') {
                            iconName = 'at-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#A7000C',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { backgroundColor: '#000' }
                })}
            >
                <Tab.Screen name={accueil} component={Accueil} />
                <Tab.Screen name={places} component={Places} />
                <Tab.Screen name={contact} component={Contact} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    NavigationContainer: {
        backgroundColor: '#000',
    },
});
export default Tabs;