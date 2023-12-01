import React from "react";
import { View } from "react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";

// import { Container } from './styles';

interface ButtonProps {
	title: string;
	type?: "primary" | "secondary";
}

const Button = ({ title, type = "primary" }: ButtonProps) => {
	const theme = useTheme();

	return (
		<Container
			backgroundColor={
				type === "primary" ? theme.colors.primary : theme.colors.white
			}
		>
			<Title
				color={type === "primary" ? theme.colors.white : theme.colors.primary}
			>
				{title}
			</Title>
		</Container>
	);
};

export default Button;
