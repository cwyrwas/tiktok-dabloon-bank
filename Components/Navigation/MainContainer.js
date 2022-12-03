import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/UploadScreen';

//Screen names
const homeName = "Bank Manager";
const detailsName = "Uploads";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          "tabBarActiveTintColor": '#ed8312',
          "tabBarInactiveTintColor": 'gray',
          "tabBarLabelStyle": {
            "fontSize": 8,
          },
          "tabBarStyle": [{
            "display": "flex",
            "height": 80,
            "marginTop": 10,
            "borderTopWidth" : 1
          }],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
        })}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;