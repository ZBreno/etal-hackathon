import styled from "styled-components/native";

export const ViewContainer = styled.View`
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.white};
	border-radius: 12px;
	border: 1px solid ${(props) => props.theme.colors.border};
`;

export const ViewContainerProduct = styled.View`
	flex-direction: row;
	gap: 16px;
	padding: 16px 16px 0px 16px;
`;
export const TextStore = styled.Text`
	color: ${(props) => props.theme.colors["text-gray"]};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};
	margin-left: 10px;
	align-items: center;
`;
export const TextTime = styled.Text`
	color: ${(props) => props.theme.colors["text-gray"]};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};

`;

export const TitleProduct = styled.Text`
	color: ${(props) => props.theme.colors.black};
	font-size: 16px;
	font-family: ${(props) => props.theme.fonts.medium};
	margin-top: 8px;

`;

export const TextDelivery = styled.Text`
	color: ${(props) => props.theme.colors.green};
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.medium};
	background-color: ${(props) => props.theme.colors.lightgreen};
	padding: 4px 12px;
	text-align: center;
	border-radius: 8px;
	margin-top: 8px;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const TextOldPrice = styled.Text`
	color: ${(props) => props.theme.colors.gray};
	text-decoration: line-through;
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.medium};
	
`;
export const TextNewPrice = styled.Text`
	color: ${(props) => props.theme.colors.primary};
	font-size: 14px;
	font-family: ${(props) => props.theme.fonts.bold};
`;

export const ViewContainerComment = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  padding: 16px;
	align-items: center;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.border};
`;