import React, { useCallback, useMemo, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import {
	BackButton,
	Container,
	Header,
	HeaderChatContainer,
	HeaderImage,
	HeaderTitle,
	styles,
} from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import uuid from "react-native-uuid";
import group1 from "./../../assets/groups/group1.png";
// import { Container } from './styles';

const GroupChat = () => {
	const theme = useTheme();
	const navigation = undefined;

	const [typedMessage, setTypedMessage] = useState<string>("");

	const [messagesHistory, setMessagesHistory] = useState<IMessage[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const name = "Super Promoções";
	const userId = useMemo(() => uuid.v4().toString(), []);

	const onSend = useCallback(
		async (message: string = typedMessage) => {
			setIsLoading(true);
			console.log(messagesHistory);
			console.log("USER ->", userId);
			const messages: IMessage[] = [
				{
					_id: uuid.v4().toString(),
					createdAt: new Date(),
					text: message,
					user: { _id: userId, name: "Você", avatar: "." },
				},
			];

			setMessagesHistory((previousMessages) =>
				GiftedChat.append(previousMessages, messages)
			);
			setTypedMessage("");
		},
		[typedMessage]
	);

	return (
		<Container>
			<Header>
				<BackButton onPress={() => {}}>
					<Ionicons name="close" size={20} color={theme.colors.gray} />
				</BackButton>

				<HeaderChatContainer>
					<HeaderImage source={group1} />
					<HeaderTitle>{name}</HeaderTitle>
				</HeaderChatContainer>
			</Header>

			<GiftedChat
				locale="pt-br"
				// isTyping={isTyping}
				dateFormat="LL"
				timeFormat="LT"
				messages={messagesHistory}
				minInputToolbarHeight={65}
				renderInputToolbar={() => (
					<View style={styles.inputMessageContainer}>
						<TextInput
							autoFocus
							style={styles.inputMessage}
							value={typedMessage}
							onChangeText={setTypedMessage}
							allowFontScaling={false}
							clearButtonMode={"while-editing"}
							numberOfLines={10}
							keyboardAppearance={"default"}
							multiline={true}
							placeholder={"Mensagem"}
							scrollEnabled={true}
							maxLength={1000}
							onContentSizeChange={(e) => {
								if (e.nativeEvent.contentSize.width == 100) {
									e.stopPropagation();
								}
							}}
						/>
						<TouchableOpacity
							onPress={() => onSend()}
							disabled={!typedMessage}
							style={[
								styles.sendMessageButton,
								!typedMessage && styles.sendButtonDisabled,
							]}
						>
							<MaterialIcons
								name={"send"}
								size={22}
								color={theme.colors.gray}
							/>
						</TouchableOpacity>
					</View>
				)}
				renderMessage={(message) => {
					if (message.currentMessage?.user._id === userId)
						return (
							<View>
								<View style={styles.userMessageContainer}>
									<View style={styles.userMessageTextContainer}>
										<Text style={styles.userMessageText}>
											{message?.currentMessage?.text}
										</Text>
										<Text style={styles.messageHours}>
											{message?.currentMessage?.createdAt?.toLocaleString(
												"pt-br",
												{
													hour: "2-digit",
													minute: "2-digit",
												}
											)}
										</Text>
									</View>
								</View>
							</View>
						);

					return (
						<View>
							<View style={styles.responseContainer}>
								<Image style={styles.responseImage} source={group1} />

								<View style={styles.responseTextContainer}>
									<Text style={styles.responseText}>
										{message?.currentMessage?.text}
									</Text>
									<Text style={styles.responseHours}>
										{message?.currentMessage?.createdAt.toLocaleString(
											"pt-br",
											{
												hour: "2-digit",
												minute: "2-digit",
											}
										)}
									</Text>
								</View>
							</View>
						</View>
					);
				}}
				user={{
					_id: userId,
				}}
			/>
		</Container>
	);
};

export default GroupChat;
