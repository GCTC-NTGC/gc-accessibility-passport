import * as React from "react";
import { useIntl } from "react-intl";
import Button, { colorMap } from "../../components/Button";
import { PassportCard } from "../../components/PassportCard";
import Layout from "../../components/Layout";
import Page, { LeftSection, RightSection } from "../../components/Page";
import Link from "next/link";

const ManagerDashboard: React.FunctionComponent = () => {
  const intl = useIntl();

  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "My manager dashboard",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "My manager dashboard - GC Accessibility Passport",
      })}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the “View passport” link beside each employee’s name to view their Passport information and take action on any solutions they have requested.",
              })}
            </p>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "Employees with shared passports",
              })}
            </h2>
            <PassportCard
              title={intl.formatMessage({
                defaultMessage: "Frank Turot",
              })}
              link={{
                title: intl.formatMessage({
                  defaultMessage: "View passport",
                }),
                href: "/passport",
              }}
            />
            <PassportCard
              title={intl.formatMessage({
                defaultMessage: "Shannon Ghiles",
              })}
              link={{
                title: intl.formatMessage({
                  defaultMessage: "View passport",
                }),
                href: "/passport",
              }}
            />
            <PassportCard
              title={intl.formatMessage({
                defaultMessage: "Margaret Turing",
              })}
              link={{
                title: intl.formatMessage({
                  defaultMessage: "View passport",
                }),
                href: "/passport",
              }}
            />
          </div>
        </LeftSection>
        <RightSection>
          <div>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "Resources",
              })}
            </h4>
            <ul
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Example resource #1",
                  })}
                </p>
              </li>
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Example resource #2",
                  })}
                </p>
              </li>
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Example resource #3",
                  })}
                </p>
              </li>
            </ul>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "Contact a Case Manager/DTA Officer",
              })}
            </h2>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to contact a workplace accommodation professional in your organization.",
              })}
            </p>
            <Link href="#">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-display="b(block)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                data-h2-margin="b(bottom, m)"
              >
                {intl.formatMessage({
                  defaultMessage: "Get in touch",
                })}
              </a>
            </Link>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Contact the Accessibility, Accommodation and Adaptive Computer Technology (AAACT) Team",
              })}
            </h2>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to contact the AAACT team for an information session or an assessment.",
              })}
            </p>
            <Link href="https://www.canada.ca/en/shared-services/corporate/aaact-program.html">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-display="b(block)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Contact the AAACT",
                })}
              </a>
            </Link>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ManagerDashboard;
