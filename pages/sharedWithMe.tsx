import { LightBulbIcon } from "@heroicons/react/outline";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Page, { SectionOne, SectionTwo } from "../components/Page";
import useUser from "../lib/useUser";

interface SharedWithMeProps {}

const SharedWithMe: React.FunctionComponent<SharedWithMeProps> = (props) => {
  const { user, mutateUser } = useUser();
  const intl = useIntl();
  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Barriers shared with me" })}
    >
      <Page>
        <SectionOne>
          <h2 data-h2-margin="b(all, none)">
            {intl.formatMessage({ defaultMessage: "Share with others" })}
          </h2>
          <p>
            {intl.formatMessage({
              defaultMessage:
                "Below you’ll find a list of barriers that have been shared with you for review. Any actions taken on barriers found below are logged in that barrier’s history. Note that these people do not have access to your barriers unless you’ve explicitly shared them. ",
            })}
          </p>
          <div
            data-h2-display="b(flex)"
            data-h2-align-items="b(flex-start)"
            data-h2-bg-color="b([light]lightblue[.1])"
            data-h2-border="b(lightblue, all, solid, s)"
            data-h2-radius="b(s)"
            data-h2-padding="b(right-left, s)"
            data-h2-margin="b(bottom, m)"
          >
            <span data-h2-margin="b(top-right, s)">
              <LightBulbIcon style={{ width: "1.25rem" }} />
            </span>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Please remember that you are obliged to follow privacy rules in regards to information shared with you by others. You can learn more about how shared passport information should be treated by reading our guide.",
              })}
            </p>
          </div>
          <div>
            <p> {intl.formatMessage({ defaultMessage: "Yusef Amereen" })}</p>
            <p>
              {" "}
              {intl.formatMessage({
                defaultMessage:
                  "Yusef has granted you permission to view the following barriers in their passport:",
              })}
            </p>
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
                  <div>
                    <Button
                      color="white"
                      mode="inline"
                      data-h2-font-color="b(black)"
                      data-h2-font-style="b(underline)"
                      data-h2-font-size="b(caption)"
                      data-h2-text-align="b(right)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "Remove my access",
                      })}
                    </Button>
                    <Button
                      color="white"
                      mode="inline"
                      data-h2-font-color="b(black)"
                      data-h2-font-style="b(underline)"
                      data-h2-font-size="b(caption)"
                      data-h2-text-align="b(right)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "View",
                      })}
                    </Button>
                  </div>
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
                      defaultMessage: "Hearing people approach my workstation",
                    })}
                  </p>
                  <div>
                    <Button
                      color="white"
                      mode="inline"
                      data-h2-font-color="b(black)"
                      data-h2-font-style="b(underline)"
                      data-h2-font-size="b(caption)"
                      data-h2-text-align="b(right)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "Remove my access",
                      })}
                    </Button>
                    <Button
                      color="white"
                      mode="inline"
                      data-h2-font-color="b(black)"
                      data-h2-font-style="b(underline)"
                      data-h2-font-size="b(caption)"
                      data-h2-text-align="b(right)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "View",
                      })}
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </SectionOne>
        <SectionTwo></SectionTwo>
      </Page>
    </Layout>
  );
};

export default SharedWithMe;
