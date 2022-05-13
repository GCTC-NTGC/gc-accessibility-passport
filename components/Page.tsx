import * as React from "react";

export const LeftSection: React.FunctionComponent = ({ children, ...rest }) => {
  return (
    <div
      data-h2-padding="b(right-left, l) b(top-bottom, none)"
      data-h2-border="s(black, right, solid, s)"
      style={{ flex: 4 }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const RightSection: React.FunctionComponent = ({
  children,
  ...rest
}) => {
  return (
    <div
      data-h2-padding="b(right-left, l) b(top-bottom, none)"
      style={{ flex: 2 }}
      {...rest}
    >
      {children}
    </div>
  );
};

const Page: React.FunctionComponent = ({ children, ...rest }) => {
  return (
    <section
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column) s(row)"
      data-h2-padding="b(top-bottom, xl) b(right-left, m)"
      {...rest}
    >
      {children}
    </section>
  );
};

export default Page;
