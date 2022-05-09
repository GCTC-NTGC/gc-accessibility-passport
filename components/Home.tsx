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
          >
            <div data-h2-display="b(flex)" data-h2-flex-direction="b(column)">
              <Link href="/barriers/identify-a-barrier">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Identify a barrier",
                  })}
                >
                  {intl.formatMessage({ defaultMessage: "Identify a barrier" })}
                </a>
              </Link>
              <Link href="/review-barrier">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Review Barrier info form",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Review Barrier info form",
                  })}{" "}
                </a>
              </Link>

              <Link href="solutions/identify-a-solution">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Identify a solution",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Identify a solution",
                  })}
                </a>
              </Link>
              <Link href="solutions/identify-a-solution-2">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Identify a solution (cont.)",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Identify a solution (cont.)",
                  })}
                </a>
              </Link>
              <Link href="manager/manager-info">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Manager info form",
                  })}
                >
                  {intl.formatMessage({ defaultMessage: "Manager info form" })}
                </a>
              </Link>
              <Link href="/share-my-passport">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Share My Passport Information",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Share My Passport Information form",
                  })}
                </a>
              </Link>
              <Link href="manager/view-employee-passport">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Employee Passport Information",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Employee Passport Information Form",
                  })}
                </a>
              </Link>
              <Link href="manager/view-employee-barrier">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "View Employee Barrier",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "View Employee Barrier",
                  })}
                </a>
              </Link>
              <Link href="/solutions/view">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "View/Action a solution",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "View/Action a solution",
                  })}
                </a>
              </Link>
              <Link href="manager/view-action-solution">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "[MANAGER] View/Action a solution",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "[MANAGER] View/Action a solution",
                  })}
                </a>
              </Link>
              <Link href="/manage-permissions">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Manage Permissions",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Manage Permissions",
                  })}
                </a>
              </Link>
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
              <Link href="/passport">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Employee Dashboard",
                  })}
                >
                  {intl.formatMessage({
                    defaultMessage: "Employee Dashboard",
                  })}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b(lightblue)"
          style={{ flexGrow: 1 }}
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
    </section>
  );
};

export default Home;
