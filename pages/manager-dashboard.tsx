import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import { PassportCard } from "../components/formComponents/PassportCard";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";

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
        defaultMessage: "My manager dashboard",
      })}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <p data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the “View passport” link beside each employee’s name to view their Passport information and take action on any solutions they have requested.",
              })}
            </p>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Employees with shared passports",
                },
                { bold },
              )}
            </h4>

            <PassportCard
              title={intl.formatMessage({
                defaultMessage: "Frank Turot",
              })}
            />
            <PassportCard
              title={intl.formatMessage({
                defaultMessage: "Shannon Ghiles",
              })}
            />
            <PassportCard
              title={intl.formatMessage({
                defaultMessage: "Margaret Turing",
              })}
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
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "Contact a Case Manager/DTA Officer",
              })}
            </h4>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to contact a workplace accommodation professional in your organization.",
              })}
            </p>

            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, m)"
            >
              {intl.formatMessage({
                defaultMessage: "Get in touch",
              })}
            </Button>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Contact the Accessibility, Accommodation and Adaptive Computer Technology (AAACT) Team",
              })}
            </h4>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to contact the AAACT team for an information session or an assessment.",
              })}
            </p>
            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
            >
              {intl.formatMessage({
                defaultMessage: "Contact the AAACT",
              })}
            </Button>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ManagerDashboard;
