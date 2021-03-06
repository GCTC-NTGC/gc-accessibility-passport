import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { useIntl } from "react-intl";
import Breadcrumbs, { BreadcrumbsProps } from "./Breadcrumbs";

interface LayoutProps {
  title?: string | React.ReactNode;
  editButton?: { title: string; link: string };
  center?: boolean;
  headTitle?: string;
  formLayout?: boolean;
  crumbs: BreadcrumbsProps["links"];
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  editButton,
  center,
  headTitle,
  formLayout,
  children,
  crumbs,
  ...rest
}) => {
  const intl = useIntl();

  const links = [...crumbs];
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
          <Breadcrumbs links={links}></Breadcrumbs>
          <div
            id="content"
            {...(formLayout
              ? {
                  "data-h2-width": "m(50)",
                  "data-h2-padding": "b(top-bottom, l)",
                  "data-h2-container": "b(center, l)",
                }
              : {
                  "data-h2-padding": "m(right-left, l) l(right-left, xxl)",
                })}
            style={{ margin: "auto" }}
            {...rest}
          >
            {children}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
