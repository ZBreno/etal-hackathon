import { View, Text, Image } from "react-native";
import React from "react";
import { StoryImage, TextStory } from "./styles";

interface StoryProps {
	name: string;
	source: {
		height: number;
		width: number;
		uri: string;
	};
	visited?: boolean;
}

export default function Story({ name, source, visited }: StoryProps) {
	return (
		<View style={{alignItems: 'center', marginVertical: 12}}>
			<StoryImage source={source} visited={visited} />
			<TextStory>{name}</TextStory>
		</View>
	);
}
