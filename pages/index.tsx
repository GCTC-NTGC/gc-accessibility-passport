import * as React from "react";
import { useIntl } from "react-intl";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Nav from "../components/Nav";

const HomePage: React.FunctionComponent = () => {
  return (
    <section
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column)"
      data-h2-justify-content="b(space-between)"
      style={{ height: "100vh" }}
    >
      <div>
        <Header />
        <Home />
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
