import { ThemeProvider } from "styled-components";
import Promotions from "./src/screens/Promotions";
import { theme } from "./src/utils/theme";



export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Promotions />
		</ThemeProvider>
	);
}
