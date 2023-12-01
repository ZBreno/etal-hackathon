import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Text } from "react-native";
import Button from "../../components/Button";
import { FormContainer, GroupImage, Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Header from "../../components/Header";

const CreateGroup = () => {
	const theme = useTheme();

	const [groupName, setGroupName] = useState();

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
					<Input placeholder="Ex: Mercado livre Brasil" label="Nome do grupo" />
				</FormContainer>
				<Button title="Criar grupo" />
			</Container>
		</>
	);
};

export default CreateGroup;
