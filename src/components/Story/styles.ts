import styled from "styled-components/native";

interface StoryImageProps {
  visited?: boolean;
}

export const StoryImage = styled.Image<StoryImageProps>`
	border-radius: 100px;
	border: 3px
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
