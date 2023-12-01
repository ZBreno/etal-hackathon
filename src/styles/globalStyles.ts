import { createGlobalStyle } from "styled-components";
import styled from "styled-components/native";

export const Title = styled.Text`
	color: ${(props) => props.theme.black};
	font-size: 20px;
	font-weight: normal;
`;

export const Subtitle = styled.Text`
	color: ${(props) => props.theme.gray};
	font-size: 14px;
`;

const GlobalStyle = createGlobalStyle`
  body {
		
  }
`;

export default GlobalStyle;
