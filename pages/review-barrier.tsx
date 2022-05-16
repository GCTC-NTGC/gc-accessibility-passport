import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { colorMap } from "../components/Button";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { BarrierCard } from "../components/BarrierCard";

const ReviewBarrier: React.FunctionComponent = () => {
  const intl = useIntl();

  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Review or edit your barrier: Noise in the workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Review or edit your barrier: Noise in the workplace - GC Workplace Accessibility Passport",
      })}
      crumbs={[{ title: "My passport" }, { title: "Noise in the workplace" }]}
    >
      <Page>
        <LeftSection>
          <div data-h2-margin="b(bottom, l)">
            <p data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Below you will find a summary of your barrier and the solutions you have identified. Select the view or edit links within each interactive solution module to view or modify its details. Select the delete link within each module to remove a solution from your passport.",
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
                  defaultMessage: "Shared Solutions",
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
                  "The modules below present you with the solutions that you have shared with your manager to view or action. You can select the links in the upper right-hand corner of each solution box to view details, edit its content, or delete it from your Passport.",
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
                  href: "/solutions/view",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Edit" }),
                  href: "/solutions/view",
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
                href: "solutions/view",
              }}
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
                  href: "/solutions/view",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Edit" }),
                  href: "/solutions/view",
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
                href: "solutions/view",
              }}
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
                  href: "/solutions/view",
                },
                {
                  title: intl.formatMessage({ defaultMessage: "Edit" }),
                  href: "/solutions/view",
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
                href: "solutions/view",
              }}
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
                defaultMessage: "Physical workplace.",
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
          <div>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Editing tools",
                },
                { bold },
              )}
            </h4>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Select the tools below to edit the barrier/solution information that appears on this page or identify a new solution for this barrier.",
              })}
            </p>
            <Link href="/barriers/identify-a-barrier">
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
                  defaultMessage: "Edit this barrier's information",
                })}
              </a>
            </Link>
            <Link href="/solutions/identify-a-solution">
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
                  defaultMessage:
                    "Identify an additional solution for this barrier",
                })}
              </a>
            </Link>
          </div>
          <div data-h2-margin="b(top-bottom, l)">
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Permissions",
                },
                { bold },
              )}
            </h4>
            <div>
              <p data-h2-margin="b(bottom, xs)">
                {intl.formatMessage(
                  {
                    defaultMessage: "<bold>My manager (can approve)</bold>",
                  },
                  { bold },
                )}
              </p>
              <div
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
                data-h2-align-items="b(center)"
              >
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Jennifer Rotterdam",
                  })}
                </p>
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
                  defaultMessage: "<bold>Others (can view only)</bold>",
                },
                { bold },
              )}
            </p>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage: "Barnabus Sui",
                })}
              </p>
              <Link href="#">
                <a>
                  {intl.formatMessage({
                    defaultMessage: "Revoke",
                  })}
                </a>
              </Link>
            </div>
            <Link href="/share-my-passport">
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
                  defaultMessage: "Share with someone new",
                })}
              </a>
            </Link>
          </div>
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
            {intl.formatMessage(
              {
                defaultMessage:
                  "You proposed <bold>noise cancelling headphones</bold> as a solution to this barrier.",
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
