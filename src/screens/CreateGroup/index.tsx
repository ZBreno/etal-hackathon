import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Alert, Text, View } from "react-native";
import Button from "../../components/Button";
import { FormContainer, GroupImage, Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Header from "../../components/Header";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/RootStack";
import { api } from "../../services/api";

export type CreateGroupScreenProps = StackScreenProps<
	RootStackParamList,
	"CreateGroup"
>;
const CreateGroup = ({ navigation }: CreateGroupScreenProps) => {
	const theme = useTheme();

	const [groupName, setGroupName] = useState("");

	const onCreateGroup = async () => {
		try {
			const response = await api.post("group/", { name: groupName });

			console.log(response);
			Alert.alert("Sucesso!", "Seu grupo foi criado");
		} catch (err) {
			Alert.alert("Erro", "Não foi possível criar o grupo");
			console.log();
		}
	};

	return (
		<>
			<Header showNotifications showGroupButton showAvatar />
			<Container>
				<FormContainer>
					<GroupImage>
						<MaterialIcons
							name="groups"
							size={48}
							color={theme.colors.primary}
						/>
					</GroupImage>
					<View style={{ flex: 1 }}>
						<Input
							placeholder="Ex: Mercado livre Brasil"
							label="Nome do grupo"
							onChangeText={(text) => setGroupName(text)}
						/>
					</View>
				</FormContainer>
				<Button onPress={() => onCreateGroup()} title="Criar grupo" />
			</Container>
		</>
	);
};

export default CreateGroup;
