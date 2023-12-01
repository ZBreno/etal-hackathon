import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreatePromotion from "../screens/CreatePromotion";
import PublishPromotion from "../screens/PublishPromotion";

export type PublishPromotionParamlist = {
  PublishPromotion: undefined;
};

const Stack = createStackNavigator<PublishPromotionParamlist>();

export default function PublishPromotionStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublishPromotion"
        component={PublishPromotion}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}