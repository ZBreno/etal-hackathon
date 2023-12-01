import styled from "styled-components/native";

export const Container = styled.View<{ backgroundColor: string }>`
	background-color: ${(props) => props.backgroundColor};
	width: 100%;
	border-radius: 24px;
	height: 40px;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text<{ color: string }>`
	color: ${(props) => props.color};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.bold};
`;
