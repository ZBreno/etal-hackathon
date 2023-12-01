import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${(props) => props.theme.colors.white};
	flex: 1;
`;

export const ContainerWarning = styled.View`
	background-color: ${(props) => props.theme.colors.warning};
	padding: 24px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

export const TextAnalisy = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.bold};
`;
export const TextObservation = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const TextMoreInfo = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};
	text-decoration-line: underline;
`;

export const ContainerImageWarning = styled.View`
	background-color: ${(props) => props.theme.colors.warning};
	padding: 8px;
	flex-direction: row;
	justify-content: center;
	gap: 8px;
	position: absolute;
	width: 100%;
	top: 32px;
`;

export const TextImageWarning = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};
`;

export const TextPrice = styled.Text`
	color: ${(props) => props.theme.colors["text-gray"]};
	font-family: ${(props) => props.theme.fonts.bold};
	text-align: left;
	font-size: 20px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.colors["text-gray"]};
	font-size: 16px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const ContainerComment = styled.View`
	background-color: ${(props) => props.theme.colors.background};
	padding: 8px 12px;
	border-radius: 8px;
	width: 100%;
	margin-right: 16px;
	width: 85%;
`;

export const NameUser = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};
`;

export const Comment = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 10px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const Like = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const Send = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 10px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const ContainerSendComment = styled.TouchableOpacity`
	padding: 9px;
	border: 1px solid ${(props) => props.theme.colors.background};
	border-radius: 8px;
`;