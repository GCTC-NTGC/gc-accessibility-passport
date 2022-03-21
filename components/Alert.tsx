import * as React from "react";

interface AlertProps {
  message: string;
  icon: React.ReactNode;
}

const Alert: React.FunctionComponent<AlertProps> = ({ message, icon }) => {
  return (
    <div
      data-h2-display="b(flex)"
      data-h2-align-items="b(flex-start)"
      data-h2-bg-color="b(lightblue)"
      data-h2-border="b(darkblue, all, solid, s)"
      data-h2-radius="b(s)"
      data-h2-padding="b(right-left, s)"
      data-h2-margin="b(top-bottom, m)"
    >
      <span data-h2-margin="b(top-right, s)">{icon}</span>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
