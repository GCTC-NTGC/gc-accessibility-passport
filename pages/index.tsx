import * as React from "react";
import { useIntl } from "react-intl";
import Home from "../components/Home";
import Layout from "../components/Layout";

const HomePage: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Homepage - GC Workplace Accessibility Passport",
      })}
      data-h2-padding="b(all, none)"
      crumbs={[]}
    >
      <Home />
    </Layout>
  );
};

export default HomePage;
