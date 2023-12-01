import React from "react";
import { Image, Text, View } from "react-native";
import groupPresentation from "./../../assets/images/group-presentation.png";
import { Subtitle, Title } from "../../styles/globalStyles";
// import { Container } from './styles';

const MyGroups = () => {
	return (
		<View>
			<Image source={groupPresentation} />
			<Title>Boas vindas @Felippe365!</Title>
			<Subtitle>
				Crie ou entre em um grupo e comece a usar nosso chat, aproveitando as
				ofertas mais quentes
			</Subtitle>
		</View>
	);
};

export default MyGroups;
