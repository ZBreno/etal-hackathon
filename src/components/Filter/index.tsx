import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Container, ContainerSelected, TextFilter, TextSelected } from "./styles";
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components";
export default function Filter() {
	const theme = useTheme();
	return (
		<Container>
			<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
				<TouchableOpacity style={{ flexDirection: "row", gap: 4 }}>
					<AntDesign name="staro" size={20} color={theme.colors["text-gray"]}/>
					<TextFilter>Destaques</TextFilter>
				</TouchableOpacity>
				<ContainerSelected >
					<MaterialCommunityIcons name="clock" size={20} color={theme.colors.primary}/>
					<TextSelected>Recentes</TextSelected>
				</ContainerSelected>
				<TouchableOpacity style={{ flexDirection: "row", gap: 4 }}>
					<Ionicons
						name="arrow-down"
						size={20}
						color={theme.colors["text-gray"]}
					/>
					<TextFilter>Menor Preço</TextFilter>
				</TouchableOpacity>
			</View>
		</Container>
	);
}
