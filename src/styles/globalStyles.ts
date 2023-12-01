import { createGlobalStyle } from "styled-components";
import styled from "styled-components/native";

export const Title = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 20px;
	font-weight: normal;
	font-family: ${(props) => props.theme.fonts.medium};
`;

export const Subtitle = styled.Text`
	color: ${(props) => props.theme.colors.gray};
	font-size: 14px;
	text-align: center;
	font-family: ${(props) => props.theme.fonts.regular};
`;

export const Container = styled.View`
	padding: 16px;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// const GlobalStyle = createGlobalStyle`

// `;

// export default GlobalStyle;
