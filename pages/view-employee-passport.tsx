import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { PaperClipIcon } from "@heroicons/react/solid";

const ViewEmployeePassport: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Frank Turot's passport",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Frank Turot's passport",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <Page>
          <LeftSection>
            <div data-h2-margin="b(bottom, l)">
              <p data-h2-padding="b(all, s)" data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage:
                    "As the employee’s manager, you can view and action Passport information shared with you. The employee can revoke access to their Passport at any time. The employee’s Passport documents all actions.",
                })}
              </p>
              <p data-h2-padding="b(all, s)" data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage:
                    "You can action a barrier/solution package that an employee has shared with you by selecting the View link below.",
                })}
              </p>
              <p data-h2-padding="b(all, s)" data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage:
                    "Select View to action employee Passport information.",
                })}
              </p>
              <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                <p data-h2-font-size="b(h4)" data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage: "Barriers for review",
                  })}
                </p>
              </div>
              <div
                data-h2-display="b(flex)"
                data-h2-bg-color="b(lightblue)"
                data-h2-margin="b(all, s)"
              >
                <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                  <p data-h2-margin="b(left, s)">
                    {intl.formatMessage({
                      defaultMessage:
                        "The barriers below require your attention.",
                    })}
                  </p>
                </div>
              </div>
              <section
                data-h2-border="b(lightgray, all, solid, s)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h5)"
                      data-h2-margin="b(left, s)"
                      data-h2-font-weight="b(700)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "Noise in the Workplace",
                      })}
                    </p>
                  </div>
                  <div style={{ flex: 5 }} data-h2-margin="b(right, s)">
                    <p>
                      {intl.formatMessage({
                        defaultMessage: "2 solutions awaiting action",
                      })}
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "View",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
              </section>{" "}
              <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                <p
                  data-h2-font-size="b(h4)"
                  data-h2-margin="b(all, s)"
                  data-h2-padding="b(top, s)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Solutions in place",
                  })}
                </p>
                <p
                  data-h2-padding="b(all, s)"
                  data-h2-margin="b(left, s)"
                  data-h2-bg-color="b(lightgray)"
                >
                  {intl.formatMessage({
                    defaultMessage: "No solutions in place.",
                  })}
                </p>
              </div>
            </div>
          </LeftSection>
          <RightSection>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Employee Contact Information",
              })}
            </h4>
            <p data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Phone",
              })}
            </p>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage: "(555)555-5555",
              })}
            </p>
            <p data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Email",
              })}
            </p>
            <p data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "frank.turot@example.gov.ca",
              })}
            </p>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Employee Emergency Information",
              })}
            </h4>
            <p data-h2-margin="b(bottom, none)" data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Critical Information",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "In the event of an emergency...",
              })}
            </p>{" "}
            <p data-h2-margin="b(bottom, none)" data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Emergency Contact",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Gal Turot",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "(555)555-5555",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)" data-h2-font-weight="b(700)">
              {intl.formatMessage({
                defaultMessage: "Emergency documentation",
              })}
            </p>
            <p data-h2-margin="b(bottom, m)">
              <PaperClipIcon style={{ width: "1.2rem" }}> </PaperClipIcon>
              <Link href={""}>
                {intl.formatMessage({
                  defaultMessage: "my_evacuation_plan.pdf(3MB)",
                })}
              </Link>
            </p>
            <p data-h2-margin="b(bottom, m)">
              <PaperClipIcon style={{ width: "1.2rem" }}> </PaperClipIcon>
              <Link href={""}>
                {intl.formatMessage({
                  defaultMessage: "my_paramedical_needs.pdf(3MB)",
                })}
              </Link>
            </p>
          </RightSection>
        </Page>
      </div>
    </Layout>
  );
};

export default ViewEmployeePassport;
