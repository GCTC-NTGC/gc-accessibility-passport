import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import * as React from "react";
import { useIntl } from "react-intl";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Links from "../../components/Links";
import Page, { SectionOne, SectionTwo } from "../../components/Page";
import ShareForm from "../../components/ShareForm";

const Share: React.FunctionComponent = () => {
  const intl = useIntl();
  const examples = [
    {
      label: intl.formatMessage({ defaultMessage: "My example barrier #1" }),
      value: "1",
    },
    {
      label: intl.formatMessage({ defaultMessage: "My example barrier #2" }),
      value: "2",
    },
    {
      label: intl.formatMessage({ defaultMessage: "My example barrier #3" }),
      value: "3",
    },
  ];
  return (
    <Layout title={intl.formatMessage({ defaultMessage: "Share my barriers" })}>
      <Page>
        <SectionOne>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({
              defaultMessage: "Share with someone new",
            })}
          </h2>
          <p>
            {intl.formatMessage({
              defaultMessage:
                "Below you can select one or more of your barriers to share with an individual. Once shared, an invitation will be sent, requiring them to accept. You can remove their access to your barriers at any time.",
            })}
          </p>
          <Alert
            icon={<ExclamationCircleIcon style={{ width: "1.25rem" }} />}
            message={intl.formatMessage({
              defaultMessage:
                "Please note that by sharing this barrier, the recipient can see linked situations, solutions, and documents.",
            })}
          />
          <ShareForm
            submitText={intl.formatMessage({
              defaultMessage: "Share the selected barriers",
            })}
            checklistLabel={intl.formatMessage({
              defaultMessage: "Select one or more barriers to share...",
            })}
            checklistOptions={examples}
          />
          <div>
            <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
              {intl.formatMessage({
                defaultMessage: "Manage barriers I’ve shared",
              })}
            </h2>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "The list below summarizes who has access to your barriers. You can remove their access at any time.",
              })}
            </p>
            <div>
              <div
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
              >
                <p data-h2-font-size="b(h5)" data-h2-font-weight="b(600)">
                  {intl.formatMessage({ defaultMessage: "Jane Scoresby (HR)" })}
                </p>
                <Button
                  color="white"
                  mode="solid"
                  data-h2-font-style="b(underline)"
                  data-h2-font-size="b(caption)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Remove all access",
                  })}
                </Button>
              </div>
              <ul
                data-h2-padding="b(left, m)"
                data-h2-margin="b(bottom, m)"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  <div
                    data-h2-display="b(flex)"
                    data-h2-justify-content="b(space-between)"
                    data-h2-align-items="b(center)"
                  >
                    <p data-h2-margin="b(all, none)">
                      {intl.formatMessage({
                        defaultMessage: "Example barrier #1",
                      })}
                    </p>
                    <Button
                      color="white"
                      mode="inline"
                      data-h2-font-color="b(black)"
                      data-h2-font-style="b(underline)"
                      data-h2-font-size="b(caption)"
                      data-h2-text-align="b(right)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "Remove access",
                      })}
                    </Button>
                  </div>
                </li>
                <li>
                  <div
                    data-h2-display="b(flex)"
                    data-h2-justify-content="b(space-between)"
                    data-h2-align-items="b(center)"
                  >
                    <p data-h2-margin="b(all, none)">
                      {intl.formatMessage({
                        defaultMessage: "Example barrier #3",
                      })}
                    </p>
                    <Button
                      color="white"
                      mode="inline"
                      data-h2-font-color="b(black)"
                      data-h2-font-style="b(underline)"
                      data-h2-font-size="b(caption)"
                      data-h2-text-align="b(right)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "Remove access",
                      })}
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SectionOne>
        <SectionTwo>
          <div data-h2-display="b(flex)" data-h2-flex-direction="b(column)">
            <div data-h2-display="b(flex)" data-h2-align-items="b(center)">
              <ShareIcon style={{ width: "1.25rem" }} />
              <h2
                data-h2-margin="b(all, none)"
                data-h2-padding="b(left, s)"
                data-h2-font-size="b(h5)"
                data-h2-font-weight="b(600)"
              >
                {intl.formatMessage({ defaultMessage: "Pending invitations" })}
              </h2>
            </div>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Below are a list of invitations you have sent to others that are awaiting a reply.",
              })}
            </p>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p>
                {intl.formatMessage({
                  defaultMessage: "Melissa Sari",
                })}
              </p>
              <Button
                color="white"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-font-size="b(caption)"
              >
                {intl.formatMessage({
                  defaultMessage: "Cancel invitation",
                })}
              </Button>
            </div>
            <Links />
          </div>
        </SectionTwo>
      </Page>
    </Layout>
  );
};

export default Share;
