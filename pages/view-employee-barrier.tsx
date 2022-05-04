import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { BarrierCard } from "../components/formComponents/BarrierCard";

const ReviewBarrier: React.FunctionComponent = () => {
  const intl = useIntl();

  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Frank’s Barrier: Noise in the workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Frank’s Barrier: Noise in the workplace",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <Page>
          <LeftSection>
            <div data-h2-margin="b(bottom, l)">
              <p data-h2-padding="b(all, s)" data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage:
                    "Below you will find a summary of your barrier and the solutions that your employee has identified. Select the view link within each interactive solution module to view it or take any required action.",
                })}
              </p>
              <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
                {intl.formatMessage(
                  {
                    defaultMessage: "Barrier Description",
                  },
                  { bold },
                )}
              </h4>
              <p
                data-h2-padding="b(all, s)"
                data-h2-margin="b(bottom, none)"
                data-h2-bg-color="b(lightgray)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "A noisy workplace can impact a person’s concentration and hearing and may cause headaches or distraction.",
                })}
              </p>
              <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
                {intl.formatMessage(
                  {
                    defaultMessage: "View/Action Shared Solutions",
                  },
                  { bold },
                )}
              </h4>
              <p
                data-h2-padding="b(all, s)"
                data-h2-margin="b(bottom, m)"
                data-h2-bg-color="b(lightgray)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "The modules below present you with the solutions that you have shared with your manager to view or act on the solutions.",
                })}
              </p>
              <BarrierCard
                title={intl.formatMessage({
                  defaultMessage: "Noise cancelling headphones",
                })}
                documentName={intl.formatMessage({
                  defaultMessage: "my_hearing_assessment.pdf(3MB)",
                })}
                actionLinks={["View"]}
              />
              <BarrierCard
                title={intl.formatMessage({
                  defaultMessage: "Access to quiet space",
                })}
                documentName={intl.formatMessage({
                  defaultMessage: "location_assessment.pdf(3MB)",
                })}
                actionLinks={["View"]}
              />
              <BarrierCard
                title={intl.formatMessage({
                  defaultMessage:
                    "Organizer / task planning tool/software application",
                })}
                documentName={intl.formatMessage({
                  defaultMessage: "software_assessment.pdf(3MB)",
                })}
                actionLinks={["View"]}
              />

              <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
                {intl.formatMessage(
                  {
                    defaultMessage: "Current Solutions",
                  },
                  { bold },
                )}
              </h4>
              <p
                data-h2-padding="b(all, s)"
                data-h2-margin="b(bottom, none)"
                data-h2-bg-color="b(lightgray)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "You haven't marked any solutions as working for this particular barrier.",
                })}
              </p>
              <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
                {intl.formatMessage(
                  {
                    defaultMessage: "Attempted Solutions",
                  },
                  { bold },
                )}
              </h4>
              <p
                data-h2-padding="b(all, s)"
                data-h2-margin="b(bottom, none)"
                data-h2-bg-color="b(lightgray)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "You haven't marked any solutions as ineffective for this particular barrier.",
                })}
              </p>
            </div>
          </LeftSection>
          <RightSection>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Resources",
                },
                { bold },
              )}
            </h4>
            <ul>
              <li data-h2-margin="b(all, s)"> &#8226; Example Resource #1</li>
              <li data-h2-margin="b(all, s)"> &#8226; Example Resource #2</li>
              <li data-h2-margin="b(all, s)"> &#8226; Example Resource #3</li>
              <li data-h2-margin="b(all, s)"> &#8226; Example Resource #4</li>
              <li data-h2-margin="b(all, s)"> &#8226; Example Resource #5</li>
            </ul>

            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "History",
                },
                { bold },
              )}
            </h4>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Frank proposed noise cancelling headphones as a solution to this barrier.",
              })}
            </p>
            <hr data-h2-margin="b(top, s)"></hr>

            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>

            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Frank proposed Access to quiet space as a solution to this barrier.",
              })}
            </p>
            <hr data-h2-margin="b(top, s)"></hr>

            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>

            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Frank proposed Organizer/task planning tool/software application as a solution to this barrier.",
              })}
            </p>
            <hr data-h2-margin="b(top, s)"></hr>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Frank added this barrier to their passport.",
              })}
            </p>
          </RightSection>
        </Page>
      </div>
    </Layout>
  );
};

export default ReviewBarrier;
