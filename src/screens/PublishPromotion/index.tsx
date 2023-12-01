import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Container, ContainerSelected, TextPromotion, TextSelected, TextUnSelected } from "./styles";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
export default function PublishPromotion() {
	const theme = useTheme();
	return (
		<View style={{ flex: 1 }}>
			<Header showNotifications showGroupButton showAvatar />
			<Image
				source={require("../../assets/promotions/create-promotion.png")}
				style={{ width: Dimensions.get("window").width }}
				resizeMode="contain"
			/>

			<Container>
				<View style={{ flexDirection: "row", gap: 16, alignItems: 'center' }}>
					<ContainerSelected>
						<MaterialCommunityIcons
							name="package-variant-closed"
							size={20}
							color={theme.colors.primary}
						/>
						<TextSelected>Produtos</TextSelected>
					</ContainerSelected>
					<TouchableOpacity style={{ flexDirection: "row", gap: 4 }}>
						<MaterialCommunityIcons
							name="ticket-outline"
							size={20}
							color={theme.colors.black}
						/>
						<TextUnSelected>Cupom</TextUnSelected>
					</TouchableOpacity>
				</View>
				<TextPromotion>
					Para itens específicos, como uma geladeira ou game, com ou sem cupom
				</TextPromotion>
				<View style={{ flexDirection: "row", gap: 12, flex: 1, marginTop: 16 }}>
					<View style={{ flex: 1 }}>
						<Input placeholder="Cole aqui o link do produto" />
					</View>
					<View style={{ alignItems: "flex-end", width: "30%" }}>
						<Button title="Avançar" />
					</View>
				</View>
			</Container>
		</View>
	);
}
