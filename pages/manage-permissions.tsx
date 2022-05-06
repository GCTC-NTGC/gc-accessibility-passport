import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { PermissionsCard } from "../components/formComponents/PermissionsCard";

const ManagePermissions: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Manage permissions",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Manage permissions",
      })}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "Manage access to your Passport information",
              })}
            </h2>
            <p data-h2-margin="b(bottom, l)">
              {intl.formatMessage({
                defaultMessage:
                  "View and manage access to your passport information.  Activate the links below to remove access.",
              })}
            </p>
            <h3
              data-h2-font-size="b(normal)"
              data-h2-font-weight="b(700)"
              data-h2-margin="b(bottom, s)"
            >
              {intl.formatMessage({
                defaultMessage: "Shared with your Manager",
              })}
            </h3>
            <div data-h2-margin="b(bottom, l)">
              <PermissionsCard
                title={intl.formatMessage({
                  defaultMessage: "Sui Kiyoko",
                })}
                actionLinks={[
                  intl.formatMessage({
                    defaultMessage: "Remove all access",
                  }),
                  intl.formatMessage({
                    defaultMessage: "Remove Barrier access",
                  }),
                ]}
              />
            </div>
            <h3
              data-h2-font-size="b(normal)"
              data-h2-font-weight="b(700)"
              data-h2-margin="b(bottom, s)"
            >
              {intl.formatMessage({
                defaultMessage: "Shared with your colleagues",
              })}
            </h3>
            <PermissionsCard
              title={intl.formatMessage({
                defaultMessage: "Priyanka Luka",
              })}
              actionLinks={[
                intl.formatMessage({
                  defaultMessage: "Remove all access",
                }),
                intl.formatMessage({
                  defaultMessage: "Remove Barrier access",
                }),
              ]}
            />
          </div>
        </LeftSection>
        <RightSection>
          <p data-h2-font-size="b(normal)" data-h2-margin="b(top, none)">
            {intl.formatMessage({
              defaultMessage:
                "Activate the link to share information with a new colleagues or manager.",
            })}
          </p>
          <div>
            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, m)"
            >
              {intl.formatMessage({
                defaultMessage: "Share with someone new",
              })}
            </Button>
            <p data-h2-font-size="b(normal)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to enter your manager’s information. This will make it easier to share your passport information with them.",
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
                defaultMessage: "Edit my manager info",
              })}
            </Button>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ManagePermissions;