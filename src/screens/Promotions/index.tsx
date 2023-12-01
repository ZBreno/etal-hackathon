import React from "react";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Promotion from "../../components/Promotion";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import Story from "../../components/Story";

const Promotions = () => {

	const storys = [
		{
			name: "Mercado Queiroz",
			source: require("../../assets/story/queiroz.png"),
		},
		{
			name: "Magazine Luiza",
			source: require("../../assets/story/magalu.png"),
		},
		{
			name: "Armazem Paraíba",
			source: require("../../assets/story/armazem-paraiba.png"),
		},
		{
			name: "Nosso Atacarejo",
			source: require("../../assets/story/atacarejo.png"),
		},
		{
			name: "Oticas Carol",
			source: require("../../assets/story/oticas.png"),
		},
		{
			name: "Brisanet",
			source: require("../../assets/story/brisanet.png"),
		},
	];

	return (
		<ScrollView
			style={{
				backgroundColor: "#F3F4F6",
				flex: 1,
			}}
		>
			<View
				style={{
					backgroundColor: "white",
				}}
			>
				<Header showNotifications showGroupButton showAvatar />
				<Filter />
				<FlatList
					data={storys}
					keyExtractor={(item) => item.name}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							key={index}
							style={{ marginRight: 12 }}
						>
							<Story
								name={item.name}
								source={item.source}
								visited={index % 2 == 0}
							/>
						</TouchableOpacity>
					)}
				/>
			</View>
			<View style={{ padding: 16, gap: 16 }}>
				<Promotion />
				<Promotion />
			</View>
		</ScrollView>
	);
};

export default Promotions;
