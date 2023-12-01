import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Promotions from "../screens/Promotions";

export type PromotionsParamlist = {
  Promotions: undefined;
};

const Stack = createStackNavigator<PromotionsParamlist>();

export default function PromotionsStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Promotions"
        component={Promotions}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}