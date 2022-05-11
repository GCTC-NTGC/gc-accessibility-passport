import * as React from "react";
import Home from "../components/Home";
import Layout from "../components/Layout";

const HomePage: React.FunctionComponent = () => {
  return (
    <Layout
      title="Homepage - GC Workplace Accessibility Passport"
      data-h2-padding="b(all, none)"
    >
      <Home />
    </Layout>
  );
};

export default HomePage;
