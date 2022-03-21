import { LightBulbIcon } from "@heroicons/react/outline";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Page, { SectionOne, SectionTwo } from "../components/Page";

interface ShareProps {}

const Share: React.FunctionComponent<ShareProps> = (props) => {
  const intl = useIntl();
  const barriers = [];
  return (
    <Layout title={intl.formatMessage({ defaultMessage: "Share my barriers" })}>
      <Page>
        <SectionOne>
          <div
            data-h2-display="b(flex)"
            data-h2-flex-direction="b(column)"
            data-h2-margin="b(bottom, m)"
          >
            <h2 data-h2-margin="b(all, none)">
              {intl.formatMessage({ defaultMessage: "Share with others" })}
            </h2>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Sharing barriers is easy; you can access a barrier’s details by clicking on it in the list above and then share it using the “shared with” section to add new viewers. You can also share multiple barriers with the same person at once using the button above.",
              })}
            </p>
            <Button
              color="secondary"
              mode="outline"
              data-h2-border="b(lightblue, all, dashed, s)"
              data-h2-margin="b(bottom, s)"
              data-h2-font-style="b(underline)"
            >
              {intl.formatMessage({
                defaultMessage: "Share my barriers",
              })}
            </Button>
          </div>
          <div>
            <h2 data-h2-margin="b(all, none)">
              {intl.formatMessage({ defaultMessage: "Manage shared barriers" })}
            </h2>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Below you’ll see a list of people you have shared barriers with. Under each person’s name is a list of the barriers they can access, where you can revoke their access to one or all of the barriers you’ve shared. You can always reshare a barrier with that person at a later time.",
              })}
            </p>
            <div>
              <div
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
              >
                <p>{intl.formatMessage({ defaultMessage: "Melissa Sari" })}</p>
                <Button
                  color="secondary"
                  mode="outline"
                  data-h2-font-style="b(underline)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Revoke all",
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
                        defaultMessage: "Taking notes in meetings",
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
                        defaultMessage: "Revoke",
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
                        defaultMessage:
                          "Hearing people approach my workstation",
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
                        defaultMessage: "Revoke",
                      })}
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-h2-display="b(flex)"
              data-h2-align-items="b(flex-start)"
              data-h2-bg-color="b([light]lightblue[.1])"
              data-h2-border="b(lightblue, all, solid, s)"
              data-h2-radius="b(s)"
              data-h2-padding="b(right-left, s)"
            >
              <span data-h2-margin="b(top-right, s)">
                <LightBulbIcon style={{ width: "1.25rem" }} />
              </span>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Please note that revoking access to a barrier will not remove that user’s history from it, meaning that while they will no longer be able to see your barrier, you will still be able to see how they’ve interacted with it until that point.",
                })}
              </p>
            </div>
          </div>
        </SectionOne>
        <SectionTwo>
          <h3 data-h2-margin="b(all, none)">
            {intl.formatMessage({ defaultMessage: "Pending" })}
          </h3>
          <p>
            {intl.formatMessage({
              defaultMessage:
                "Below is a list of invitations you have sent to other members, allowing them to view and comment on your barriers. When the member accepts your invitation, they’ll appear in the list under “Manage shared barriers”.",
            })}
          </p>
          <div>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p data-h2-margin="b(all, none)">
                {intl.formatMessage({ defaultMessage: "Allan Carmichael" })}
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
                  defaultMessage: "Cancel invitation",
                })}
              </Button>
            </div>
            <ul
              data-h2-padding="b(left, m)"
              data-h2-margin="b(bottom, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Taking notes in meetings",
                  })}
                </p>
              </li>
            </ul>
          </div>
        </SectionTwo>
      </Page>
    </Layout>
  );
};

export default Share;
