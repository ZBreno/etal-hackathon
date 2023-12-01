import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Container, LabelImage, SubTitle, Title } from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/RootStack";

export type CreatePromotionScreenProps = StackScreenProps<
	RootStackParamList,
	"CreatePromotion"
>;
export default function CreatePromotion({
	navigation,
}: CreatePromotionScreenProps) {
	const theme = useTheme();
	return (
		<ScrollView style={{ flex: 1 }}>
			<Header showNotifications showGroupButton showAvatar />

			<Container>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<AntDesign name="close" size={24} color={theme.colors.black} />
				</TouchableOpacity>

				<Title>Hora de revisar!</Title>
				<SubTitle>
					Já preenchemos algumas informações sobre sua promoção. agora é só
					esperar
				</SubTitle>

				<View style={{ marginTop: 24, gap: 16, marginBottom: 24 }}>
					<Input label="Loja*" value="Amazon" />
					<Input label="Título*" value="Liquidificador Arno, 3 velocidades" />
					<Input label="Preço*" value="R$ 65,00" />
					<Input label="Categoria*" value="Ventiladores" />
					<Input label="Cupom" value="Amazon15" />
					<View style={{ alignItems: "flex-start" }}>
						<LabelImage>Imagem*</LabelImage>
						<TouchableOpacity
							style={{
								backgroundColor: theme.colors.ligthred,
								alignItems: "center",
								paddingVertical: 16,
								paddingHorizontal: 24,
								borderRadius: 8,
								marginTop: 4,
							}}
						>
							<Ionicons
								name="image-outline"
								size={24}
								color={theme.colors.primary}
							/>
							<Text>Inserir</Text>
						</TouchableOpacity>
					</View>

					<Input
						label="Descrição da promoção*"
						value="insira o cupom, para ficar o preço da promoção"
						multiline
					/>
				</View>
				<Button
					title="Publicar"
					onPress={() => navigation.navigate("AnalisyPromotions")}
				/>
			</Container>
		</ScrollView>
	);
}
