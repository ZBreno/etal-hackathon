import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
	margin-top: ${Constants.statusBarHeight}px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 12px 16px;
`;

export const ToolsContainer = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

export const ToolOption = styled.TouchableOpacity`
	border: 1px solid ${(props) => props.theme.colors.lightgray};
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	padding: 6px;
	border-radius: 32px;
`;

export const LogoImage = styled.Image``;
