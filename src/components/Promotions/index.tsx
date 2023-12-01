import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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
	ButtonFavorite,
	TextVisualizePromotion,
} from "./styles";
import {
	Feather,
	MaterialCommunityIcons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export default function Promotion() {
	const theme = useTheme();

	const [favorite, setFavorite] = useState(false);
	const [like, setLike] = useState(false);

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
				<View style={{ flexDirection: "row", gap: 8 }}>
					<ButtonFavorite onPress={() => setFavorite(!favorite)}>
						{favorite ? (
							<AntDesign name="heart" size={20} color={theme.colors.primary} />
						) : (
							<AntDesign name="hearto" size={20} color={theme.colors.black} />
						)}
					</ButtonFavorite>
					<ButtonFavorite onPress={() => setLike(!like)}>
						{like ? (
							<AntDesign name="like1" size={20} color={theme.colors.primary} />
						) : (
							<AntDesign name="like2" size={20} color={theme.colors.black} />
						)}
					</ButtonFavorite>
					<TouchableOpacity
						style={{ alignItems: "center", flexDirection: "row", gap: 4 }}
					>
						<TextVisualizePromotion>Ver</TextVisualizePromotion>
						<MaterialIcons
							name="arrow-forward-ios"
							size={16}
							color={theme.colors.primary}
						/>
					</TouchableOpacity>
				</View>
			</ViewContainerComment>
		</ViewContainer>
	);
}
