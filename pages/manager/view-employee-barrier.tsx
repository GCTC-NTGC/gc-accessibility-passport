import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../../components/Layout";
import Page, { LeftSection, RightSection } from "../../components/Page";
import { BarrierCard } from "../../components/BarrierCard";

const ReviewBarrier: React.FunctionComponent = () => {
  const intl = useIntl();

  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Frank's Barrier: Noise in the workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Frank's Barrier: Noise in the workplace - GC Workplace Accessibility Passport",
      })}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Below you will find a summary of your barrier and the solutions that your employee has identified. Select the view link within each interactive solution module to view it or take any required action.",
              })}
            </p>
            <h2
              data-h2-font-size="b(h4)"
              data-h2-margin="b(top, m) b(bottom, none)"
            >
              {intl.formatMessage(
                {
                  defaultMessage: "Barrier Description",
                },
                { bold },
              )}
            </h2>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Noise in the workplace can impact concentration and hearing and may cause headaches or distraction.",
              })}
            </p>
            <h2
              data-h2-font-size="b(h4)"
              data-h2-margin="b(top, m) b(bottom, none)"
            >
              {intl.formatMessage(
                {
                  defaultMessage: "View/Action Shared Solutions",
                },
                { bold },
              )}
            </h2>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "The modules below present you with the solutions that your employee has shared with you to view or action. You can select the links in the upper right-hand corner of each solution box to view or act on the solutions.",
              })}
            </p>
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage: "Noise cancelling headphones",
              })}
              documentName={intl.formatMessage({
                defaultMessage: "my_hearing_assessment.pdf(3MB)",
              })}
              actionLinks={[
                {
                  title: intl.formatMessage({ defaultMessage: "View" }),
                  href: "/manager/view-action-solution",
                },
              ]}
              situations={[
                intl.formatMessage({ defaultMessage: "Physical workplace. " }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Take action",
                }),
                href: "/manager/view-action-solution",
              }}
              managerView
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage: "Access to quiet space",
              })}
              documentName={intl.formatMessage({
                defaultMessage: "location_assessment.pdf(3MB)",
              })}
              actionLinks={[
                {
                  title: intl.formatMessage({ defaultMessage: "View" }),
                  href: "/manager/view-employee-barrier",
                },
              ]}
              situations={[
                intl.formatMessage({ defaultMessage: "Physical workplace. " }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Take action",
                }),
                href: "/manager/view-action-solution",
              }}
              managerView
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage:
                  "Organizer / task planning tool/software application",
              })}
              documentName={intl.formatMessage({
                defaultMessage: "software_assessment.pdf(3MB)",
              })}
              actionLinks={[
                {
                  title: intl.formatMessage({ defaultMessage: "View" }),
                  href: "/manager/view-action-solution",
                },
              ]}
              situations={[
                intl.formatMessage({ defaultMessage: "Physical workplace. " }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Take action",
                }),
                href: "/manager/view-action-solution",
              }}
              managerView
            />
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Current Solutions",
                },
                { bold },
              )}
            </h2>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Frank hasn't marked any solutions as working for this particular barrier.",
              })}
            </p>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Attempted Solutions",
                },
                { bold },
              )}
            </h2>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Frank hasn't marked any solutions as ineffective for this particular barrier.",
              })}
            </p>
          </div>
        </LeftSection>
        <RightSection>
          <div>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "Resources",
              })}
            </h2>
            <ul
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>Example Resource #1</li>
              <li>Example Resource #2</li>
              <li>Example Resource #3</li>
              <li>Example Resource #4</li>
              <li>Example Resource #5</li>
            </ul>
          </div>

          <div>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "History",
                },
                { bold },
              )}
            </h2>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage(
                {
                  defaultMessage:
                    "Frank proposed <bold>Noise cancelling headphones</bold> as a solution to this barrier.",
                },
                { bold },
              )}
            </p>
            <hr data-h2-margin="b(top, s)"></hr>

            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>

            <p data-h2-margin="b(top, none)">
              {intl.formatMessage(
                {
                  defaultMessage:
                    "Frank proposed <bold>Access to quiet space</bold> as a solution to this barrier.",
                },
                { bold },
              )}
            </p>
            <hr data-h2-margin="b(top, s)"></hr>

            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>

            <p data-h2-margin="b(top, none)">
              {intl.formatMessage(
                {
                  defaultMessage:
                    "Frank proposed <bold>Organizer/task planning tool/software application</bold> as a solution to this barrier.",
                },
                { bold },
              )}
            </p>
            <hr data-h2-margin="b(top, s)"></hr>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "2022/April/03",
              })}
            </p>
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "Frank added this barrier to their passport.",
              })}
            </p>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ReviewBarrier;
