import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import { FormContainer, GroupImage, Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Header from "../../components/Header";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/RootStack";

export type CreateGroupScreenProps = StackScreenProps<
	RootStackParamList,
	"CreateGroup"
>;
const CreateGroup = ({ navigation }: CreateGroupScreenProps) => {
	const theme = useTheme();

	const [groupName, setGroupName] = useState();

	return (
		<View style={{ backgroundColor: "white", flex: 1 }}>
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
						/>
					</View>
				</FormContainer>
				<Button title="Criar grupo" />
			</Container>
		</View>
	);
};

export default CreateGroup;
