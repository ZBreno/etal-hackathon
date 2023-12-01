import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const GroupImage = styled.Image`
	width: 70px;
	height: 70px;
	border-radius: 180px;
	border: 2px solid ${(props) => props.theme.colors.lightgray};
	justify-content: center;
	align-items: center;
`;

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	width: 100%;
`;

export const Content = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 16px;
	flex: 1;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-family: ${(props) => props.theme.fonts.medium};
	font-size: 18px;
	width: ${Dimensions.get("screen").width / 1.8}px;
`;

export const Subtitle = styled.Text`
	color: ${(props) => props.theme.colors.gray};
	font-family: ${(props) => props.theme.fonts.regular};
	font-size: 14px;
	width: ${Dimensions.get("screen").width / 1.8}px;
	margin-top: -4px;
`;

export const Time = styled.Text`
	color: ${(props) => props.theme.colors.gray};
	font-family: ${(props) => props.theme.fonts.regular};
	font-size: 12px;
`;
