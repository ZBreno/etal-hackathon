import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
	BackButton,
	Container,
	LogoImage,
	ToolOption,
	ToolsContainer,
} from "./styles";
import logo from "./../../assets/images/pechinchou-logo.png";
import {
	Feather,
	FontAwesome5,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { GroupHomeScreenProps } from "../../screens/GroupsHome";
interface HeaderProps {
	showBackButton?: boolean;
	showLogo?: boolean;
	showGroupButton?: boolean;
	showAvatar?: boolean;
	showNotifications?: boolean;
	children?: React.ReactNode;
}

type MyGroupNavigationProp = GroupHomeScreenProps["navigation"];

const Header = ({
	showBackButton = false,
	showLogo = true,
	showGroupButton,
	showAvatar,
	showNotifications,
	children,
}: HeaderProps) => {
	const theme = useTheme();
	const navigation = useNavigation<MyGroupNavigationProp>();
	return (
		<Container>
			{showBackButton && (
				<BackButton onPress={() => navigation.goBack()}>
					<MaterialIcons name="arrow-back" size={24} color={theme.colors.black} />
				</BackButton>
			)}
			{showLogo && <LogoImage source={logo} />}
			<ToolsContainer>
				{showNotifications && (
					<ToolOption>
						<FontAwesome5 name="bell" size={20} color={theme.colors.black} />
					</ToolOption>
				)}
				{showGroupButton && (
					<ToolOption onPress={() => navigation.navigate("GroupsHome")}>
						<MaterialCommunityIcons
							name="chat-outline"
							size={24}
							color={theme.colors.black}
						/>
					</ToolOption>
				)}
				{showAvatar && (
					<ToolOption>
						<Feather name="user" size={24} color={theme.colors.black} />
					</ToolOption>
				)}
			</ToolsContainer>
		</Container>
	);
};

export default Header;
