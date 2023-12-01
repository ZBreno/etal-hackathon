import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	background-color: white;
`;

export const FormContainer = styled.View`
	width: 100%;
	flex-direction: row;
	gap: 24px;
	align-items: center;
	
`;

export const GroupImage = styled.View`
	width: 80px;
	height: 80px;
	border-radius: 180px;
	border: 0.5px solid ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors["primary-transparent"]};
	justify-content: center;
	align-items: center;
`;
