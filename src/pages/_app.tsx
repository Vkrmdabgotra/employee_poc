import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import GlobalStyle from "@/theme/global.styled";
import theme from "@/theme/themes";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return <StyledComponentsRegistry>
     <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  </StyledComponentsRegistry>
}
