import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile";
import SettingScreen from "../screens/Settings";
import SearchScreen from "../screens/Search";

type SearchStackParams = {
    SearchScreen : undefined,
    SettingScreen : undefined,
}

const SearchStack = createNativeStackNavigator<SearchStackParams>();


function SearchNav() : React.JSX.Element {

    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
            <SearchStack.Screen name="SettingScreen" component={SettingScreen} />
        </SearchStack.Navigator>
    );
}

export default SearchNav;