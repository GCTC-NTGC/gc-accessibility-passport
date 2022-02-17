import * as React from "react";
import Button from "../components/Button";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <div>
      <Button color="primary" mode="outline">
        Button
      </Button>
    </div>
  );
};

export default HomePage;
