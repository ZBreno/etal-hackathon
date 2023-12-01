import { View, Text, Image } from "react-native";
import React from "react";
import {
	ViewContainer,
	ViewContainerProduct,
	TextStore,
	TextTime,
	TitleProduct,
	TextDelivery,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export default function Promotion() {

	const theme = useTheme();

	return (
		<ViewContainer>
			<ViewContainerProduct>
				<Image
					source={require("../../assets/promotions/notebook-product.png")}
					style={{ width: 115 }}
					resizeMode="contain"
				/>
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
							<Feather name="clock" size={16} color={theme.black} />
							<TextTime>Há 10min</TextTime>
						</View>
					</View>
					<TitleProduct>
						Notebook Lenovo Ideapad Flex 5i I7 8gb 256ssd Plac
					</TitleProduct>
					<View style={{alignItems: 'flex-start'}}>
					<TextDelivery>Frete grátis</TextDelivery>
					</View>
					<View style={{ flexDirection: "row", gap: 8 }}>
						<Text>preço antes</Text>
						<Text>preço depois</Text>
					</View>
				</View>
			</ViewContainerProduct>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 16,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Text>icon</Text>
					<Text>0 comentarios</Text>
				</View>
				<View style={{ flexDirection: "row", gap: 4 }}>
					<Text>favoritar</Text>
					<Text>Curtir</Text>
					<Text>Ver</Text>
				</View>
			</View>
		</ViewContainer>
	);
}
