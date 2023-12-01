import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${(props) => props.theme.colors.white};
	padding: 16px;
	flex: 1;
`;

export const TextPromotion = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.regular};
	margin-top: 12px;
	align-items: center;
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

export const TextUnSelected = styled.Text`
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};
	color: ${(props) => props.theme.colors.black};
`;