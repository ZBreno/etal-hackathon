import { View, Text, Image } from "react-native";
import React from "react";
import {
	ViewContainer,
	ViewContainerProduct,
	TextStore,
	TextTime,
	TitleProduct,
	TextDelivery,
	TextOldPrice,
	TextNewPrice,
	ViewContainerComment,
} from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export default function Promotion() {
	const theme = useTheme();
	return (
		<ViewContainer>
			<ViewContainerProduct>
				<View style={{ justifyContent: "center" }}>
					<Image
						source={require("../../assets/promotions/notebook-product.png")}
						style={{ width: 115 }}
						resizeMode="contain"
					/>
				</View>
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: "row", gap: 8 }}>
						<View style={{ flexDirection: "row" }}>
							<Image
								source={require("../../assets/promotions/amazon.jpeg")}
								style={{ width: 20, height: 20, borderRadius: 10 }}
							/>
							<Image
								source={require("../../assets/promotions/amazon.jpeg")}
								style={{
									width: 20,
									height: 20,
									borderRadius: 10,
									position: "absolute",
									left: 8,
								}}
							/>

							<TextStore>Amazon</TextStore>
						</View>

						<View style={{ flexDirection: "row", gap: 4 }}>
							<Feather name="clock" size={16} color={theme.colors.black} />
							<TextTime>Há 10min</TextTime>
						</View>
					</View>
					<TitleProduct numberOfLines={2}>
						Notebook Lenovo Ideapad Flex 5i I7 8gb 256ssd Plac
					</TitleProduct>
					<View style={{ alignItems: "flex-start" }}>
						<TextDelivery>Frete grátis</TextDelivery>
					</View>
					<View
						style={{
							flexDirection: "row",
							gap: 8,
							alignItems: "center",
							marginTop: 8,
						}}
					>
						<TextOldPrice>R$ 6.372</TextOldPrice>
						<TextNewPrice>R$ 5.999</TextNewPrice>
					</View>
				</View>
			</ViewContainerProduct>
			<ViewContainerComment>
				<View style={{ flexDirection: "row" }}>
					<MaterialCommunityIcons
						name="comment-outline"
						size={20}
						color={theme.colors.green}
					/>
					<TextStore>0 comentários</TextStore>
				</View>
				<View style={{ flexDirection: "row", gap: 4 }}>
					<Text>favoritar</Text>
					<Text>Curtir</Text>
					<Text>Ver</Text>
				</View>
			</ViewContainerComment>
		</ViewContainer>
	);
}
