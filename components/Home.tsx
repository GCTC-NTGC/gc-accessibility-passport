import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";

const Home: React.FunctionComponent = () => {
  const intl = useIntl();
  return (
    <section>
      <div data-h2-display="b(flex)" data-h2-flex-direction="b(column) s(row)">
        <div
          data-h2-border="s(darkblue, right, solid, s)"
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b(lightgray)"
          style={{ flex: 2 }}
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
            data-h2-padding="b(all, m)"
          >
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Your GC Workplace Accessibility Passport is a tool to document the barriers you might face at work and the adaptive tools and support measures that you need to succeed in your job. You will be asked to document the barriers and potential solutions in different work situations such as remote workplace, selection process, or a learning event.",
              })}
            </p>
            <ul
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "A barrier means anything that hinders full and equal participation in the workplace.",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "A solution means the adaptive tools, supports or measures that will address the barrier and ensure full and equal participation in the workplace.",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "As you create the Passport, the information will be saved anonymously.",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "You will have a chance to review the barriers and solutions, and download a word version of the Passport before you create an account.",
                  })}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b(lightblue)"
          style={{ flex: 1 }}
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
                data-h2-display="b(flex)"
                data-h2-justify-content="b(center)"
                data-h2-align-items="b(center)"
                style={{ width: "100%", minHeight: "7rem" }}
              >
                <Link href="/barriers/identify-a-barrier">
                  <a
                    title={intl.formatMessage({
                      defaultMessage: "Create a passport",
                    })}
                  >
                    {intl.formatMessage({
                      defaultMessage: "Create a passport",
                    })}
                  </a>
                </Link>
              </div>
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
                data-h2-display="b(flex)"
                data-h2-justify-content="b(center)"
                data-h2-align-items="b(center)"
                style={{ width: "100%", minHeight: "7rem" }}
              >
                <Link href="manager/manager-dashboard">
                  <a
                    title={intl.formatMessage({
                      defaultMessage: "Manager Dashboard",
                    })}
                  >
                    {intl.formatMessage({
                      defaultMessage: "Manager Dashboard",
                    })}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
