import styled from "styled-components/native";

export const Input = styled.TextInput<{ errorMode?: boolean }>`
	padding: 12px 14px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.background};
	border: 1px solid ${(props) => props.theme.colors.lightgray};
	height: 45px;
	color: ${({ theme, errorMode }) =>
		errorMode ? theme.colors.error : theme.colors.gray};
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const Container = styled.View`
	width: 100%;
	flex: 1;
`;

export const InputContainer = styled.View`
	flex-direction: row;
	align-items: center;
	border-radius: 8px;
	border: 1px solid ${(props) => props.theme.colors.lightgray};
	padding: 12px 14px;
	height: 45px;
	font-family: ${(props) => props.theme.fonts.regular};
	font-size: 14px;
	color: ${(props) => props.theme.colors.gray};
`;

export const Label = styled.Text<{ errorMode?: boolean }>`
	text-align: left;
	font-family: ${(props) => props.theme.fonts.medium};
	font-size: 14px;
	color: ${({ theme, errorMode }) =>
		errorMode ? theme.colors.error : theme.colors.black};
`;

export const Content = styled.Text`
	flex: 1;
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.gray};
`;

export const ErrorText = styled.Text`
	flex: 1;
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.error};
	font-size: 12px;
	border-color: ${(props) => props.theme.colors.error};
`;

export const ErrorMode = styled.Text`
	flex: 1;
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.error};
	border-color: ${(props) => props.theme.colors.error};
`;
