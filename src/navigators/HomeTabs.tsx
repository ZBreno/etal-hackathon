import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { NavigatorScreenParams } from "@react-navigation/native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import TabBarComponent from "../components/TabBar";
import { createStackNavigator } from "@react-navigation/stack";
import { PromotionsParamlist } from "./PromotionsStack";
import { useTheme } from "styled-components";
import Promotions from "../screens/Promotions";
import CreatePromotion from "../screens/CreatePromotion";
import PublishPromotionStack, {
	PublishPromotionParamlist,
} from "./PublishStack";
import { View } from "react-native";
export type HomeTabsParamList = {
	Promotions: NavigatorScreenParams<PromotionsParamlist>;
	PublishPromotion: NavigatorScreenParams<PublishPromotionParamlist>;
};

const Tab = createBottomTabNavigator<HomeTabsParamList>();

export default function HomeTabs() {
	const theme = useTheme();
	return (
		<Tab.Navigator
			initialRouteName="Promotions"
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarHideOnKeyboard: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.black,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Promotions") {
						iconName = focused ? "dollar" : "dollar";
						return (
							<View>
								<FontAwesome
									name="dollar"
									size={24}
									color={focused ? theme.colors.primary : theme.colors.black}
								/>
							</View>
						);
					} else if (route.name === "PublishPromotion") {
						iconName = focused ? "search" : "search-outline";
						return (
							<Ionicons
								name="add-circle-outline"
								size={24}
								color={focused ? theme.colors.primary : theme.colors.black}
							/>
						);
					}
				},
			})}
		>
			<Tab.Screen
				name="Promotions"
				component={Promotions}
				options={{
					title: "Promoções",
				}}
			/>
			<Tab.Screen
				name="PublishPromotion"
				component={PublishPromotionStack}
				options={{ title: "Publicar" }}
			/>
		</Tab.Navigator>
	);
}
