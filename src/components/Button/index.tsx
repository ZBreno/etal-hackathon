import React from "react";
import { View } from "react-native";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";

// import { Container } from './styles';

interface ButtonProps {
	title: string;
	type?: "primary" | "secondary" | "disabled";
}

const Button = ({ title, type = "primary" }: ButtonProps) => {
	const theme = useTheme();

	return (
		<Container
			backgroundColor={
				type === "primary"
					? theme.colors.primary
					: type === "disabled"
					? theme.colors.disabled
					: theme.colors.white
			}
			disabled={type === "disabled"}
		>
			<Title
				color={
					type === "primary"
						? theme.colors.white
						: type === "disabled"
						? theme.colors.textdisabled
						: theme.colors.primary
				}
			>
				{title}
			</Title>
		</Container>
	);
};

export default Button;
