import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  title?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <section
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column)"
      data-h2-justify-content="b(space-between)"
      style={{ height: "100vh" }}
    >
      <div>
        <Header title={title} />
        {children}
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
