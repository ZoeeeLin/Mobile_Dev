import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./screens/Home";
import AddTransaction from "./screens/AddTransaction";
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();

function Main() : React.JSX.Element {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home" 
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#d14545'},
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Transactions'}}/>
                <Stack.Screen name="Add Transaction" component={AddTransaction} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;