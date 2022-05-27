import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../../components/Layout";
import Page, { LeftSection, RightSection } from "../../components/Page";
import { PaperClipIcon } from "@heroicons/react/solid";

const ViewEmployeePassport: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Frank Turot's passport",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Frank Turot's passport - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        { title: "My Dashboard", href: "/manager/manager-dashboard" },
        { title: "Frank Turot" },
      ]}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage:
                  "As the employee’s manager, you can view and action Passport information shared with you. The employee can revoke access to their Passport at any time. The employee’s Passport documents all actions.",
              })}
            </p>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "You can action a barrier/solution package that an employee has shared with you by selecting the View link below.",
              })}
            </p>
            <p data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage:
                  "Select View to action employee Passport information.",
              })}
            </p>
            <div></div>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, m)">
              {intl.formatMessage({
                defaultMessage: "Barriers for review",
              })}
            </h2>
            <div
              data-h2-border="b(darkgray, left, solid, m)"
              data-h2-margin="b(top, s) b(bottom, m)"
              data-h2-shadow="b(m)"
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
              data-h2-padding="b(right-left, m)"
            >
              <div>
                <p data-h2-font-size="b(h5)" data-h2-font-weight="b(700)">
                  {intl.formatMessage({
                    defaultMessage: "Noise in the Workplace",
                  })}
                </p>
              </div>
              <div data-h2-display="b(flex)" data-h2-align-items="b(center)">
                <p data-h2-margin="b(right, l)">
                  {intl.formatMessage({
                    defaultMessage: "2 solutions awaiting action",
                  })}
                </p>
                <Link href="/manager/view-employee-barrier">
                  <a>
                    {intl.formatMessage({
                      defaultMessage: "View",
                    })}
                  </a>
                </Link>
              </div>
            </div>
            <div data-h2-margin="b(top, m)">
              <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
                {intl.formatMessage({
                  defaultMessage: "Solutions in place",
                })}
              </h2>
              <p data-h2-padding="b(all, s)" data-h2-bg-color="b(lightgray)">
                {intl.formatMessage({
                  defaultMessage: "No solutions in place.",
                })}
              </p>
            </div>
          </div>
        </LeftSection>
        <RightSection>
          <div data-h2-margin="b(bottom, l)">
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top-bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Employee Contact Information",
              })}
            </h2>
            <p data-h2-font-weight="b(700)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Phone",
              })}
            </p>
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "(555)555-5555",
              })}
            </p>
            <p data-h2-font-weight="b(700)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Email",
              })}
            </p>
            <p data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "frank.turot@example.gov.ca",
              })}
            </p>
          </div>
          <div>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Employee Emergency Information",
              })}
            </h2>
            <p data-h2-margin="b(bottom, none)" data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Critical Information",
              })}
            </p>
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "In the event of an emergency...",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)" data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Emergency Contact",
              })}
            </p>
            <p data-h2-margin="b(top-bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Gal Turot",
              })}
            </p>
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "(555)555-5555",
              })}
            </p>
            <div>
              <p data-h2-margin="b(bottom, none)" data-h2-font-weight="b(700)">
                {intl.formatMessage({
                  defaultMessage: "Emergency documentation",
                })}
              </p>
              <div data-h2-margin="b(top-bottom, s)" data-h2-display="b(flex)">
                <span data-h2-display="b(flex)" data-h2-margin="b(right, xs)">
                  <PaperClipIcon style={{ width: "1.2rem" }} />
                </span>
                <Link href="#">
                  <a>
                    {intl.formatMessage({
                      defaultMessage: "my_evacuation_plan.pdf(3MB)",
                    })}
                  </a>
                </Link>
              </div>
              <div data-h2-margin="b(bottom, m)" data-h2-display="b(flex)">
                <span data-h2-display="b(flex)" data-h2-margin="b(right, xs)">
                  <PaperClipIcon style={{ width: "1.2rem" }} />
                </span>
                <Link href="#">
                  <a>
                    {intl.formatMessage({
                      defaultMessage: "my_paramedical_needs.pdf(3MB)",
                    })}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ViewEmployeePassport;
