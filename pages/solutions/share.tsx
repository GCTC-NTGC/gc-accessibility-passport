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
import useUser from "../../lib/useUser";

const Share: React.FunctionComponent = () => {
  useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const intl = useIntl();
  const examples = [
    {
      label: intl.formatMessage({ defaultMessage: "My example solution #1" }),
      value: "1",
    },
    {
      label: intl.formatMessage({ defaultMessage: "My example solution #2" }),
      value: "2",
    },
    {
      label: intl.formatMessage({ defaultMessage: "My example solution #3" }),
      value: "3",
    },
  ];
  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Share my solutions" })}
      headTitle={intl.formatMessage({
        defaultMessage: "Share My Solutions - GC Accessibility Passport",
      })}
    >
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
                "Below you can select one or more of your solutions to share with an individual. Once shared, an invitation will be sent, requiring them to accept. You can remove their access to your solutions at any time.",
            })}
          </p>
          <Alert
            icon={<ExclamationCircleIcon style={{ width: "1.25rem" }} />}
            message={intl.formatMessage({
              defaultMessage:
                "Please note that by sharing this solution, the recipient can see linked situations, barriers, and documents.",
            })}
          />
          <ShareForm
            submitText={intl.formatMessage({
              defaultMessage: "Share the selected solutions",
            })}
            checklistLabel={intl.formatMessage({
              defaultMessage: "Select one or more solutions to share...",
            })}
            checklistOptions={examples}
          />
          <div>
            <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
              {intl.formatMessage({
                defaultMessage: "Manage solutions I’ve shared",
              })}
            </h2>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "The list below summarizes who has access to your solutions. You can remove their access at any time.",
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
                        defaultMessage: "Example solution #1",
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
                        defaultMessage: "Example solution #3",
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
