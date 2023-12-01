import React from "react";
import groupPresentation from "./../../assets/images/group-presentation.png";
import { Container, Subtitle, Title } from "../../styles/globalStyles";
import Button from "../../components/Button";
import { ButtonsContainer, GroupPresentationImage } from "./styles";
// import { Container } from './styles';

const MyGroups = () => {
	return (
		<Container>
			<GroupPresentationImage source={groupPresentation} />
			<Title>Boas vindas @Felippe365!</Title>
			<Subtitle>
				Crie ou entre em um grupo e comece a usar nosso chat, aproveitando as
				ofertas mais quentes
			</Subtitle>

			<ButtonsContainer>
				<Button title="Entrar em um grupo" />
				<Button type="secondary" title="Criar grupo" />
			</ButtonsContainer>
		</Container>
	);
};

export default MyGroups;
