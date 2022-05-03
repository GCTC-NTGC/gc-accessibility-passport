import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { PaperClipIcon } from "@heroicons/react/solid";

const BarrierCard: React.FunctionComponent<{
  title: string;
  documentName: string;
}> = ({ title, documentName }) => {
  const intl = useIntl();
  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <section
      data-h2-border="b(darkgray, left, solid, m)"
      data-h2-margin="b(top, s)"
      data-h2-shadow="b(m)"
      data-h2-padding="b(all, m)"
    >
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(space-between)"
        data-h2-margin="b(bottom, s)"
      >
        <p
          data-h2-font-size="b(h5)"
          data-h2-margin="b(all, none) b(right, m)"
          data-h2-font-style="b(underline)"
        >
          {title}
        </p>
        <div>
          <Link href="#">
            <a data-h2-margin="b(right, s)">
              {intl.formatMessage({
                defaultMessage: "View",
              })}
            </a>
          </Link>

          <Link href="#">
            <a data-h2-margin="b(right, s)">
              {intl.formatMessage({
                defaultMessage: "Edit",
              })}
            </a>
          </Link>

          <Link href="#">
            <a>
              {intl.formatMessage({
                defaultMessage: "Delete",
              })}
            </a>
          </Link>
        </div>
      </div>
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(space-between)"
        data-h2-align-items="b(center)"
        data-h2-bg-color="b(lightblue)"
      >
        <p data-h2-margin="b(left, s) b(right, m)">
          {intl.formatMessage({
            defaultMessage:
              "This solution is awaiting confirmation from your manager.",
          })}
        </p>
        <p data-h2-margin="b(right, s)">
          <Link href="#">
            <a>
              {intl.formatMessage({
                defaultMessage: "Review",
              })}
            </a>
          </Link>
        </p>
      </div>
      <p data-h2-margin="b(bottom, none)">
        {intl.formatMessage({
          defaultMessage:
            "This solution applies to me in following situations:",
        })}
      </p>
      <ul data-h2-margin="b(bottom-left, m)" style={{ listStyleType: "disc" }}>
        <li>
          <p data-h2-margin="b(all, none)">
            {intl.formatMessage({
              defaultMessage: "Office Workplace",
            })}
          </p>
        </li>
        <li>
          <p data-h2-margin="b(all, none)">
            {intl.formatMessage({
              defaultMessage: "Remote Workplace",
            })}
          </p>
        </li>
      </ul>
      <div>
        <p>
          {intl.formatMessage(
            {
              defaultMessage:
                "{title} is particularly helpful for me because...",
            },
            { title },
          )}
        </p>
        <div data-h2-display="b(flex)">
          <span data-h2-margin="b(right, xs)" data-h2-display="b(flex)">
            <PaperClipIcon style={{ width: "1.2rem" }} />
          </span>
          <Link data-h2-margin="b(left, s)" href="#">
            <a>{documentName}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ReviewBarrier: React.FunctionComponent = () => {
  const intl = useIntl();

  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage:
          "Review or edit your barrier: Concentration in a noisy workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Review or edit your barrier: Concentration in a noisy workplace",
      })}
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
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage: "Access to quiet space",
              })}
              documentName={intl.formatMessage({
                defaultMessage: "location_assessment.pdf(3MB)",
              })}
            />
            <BarrierCard
              title={intl.formatMessage({
                defaultMessage:
                  "Organizer / task planning tool/software application",
              })}
              documentName={intl.formatMessage({
                defaultMessage: "software_assessment.pdf(3MB)",
              })}
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

            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, m)"
            >
              {intl.formatMessage({
                defaultMessage: "Edit this barrier's information",
              })}
            </Button>
            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Identify an additional solution for this barrier",
              })}
            </Button>
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
            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
              data-h2-margin="b(top, m)"
            >
              {intl.formatMessage({
                defaultMessage: "Share with someone new",
              })}
            </Button>
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
