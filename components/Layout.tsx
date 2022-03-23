import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useIntl } from "react-intl";

interface LayoutProps {
  title?: string;
  editButton?: { title: string; link: string };
  center?: boolean;
  headTitle?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  editButton,
  center,
  headTitle,
  children,
}) => {
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>{headTitle || title}</title>
      </Head>
      <a
        className="screen-reader-text"
        data-h2-visibility="b(invisible)"
        href="#content"
      >
        {intl.formatMessage({ defaultMessage: "Skip to main content" })}
      </a>
      <section
        data-h2-display="b(flex)"
        data-h2-flex-direction="b(column)"
        data-h2-justify-content="b(space-between)"
        style={{ height: "100vh" }}
      >
        <div>
          <Header title={title} editButton={editButton} center={center} />
          <div id="content" tabIndex="-1">
            {children}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
