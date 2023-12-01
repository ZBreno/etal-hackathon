import styled from "styled-components/native";

export const ViewContainer = styled.View`
	background: ${(props) => props.theme.white};
	color: ${(props) => props.theme.white};
	padding: 16px;
	border-radius: 12px;
	border: 1px solid ${(props) => props.theme.border};
`;

export const ViewContainerProduct = styled.View`
	flex-direction: row;
	gap: 16px;
`;

export const TextStore = styled.Text`
	color: ${(props) => props.theme["text-gray"]};
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	margin-left: 12px;
`;
export const TextTime = styled.Text`
	color: ${(props) => props.theme["text-gray"]};
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
`;

export const TitleProduct = styled.Text`
	color: ${(props) => props.theme.black};
	font-size: 16px;
	flex-wrap: wrap;
`;

export const TextDelivery = styled.Text`
	color: ${(props) => props.theme.green};
	font-size: 14px;
	font-weight: 500;
	background-color:  ${(props) => props.theme.lightgreen};
	padding: 8px 12px;
	border-radius: 8px;
	margin-top: 8px;
	align-items: flex-start;
	justify-content: flex-start;
`;
