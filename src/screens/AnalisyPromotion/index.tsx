import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
	Comment,
	Container,
	ContainerComment,
	ContainerImageWarning,
	ContainerSendComment,
	ContainerWarning,
	Like,
	NameUser,
	Send,
	TextAnalisy,
	TextImageWarning,
	TextMoreInfo,
	TextObservation,
	TextPrice,
	Title,
} from "./styles";
import Header from "../../components/Header";
import {
	AntDesign,
	MaterialCommunityIcons,
	FontAwesome5,
	Feather,
	Ionicons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import { Input } from "../../components/Input";

export default function AnalisyPromotion() {
	const theme = useTheme();
	return (
		<ScrollView style={{ flex: 1 }}>
			<Header showNotifications showGroupButton showAvatar />
			<View style={{ padding: 16 }}>
				<TouchableOpacity>
					<AntDesign name="close" size={24} color={theme.colors.black} />
				</TouchableOpacity>
			</View>

			<ContainerWarning>
				<FontAwesome5 name="clock" size={20} color={theme.colors.black} />
				<TextAnalisy>
					Promoção em análise{" "}
					<TextObservation>
						(ela fica indisponível até o fim da análise).{" "}
						<TextMoreInfo>Saber mais</TextMoreInfo>
					</TextObservation>
				</TextAnalisy>
			</ContainerWarning>

			<View
				style={{
					backgroundColor: theme.colors.background,
					height: 16,
					marginTop: 8,
				}}
			/>
			<Container>
				<View style={{ padding: 16, flex: 1 }}>
					<Title>
						Notebook Lenovo Ideapad Flex 5i I7 8gb 256ssd Placa de video gtx
						1650
					</Title>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
						}}
					>
						<Image
							source={require("../../assets/promotions/notebook-product.png")}
							style={{ width: 250, height: 250 }}
							resizeMode="contain"
						/>
						<ContainerImageWarning>
							<AntDesign name="warning" size={20} color={theme.colors.black} />
							<TextImageWarning>Em análise</TextImageWarning>
						</ContainerImageWarning>
					</View>
					<TextPrice>R$ 5.999</TextPrice>
					<Button title="Pegar promoção" type="disabled" />
				</View>
				<View
					style={{
						backgroundColor: theme.colors.background,
						height: 16,
					}}
				/>
				<View style={{ padding: 16 }}>
					<View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
						<MaterialCommunityIcons
							name="comment-outline"
							size={20}
							color={theme.colors.green}
						/>
						<TextImageWarning>Comentários</TextImageWarning>
					</View>
					<View style={{ flexDirection: "row", gap: 8, flex: 1 }}>
						<Image
							source={require("../../assets/promotions/pechinchou.webp")}
							style={{ width: 40, height: 40, borderRadius: 20 }}
							resizeMode="contain"
						/>
						<ContainerComment>
							<NameUser>Pechinchou</NameUser>
							<Comment>
								Comente neste post para ajudar a comunidade a escolher seu
								produto!
							</Comment>
						</ContainerComment>
					</View>
					<View
						style={{
							flexDirection: "row",
							gap: 12,
							alignItems: "center",
							marginTop: 8,
						}}
					>
						<Like>Curtir</Like>
						<Send>há 8 horas</Send>
					</View>

					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
							gap: 8,
							marginTop: 16,
						}}
					>
						<Feather name="edit" size={32} color={theme.colors.primary} />
						<View style={{ justifyContent: "center", gap: -6 }}>
							<NameUser>Ainda não há comentários.</NameUser>
							<Send>Seja o primeiro a comentar</Send>
						</View>
					</View>

					<View
						style={{
							marginTop: 32,
							flexDirection: "row",
							flex: 1,
							alignItems: "center",
							gap: 16,
						}}
					>
						<View style={{ flex: 1 }}>
							<Input placeholder="Escreva um comentário" />
						</View>
						<ContainerSendComment>
							<Ionicons name="send" size={24} color="#646C70" />
						</ContainerSendComment>
					</View>
				</View>
			</Container>
		</ScrollView>
	);
}
