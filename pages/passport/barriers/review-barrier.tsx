import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { colorMap } from "../../../components/Button";
import Layout from "../../../components/Layout";
import Page, { LeftSection, RightSection } from "../../../components/Page";
import { BarrierCard } from "../../../components/BarrierCard";
import { strong } from "../../../helpers/format";

const ReviewBarrier: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Review or Edit your Barrier: Noise in the Workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Review or Edit your Barrier: Noise in the Workplace - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "My passport",
            description: "Breadcrumb title.",
          }),
          href: "/passport",
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
            <p data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Here you will find a summary of your barrier and the solutions you have identified. Select the view or edit links within each interactive solution module to view or modify its details. Select the delete link within each module to remove a solution from your passport.",
              })}
            </p>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Barrier Description",
              })}
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
              {intl.formatMessage({
                defaultMessage: "Shared Solutions",
              })}
            </h4>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, m)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "The modules present you with the solutions that you have shared with your manager to view or action. Select the links to view, edit or delete each of the solutions linked to this barrier.",
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
                  href: "/passport/barriers/solutions/review-solution",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Edit" }),
                  href: "/passport/barriers/solutions/review-solution",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Delete" }),
                  href: "#",
                },
              ]}
              situations={[
                intl.formatMessage({
                  defaultMessage: "Office Workplace",
                }),
                intl.formatMessage({
                  defaultMessage: "Remote Workplace",
                }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Review",
                }),
                href: "/passport/barriers/solutions/review-solution",
              }}
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage: "Access to quiet space",
              })}
              documentName="location_assessment.pdf(3MB)"
              actionLinks={[
                {
                  title: intl.formatMessage({ defaultMessage: "View" }),
                  href: "/passport/barriers/solutions/review-solution",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Edit" }),
                  href: "/passport/barriers/solutions/review-solution",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Delete" }),
                  href: "#",
                },
              ]}
              situations={[
                intl.formatMessage({
                  defaultMessage: "Office Workplace",
                }),
                intl.formatMessage({
                  defaultMessage: "Remote Workplace",
                }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Review",
                }),
                href: "/passport/barriers/solutions/review-solution",
              }}
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
                  href: "/passport/barriers/solutions/review-solution",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Edit" }),
                  href: "/passport/barriers/solutions/review-solution",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Delete" }),
                  href: "#",
                },
              ]}
              situations={[
                intl.formatMessage({
                  defaultMessage: "Office Workplace",
                }),
                intl.formatMessage({
                  defaultMessage: "Remote Workplace",
                }),
              ]}
              confirmationLink={{
                title: intl.formatMessage({
                  defaultMessage: "Review",
                }),
                href: "/passport/barriers/solutions/review-solution",
              }}
            />
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Current Solutions",
              })}
            </h4>
            <p
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
              data-h2-bg-color="b(lightgray)"
            >
              {intl.formatMessage({
                defaultMessage: "Physical workplace.",
              })}
            </p>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Attempted Solutions",
              })}
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
          <div>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "Editing tools",
              })}
            </h4>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Select the tools on this page to edit the barrier/solution information or identify a new solution for this barrier.",
              })}
            </p>
            <Link href="/passport/barriers/identify-a-barrier">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                data-h2-display="b(block)"
                data-h2-margin="b(bottom, m)"
              >
                {intl.formatMessage({
                  defaultMessage: "Edit my Barrier Information",
                })}
              </a>
            </Link>
            <Link href="/passport/barriers/solutions/identify-a-solution">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                data-h2-display="b(block)"
                data-h2-margin="b(bottom, m)"
              >
                {intl.formatMessage({
                  defaultMessage: "Identify another solution for this barrier",
                })}
              </a>
            </Link>
          </div>
          <div data-h2-margin="b(top-bottom, l)">
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage({
                defaultMessage: "Permissions",
              })}
            </h4>
            <div>
              <p data-h2-margin="b(bottom, xs)">
                {intl.formatMessage(
                  {
                    defaultMessage: "<strong>My manager (can approve)</strong>",
                  },
                  { strong },
                )}
              </p>
              <div
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
                data-h2-align-items="b(center)"
              >
                <p data-h2-margin="b(all, none)">Samira Hana</p>
                <Link href="#">
                  <a>
                    {intl.formatMessage({
                      defaultMessage: "Revoke",
                    })}
                  </a>
                </Link>
              </div>
            </div>
            <p data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "<strong>Others (can view only)</strong>",
                },
                { strong },
              )}
            </p>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p data-h2-margin="b(all, none)">Barnabus Sui</p>
              <Link href="#">
                <a>
                  {intl.formatMessage({
                    defaultMessage: "Revoke",
                  })}
                </a>
              </Link>
            </div>
            <Link href="/passport/share-my-passport">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                data-h2-display="b(block)"
                data-h2-margin="b(top-bottom, m)"
              >
                {intl.formatMessage({
                  defaultMessage: "Share with another person",
                })}
              </a>
            </Link>
          </div>
          <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
            {intl.formatMessage({
              defaultMessage: "History",
            })}
          </h4>
          <p data-h2-margin="b(bottom, none)">
            {intl.formatMessage({
              defaultMessage: "2022/April/03",
            })}
          </p>
          <p data-h2-margin="b(bottom, none)">
            {intl.formatMessage(
              {
                defaultMessage:
                  "You chose <strong>noise-cancelling headphones</strong> as your solution.",
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
          <p data-h2-margin="b(bottom, none)">
            {intl.formatMessage({
              defaultMessage: "You added this barrier to your passport.",
            })}
          </p>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ReviewBarrier;
