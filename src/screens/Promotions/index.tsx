import React from "react";
import { Text, View } from "react-native";
import Promotion from "../../components/Promotions";

// import { Container } from './styles';

const Promotions = () => {
  return (
    <View style={{backgroundColor: "#F3F4F6", flex: 1, padding: 16, justifyContent: 'center'}}>
      <Promotion/>
    </View>
  );
};

export default Promotions;
