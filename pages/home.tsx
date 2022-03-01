import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Header from "../components/Header";

const HomePage: React.FunctionComponent = () => {
  const intl = useIntl();
  return (
    <div>
      <Header />
      <Button color="primary" mode="outline">
        {intl.formatMessage({
          defaultMessage: "Hello World",
        })}
      </Button>
    </div>
  );
};

export default HomePage;
