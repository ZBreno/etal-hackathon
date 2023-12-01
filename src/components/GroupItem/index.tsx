import React from "react";
import { View } from "react-native";
import Header from "../Header";
import {
	GroupImage,
	Subtitle,
	Title,
	Container,
	Content,
	Time,
} from "./styles";

interface GroupItemProps {
	name: string;
	image: any;
	lastMessage: string;
	lastMessageHour: string;
	onPress?: () => void;
}

const GroupItem = ({
	name,
	image,
	lastMessage,
	lastMessageHour,
	onPress
}: GroupItemProps) => {
	return (
		<Container onPress={onPress}>
			<Content>
				<GroupImage source={image} />
				<View>
					<Title numberOfLines={1}>{name}</Title>
					<Subtitle numberOfLines={1}>{lastMessage}</Subtitle>
				</View>
			</Content>
			<Time>{lastMessageHour}</Time>
		</Container>
	);
};

export default GroupItem;
