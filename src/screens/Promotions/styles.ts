import styled from "styled-components/native";

const Button = styled.View`
	/* Adapt the colors based on primary prop */
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.primary};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #bf4f74;
	border-radius: 3px;
`;
