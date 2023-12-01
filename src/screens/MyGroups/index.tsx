import React from "react";
import groupPresentation from "./../../assets/images/group-presentation.png";
import Button from "../../components/Button";
import { ButtonsContainer, GroupPresentationImage, Container } from "./styles";
import GroupItem from "../../components/GroupItem";
// import { Container } from './styles';
import { StackScreenProps } from "@react-navigation/stack";
import group1 from "./../../assets/groups/group1.png";
import group2 from "./../../assets/groups/group2.png";
import Header from "../../components/Header";
import { RootStackParamList } from "../../navigators/RootStack";
import { View } from "react-native";
export type MyGroupScreenProps = StackScreenProps<
	RootStackParamList,
	"MyGroups"
>;

const MyGroups = ({ navigation }: MyGroupScreenProps) => {
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<Header showAvatar showNotifications showGroupButton />
			<Container>
				<GroupItem
					onPress={() => navigation.navigate("GroupChat")}
					name="Super Promoções"
					lastMessage="Felps: Calma mussarelo"
					lastMessageHour="9:58 AM"
					image={group1}
				/>
				<GroupItem
					onPress={() => navigation.navigate("GroupChat")}
					name="Super Promoções"
					lastMessage="Ze: eu so buro"
					lastMessageHour="10:56 AM"
					image={group2}
				/>
			</Container>
		</View>
	);
};

export default MyGroups;
