import styled from "styled-components/native";

export const StoryImage = styled.Image<{ visited: boolean | undefined }>`
	border-radius: 100px;
	border: 3px solid
		${(props) =>
			props.visited
				? props.theme.colors["border-story"]
				: props.theme.colors.primary};
`;

export const TextStory = styled.Text`
	color: ${(props) => props.theme.colors["text-gray"]};
	font-size: 12px;
	font-family: ${(props) => props.theme.fonts.regular};
	margin-top: 4px;
`;
