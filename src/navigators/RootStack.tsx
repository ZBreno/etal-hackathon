import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import Promotions from "../screens/Promotions";
import AnalisyPromotion from "../screens/AnalisyPromotion";
import CreateGroup from "../screens/CreateGroup";
import CreatePromotion from "../screens/CreatePromotion";
import GroupChat from "../screens/GroupChat";
import Groups from "../screens/Groups";
import GroupsHome from "../screens/GroupsHome";
import MyGroups from "../screens/MyGroups";
import PublishPromotion from "../screens/PublishPromotion";
import HomeTabs from "./HomeTabs";

export type RootStackParamList = {
	Promotions: undefined;
	AnalisyPromotions: undefined;
	CreateGroup: undefined;
	CreatePromotion: undefined;
	GroupChat: undefined;
	Groups: undefined;
	GroupsHome: undefined;
	MyGroups: undefined;
	PublishPromotion: undefined;
	HomeTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeTabs"
				component={HomeTabs}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Promotions"
				component={Promotions}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="AnalisyPromotions"
				component={AnalisyPromotion}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CreateGroup"
				component={CreateGroup}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="CreatePromotion"
				component={CreatePromotion}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="GroupChat"
				component={GroupChat}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Groups"
				component={Groups}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="GroupsHome"
				component={GroupsHome}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="MyGroups"
				component={MyGroups}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PublishPromotion"
				component={PublishPromotion}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
