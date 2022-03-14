import { storeWrapper } from "../store";
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Add redux
export default storeWrapper.withRedux(MyApp);
