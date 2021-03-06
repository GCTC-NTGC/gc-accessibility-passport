import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../../components/Layout";
import Page, { LeftSection, RightSection } from "../../components/Page";
import { BarrierCard } from "../../components/BarrierCard";
import { strong } from "../../helpers/format";

const ReviewBarrier: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Frank's Barrier: Noise in the workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Frank's Barrier: Noise in the workplace - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "My Dashboard",
            description: "Breadcrumb title.",
          }),
          href: "/manager/manager-dashboard",
        },
        {
          title: "Frank Turot",
          href: "/manager/view-employee-passport",
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Noise in the workplace",
            description: "Breadcrumb title.",
          }),
        },
      ]}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <p data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Here you will find a summary of the barrier and the solutions that your employee has identified. Select the view link within each interactive solution module to view it or take any required action.",
              })}
            </p>
            <h2
              data-h2-font-size="b(h4)"
              data-h2-margin="b(top, m) b(bottom, none)"
            >
              {intl.formatMessage({
                defaultMessage: "Barrier Description",
              })}
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
              {intl.formatMessage({
                defaultMessage: "View/Action Shared Solutions",
              })}
            </h2>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "The modules below present you with the solutions that your employee has shared with you to view or action.",
              })}
            </p>
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage: "Noise cancelling headphones",
              })}
              documentName="my_hearing_assessment.pdf(3MB)"
              actionLinks={[
                {
                  title: intl.formatMessage({ defaultMessage: "View" }),
                  href: "/manager/view-employee-solution",
                },
              ]}
              situations={[
                intl.formatMessage({ defaultMessage: "Physical workplace. " }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Take action",
                }),
                href: "/manager/view-employee-solution",
              }}
              managerView
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage: "Access to quiet space",
              })}
              documentName="location_assessment.pdf(3MB)"
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
                href: "/manager/view-employee-solution",
              }}
              managerView
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage:
                  "Organizer / task planning tool/software application",
              })}
              documentName="software_assessment.pdf(3MB)"
              actionLinks={[
                {
                  title: intl.formatMessage({ defaultMessage: "View" }),
                  href: "/manager/view-employee-solution",
                },
              ]}
              situations={[
                intl.formatMessage({ defaultMessage: "Physical workplace. " }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Take action",
                }),
                href: "/manager/view-employee-solution",
              }}
              managerView
            />
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Current Solutions",
              })}
            </h2>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Frank hasn't marked any solutions for this barrier.",
              })}
            </p>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Attempted Solutions",
              })}
            </h2>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Frank hasn't marked any solutions as ineffective for this barrier.",
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
              <li>
                {intl.formatMessage({
                  defaultMessage: "Example Resource #1",
                })}
              </li>
              <li>
                {intl.formatMessage({
                  defaultMessage: "Example Resource #2",
                })}
              </li>
              <li>
                {intl.formatMessage({
                  defaultMessage: "Example Resource #3",
                })}
              </li>
              <li>
                {intl.formatMessage({
                  defaultMessage: "Example Resource #4",
                })}
              </li>
              <li>
                {intl.formatMessage({
                  defaultMessage: "Example Resource #5",
                })}
              </li>
            </ul>
          </div>

          <div>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
              {intl.formatMessage({
                defaultMessage: "History",
              })}
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
                    "Frank proposed <strong>Noise cancelling headphones</strong> as a solution to this barrier.",
                },
                { strong },
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
                    "Frank proposed <strong>Access to quiet space</strong> as a solution to this barrier.",
                },
                { strong },
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
                    "Frank proposed <strong>Organizer/task planning tool/software application</strong> as a solution to this barrier.",
                },
                { strong },
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
