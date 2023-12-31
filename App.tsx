import { ThemeProvider } from "styled-components";
import Promotions from "./src/screens/Promotions";

export default function App() {
  const theme = {
    primary: "#CE2C34",
    "primary-transparent": "#CE2C3410",
    background: "#F3F4F6",
    black: "#353535",
    gray: "#808388",
    white: "#ffffff",
    lightgray: "#E6E6E6",
    "disabled-color": "#D0D0D0",
    warning: "#FFE660",
    error: "#CE2C34",
  };

  return (
    <ThemeProvider theme={theme}>
      <Promotions />
    </ThemeProvider>
  );
}
