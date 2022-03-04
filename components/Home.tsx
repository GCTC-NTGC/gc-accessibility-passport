import Image from "next/image";
import * as React from "react";
import { useIntl } from "react-intl";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const intl = useIntl();
  return (
    <section>
      <div
        data-h2-display="b(flex)"
        data-h2-border="b(black, bottom, solid, s)"
        data-h2-flex-direction="b(column) s(row)"
      >
        <div
          data-h2-border="s(darknavy, right, solid, s)"
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b(lightgray)"
          style={{ flexGrow: 2 }}
        >
          <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
            {intl.formatMessage({
              defaultMessage: "Using the passport",
              description: "Heading for section in homepage.",
            })}
          </h2>
          <div
            data-h2-bg-color="b(white)"
            data-h2-shadow="b(l)"
            data-h2-radius="b(s)"
            style={{ width: "100%", minHeight: "23rem" }}
          ></div>
        </div>
        <div
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b([light]lightnavy[.1])"
        >
          <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
            {intl.formatMessage({
              defaultMessage: "Help and resources",
              description: "Heading for section in homepage.",
            })}
          </h2>
          <div>
            <div>
              <h3 data-h2-font-size="b(h5)">
                {intl.formatMessage({
                  defaultMessage: "For employees",
                  description:
                    "Heading in help and resources section for employees",
                })}
              </h3>
              <div
                data-h2-bg-color="b(white)"
                data-h2-shadow="b(l)"
                data-h2-radius="b(s)"
                style={{ width: "100%", minHeight: "7rem" }}
              ></div>
            </div>
            <div>
              <h3 data-h2-font-size="b(h5)">
                {intl.formatMessage({
                  defaultMessage: "For managers",
                  description:
                    "Heading in help and resources section for managers",
                })}
              </h3>
              <div
                data-h2-bg-color="b(white)"
                data-h2-shadow="b(l)"
                data-h2-radius="b(s)"
                style={{ width: "100%", minHeight: "7rem" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div data-h2-position="b(relative)">
        <div className="image">
          <Image src="/mountains.png" layout="fill" objectFit="fill" />
        </div>
        <div
          data-h2-display="b(flex)"
          data-h2-justify-content="b(center)"
          data-h2-align-items="b(center)"
          data-h2-flex-direction="b(column)"
          data-h2-padding="b(all, xxl)"
        >
          <h2
            data-h2-font-size="b(h4)"
            data-h2-margin="b(top, none)"
            data-h2-font-color="b(white)"
          >
            {intl.formatMessage({
              defaultMessage: "Key features",
              description: "Heading for section in homepage.",
            })}
          </h2>
          <div
            data-h2-display="b(flex)"
            data-h2-flex-direction="b(column) s(row)"
          >
            <div
              data-h2-bg-color="b(white)"
              data-h2-shadow="b(l)"
              data-h2-radius="b(s)"
              data-h2-margin="b(right-left, none) s(right-left, m) b(bottom, m)"
              style={{ minWidth: "10rem", minHeight: "7rem" }}
            ></div>
            <div
              data-h2-bg-color="b(white)"
              data-h2-shadow="b(l)"
              data-h2-radius="b(s)"
              data-h2-margin="b(right-left, none) s(right-left, m) b(bottom, m)"
              style={{ minWidth: "10rem", minHeight: "7rem" }}
            ></div>
            <div
              data-h2-bg-color="b(white)"
              data-h2-shadow="b(l)"
              data-h2-radius="b(s)"
              data-h2-margin="b(right-left, none) s(right-left, m) b(bottom, m)"
              style={{ minWidth: "10rem", minHeight: "7rem" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        data-h2-border="s(darknavy, right, solid, s)"
        data-h2-padding="b(right-left, l) b(top-bottom, l)"
        data-h2-bg-color="b(lightgray)"
      >
        <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
          {intl.formatMessage({
            defaultMessage: "Testimonials / use cases",
            description: "Heading for section in homepage.",
          })}
        </h2>
        <div
          data-h2-bg-color="b(white)"
          data-h2-shadow="b(l)"
          data-h2-radius="b(s)"
          style={{ width: "100%", minHeight: "23rem" }}
        ></div>
      </div>
    </section>
  );
};

export default Home;
