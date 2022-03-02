import "../styles/globals.css";
import "../styles/hydrogen.css";
import English from "../lang/en.json";
import French from "../lang/fr.json";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { SWRConfig } from "swr";
import fetchJson from "../lib/fetchJson";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const { locale = "en" } = useRouter();

  const messages = useMemo(() => {
    switch (locale) {
      case "en":
        return English;
      case "fr":
        return French;
      default:
        return English;
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </IntlProvider>
  );
}

export default MyApp;
