import React, { useEffect, useState } from "react";
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
import { api } from "../../services/api";
export type MyGroupScreenProps = StackScreenProps<
	RootStackParamList,
	"MyGroups"
>;

const MyGroups = ({ navigation }: MyGroupScreenProps) => {
	const [groups, setGroups] = useState([]);

	const getAllGroups = async () => {
		try {
			const { data } = await api.get("group/");

			setGroups(data);
		} catch (err) {
			console.log(JSON.stringify(err));
		}
	};

	useEffect(() => {
		getAllGroups();
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<Header showAvatar showNotifications showGroupButton={false} />
			<Container>
				<GroupItem
					onPress={() => navigation.navigate("GroupChat")}
					name="Super Promoções"
					lastMessage="Felps: Calma"
					lastMessageHour="9:58 AM"
					image={group1}
				/>
				<GroupItem
					onPress={() => navigation.navigate("GroupChat")}
					name="Super Promoções"
					lastMessage="Ze: oi"
					lastMessageHour="10:56 AM"
					image={group2}
				/>
				{groups.map((group) => (
					<GroupItem
						onPress={() => navigation.navigate("GroupChat")}
						name={group.name}
						lastMessage="Ze: via api"
						lastMessageHour="11:56 AM"
						image={group2}
					/>
				))}
			</Container>
		</View>
	);
};

export default MyGroups;
