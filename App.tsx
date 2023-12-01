import { ThemeProvider } from "styled-components";
import Promotions from "./src/screens/Promotions";

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { theme } from "./src/styles/theme";
import MyGroups from "./src/screens/MyGroups";
import CreateGroup from "./src/screens/CreateGroup";
import GroupChat from "./src/screens/GroupChat";
import CreatePromotion from "./src/screens/CreatePromotion";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			{/* <Promotions /> */}
			{/* <CreateGroup /> */}
			<CreatePromotion />
		</ThemeProvider>
	);
}
