import { ThemeProvider } from "styled-components";
import Promotions from "./src/screens/Promotions";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { theme } from "./src/styles/theme";

export default function App() {

	const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

	return (
		<ThemeProvider theme={theme}>
			<Promotions />
		</ThemeProvider>
	);
}
