import * as React from "react";

interface CardProps {
  id: string;
  title: string;
}

const Card: React.FunctionComponent<CardProps> = ({ id, title, children }) => {
  return (
    <div
      key={id}
      data-h2-display="b(flex)"
      data-h2-justify-content="b(space-between)"
      data-h2-align-items="b(center)"
      data-h2-shadow="b(m)"
      data-h2-radius="b(s)"
      data-h2-padding="b(top-bottom, xs) b(right-left, xxs)"
      data-h2-margin="b(bottom, m)"
    >
      <p
        data-h2-margin="b(all, s)"
        data-h2-font-style="b(underline)"
        data-h2-font-size="b(h5)"
        data-h2-font-weight="b(600)"
      >
        {title}
      </p>
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(space-between)"
        data-h2-align-items="b(center)"
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
