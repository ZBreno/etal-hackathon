import Constants from "expo-constants";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { theme } from "./../../styles/theme";

export const Container = styled.View`
	flex: 1;
	margin-top: ${Constants.statusBarHeight}px;
	padding-bottom: 4px;
`;

export const Header = styled.View`
	width: 100%;
	padding: 0px 16px;
	height: 56px;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 4px;
`;

export const BackButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	padding: 8px;
`;

export const HeaderChatContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 8px;
`;

export const HeaderImage = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 80px;
`;

export const HeaderTitle = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: 18px;
`;

export const styles = StyleSheet.create({
	inputMessageContainer: {
		alignSelf: "center",
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 8,
		gap: 8,
		backgroundColor: theme.colors.white,
	},

	inputMessage: {
		width: "80%",
		backgroundColor: theme.colors.white,
		borderColor: theme.colors.lightgray,
		borderWidth: 1,
		borderStyle: "solid",
		flexWrap: "wrap",
		alignItems: "center",
		borderRadius: 10,
		height: 43,
		paddingHorizontal: 16,
		marginLeft: 12,
	},

	sendMessageButton: {
		marginRight: 12,
		width: 43,
		height: 43,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: theme.colors.white,
		borderColor: theme.colors.lightgray,
		borderWidth: 1,
	},

	listMessages: {
		marginBottom: 12,
	},

	responseContainer: {
		flexDirection: "row",
		width: "60%",
		alignItems: "flex-end",
		marginLeft: 16,
		marginBottom: 6,
	},

	responseTextContainer: {
		minWidth: 70,
		backgroundColor: theme.colors.white,
		paddingHorizontal: 12,
		paddingTop: 14,
		paddingBottom: 6,
		borderRadius: 18,
		borderBottomStartRadius: 0,
		alignItems: "flex-start",
		justifyContent: "center",
	},

	responseText: {
		fontFamily: theme.fonts.regular,
		fontSize: 16,
		flexWrap: "wrap",
		lineHeight: 18,
	},

	responseImage: {
		width: 50,
		height: 50,
		alignItems: "flex-start",
		justifyContent: "center",
		marginRight: 4,
	},

	userMessageContainer: {
		width: "80%",
		flexDirection: "row-reverse",
		alignItems: "center",
		marginTop: 8,
		left: 70,
	},

	userMessageTextContainer: {
		minWidth: 70,
		backgroundColor: theme.colors.primary,
		paddingHorizontal: 12,
		paddingTop: 14,
		paddingBottom: 6,
		borderRadius: 18,
		borderBottomEndRadius: 0,
		alignItems: "flex-start",
		justifyContent: "center",
	},

	userMessageText: {
		color: theme.colors.white,
		fontFamily: theme.fonts.regular,
		fontSize: 16,
		flexWrap: "wrap",
		lineHeight: 18,
		textAlign: "left",
	},

	// userMessageImage: {
	//     width: 50,
	//     height: 50,
	//     alignItems: 'flex-start',
	//     justifyContent: 'center',
	//     borderRadius: 25
	// },

	header: {
		width: "100%",
		backgroundColor: theme.colors.white,
		paddingHorizontal: 16,
		height: 56,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		gap: 4,
	},

	headerImage: {
		width: 40,
		height: 40,
		backgroundColor: theme.colors["primary-transparent"],
		borderRadius: 30,
	},

	headerBotContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},

	headerText: {
		color: theme.colors.green,
		fontFamily: theme.fonts.medium,
		fontSize: 20,
	},

	loadingMessages: {
		marginVertical: 12,
	},

	backButton: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
	},

	responseHours: {
		color: "gray",
		alignSelf: "flex-end",
		fontSize: 10,
		fontFamily: theme.fonts.regular,
	},

	messageHours: {
		color: theme.colors.lightgray,
		alignSelf: "flex-end",
		fontSize: 10,
		fontFamily: theme.fonts.regular,
	},

	loadingAnimation: {
		height: 150,
		width: 150,
	},

	loadingContainer: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: theme.colors["primary-transparent"],
		alignItems: "center",
		justifyContent: "center",
	},

	loadingText: {
		fontFamily: theme.fonts.medium,
		fontSize: 18,
	},

	sendButtonDisabled: {
		opacity: 0.5,
	},

	quickReplyList: {
		marginLeft: 70,
	},

	quickReplyContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},

	quickReplyButton: {
		backgroundColor: theme.colors.green,
		borderRadius: 8,
		borderBottomEndRadius: 0,
		paddingHorizontal: 12,
		paddingVertical: 8,
	},

	quickReplyButtonText: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.white,
	},
});
