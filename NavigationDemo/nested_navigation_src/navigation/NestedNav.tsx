import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./HomeStackNav";
import ProfileNav from "./ProfileStackNav";
import SearchNav from "./SearchStackNav";


type AppNavType = {
    Home : undefined,
    Profile : undefined,
    Search : undefined
};

const AppNav = createBottomTabNavigator<AppNavType>();

function AppNavigation() : React.JSX.Element {
    return (
        <NavigationContainer>
            <AppNav.Navigator screenOptions={{
                headerShown: false,
            }}>
                <AppNav.Screen name="Home" component={HomeNav}/>
                <AppNav.Screen name="Profile" component={ProfileNav} />
                <AppNav.Screen name="Search" component={SearchNav} />
            </AppNav.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;

