import "../styles/globals.css";
import "../styles/hydrogen.css";
import French from "../lang/fr.json";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { SWRConfig } from "swr";
import fetchJson from "../lib/fetchJson";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const { locale = "en" } = useRouter();

  const messages = useMemo(() => {
    return locale === "fr" ? French : undefined;
  }, [locale]);

  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

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
