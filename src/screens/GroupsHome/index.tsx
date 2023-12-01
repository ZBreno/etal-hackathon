import React from "react";
import groupPresentation from "./../../assets/images/group-presentation.png";
import { Container, Subtitle, Title } from "../../styles/globalStyles";
import Button from "../../components/Button";
import { ButtonsContainer, GroupPresentationImage } from "./styles";
import { RootStackParamList } from "../../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
// import { Container } from './styles';

export type GroupHomeScreenProps = StackScreenProps<
	RootStackParamList,
	"GroupsHome"
>;
const GroupsHome = ({navigation}: GroupHomeScreenProps) => {
	return (
		<Container>
			<GroupPresentationImage source={groupPresentation} />
			<Title>Boas vindas @Felippe365!</Title>
			<Subtitle>
				Crie ou entre em um grupo e comece a usar nosso chat, aproveitando as
				ofertas mais quentes
			</Subtitle>

			<ButtonsContainer>
				<Button title="Entrar em um grupo" onPress={() => navigation.navigate("MyGroups")}/>
				<Button type="secondary" title="Criar grupo" onPress={() => navigation.navigate("CreateGroup")} />
			</ButtonsContainer>
		</Container>
	);
};

export default GroupsHome;
