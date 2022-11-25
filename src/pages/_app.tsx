import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/Auth";
import { globalStyle } from "../styles/global";
import { GlobalStyle } from "../styles/index";

globalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
