import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  title?: string;
  editButton?: { title: string; link: string };
  center?: boolean;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  editButton,
  center,
  children,
}) => {
  return (
    <section
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column)"
      data-h2-justify-content="b(space-between)"
      style={{ height: "100vh" }}
    >
      <div>
        <Header title={title} editButton={editButton} center={center} />
        {children}
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
