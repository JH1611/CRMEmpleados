import { store } from "@/redux/store";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
	const theme = createTheme({
		palette: {
			secondary: {
				main: "#FFF",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	);
}
