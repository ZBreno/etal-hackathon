import React from "react";
import { View } from "react-native";
import { Container, LogoImage, ToolOption, ToolsContainer } from "./styles";
import logo from "./../../assets/images/pechinchou-logo.png";
import {
	Feather,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface HeaderProps {
	showBackButton?: boolean;
	showLogo?: boolean;
	showGroupButton?: boolean;
	showAvatar?: boolean;
	showNotifications?: boolean;
	children?: React.ReactNode;
}

const Header = ({
	showBackButton = false,
	showLogo = true,
	showGroupButton,
	showAvatar,
	showNotifications,
	children,
}: HeaderProps) => {
	const theme = useTheme();

	return (
		<Container>
			{showLogo && <LogoImage source={logo} />}
			<ToolsContainer>
				{showNotifications && (
					<ToolOption>
						<FontAwesome5 name="bell" size={20} color={theme.colors.black} />
					</ToolOption>
				)}
				{showGroupButton && (
					<ToolOption>
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
