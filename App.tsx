import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { theme } from "./src/styles/theme";
import RootStack from "./src/navigators/RootStack";

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
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</ThemeProvider>
	);
}
