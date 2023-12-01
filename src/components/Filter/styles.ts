import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${(props) => props.theme.colors.white};
	padding: 12px 16px;
	border-top-width: 1px;
	border-top-color: ${(props) => props.theme.colors.border};
	border-bottom-width: 1px;
	border-bottom-color: ${(props) => props.theme.colors.border};
`;

export const TextFilter = styled.Text`
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors["text-gray"]};
`;

export const ContainerSelected = styled.TouchableOpacity`
	background-color: ${(props) => props.theme.colors.ligthred};
	padding: 8px;
	flex-direction: row;
	gap: 4;
	border-radius: 8px;
	justify-content: center;
`;

export const TextSelected = styled.Text`
	color: ${(props) => props.theme.colors.primary};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.bold};
	justify-content: center;
	text-align: center;
`;
