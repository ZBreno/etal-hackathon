import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${(props) => props.theme.colors.white};
	padding: 16px;
	flex: 1;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 20px;
	font-family: ${(props) => props.theme.fonts.medium};
	margin-top: 12px;
`;

export const SubTitle = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const LabelImage = styled.Text`
	text-align: left;
	font-family: ${(props) => props.theme.fonts.medium};
	font-size: 14px;
	color: ${({ theme }) => theme.colors.black};
`;
