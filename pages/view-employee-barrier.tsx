import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { PaperClipIcon } from "@heroicons/react/solid";

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
              <section
                data-h2-border="b(darkgray, left, solid, m)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h5)"
                      data-h2-margin="b(left, s)"
                      data-h2-font-style="b(underline)"
                    >
                      {intl.formatMessage(
                        {
                          defaultMessage: "Noise cancelling headphones",
                        },
                        { bold },
                      )}
                    </p>
                  </div>

                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "View",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                  data-h2-bg-color="b(lightblue)"
                  data-h2-margin="b(all, s)"
                >
                  <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage:
                          "This solution is awaiting your approval.",
                      })}
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(left, l)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Take action",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <p data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage:
                      "This solution applies to me in following situations:",
                  })}
                </p>

                <ul>
                  <li>
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage: " - Office Workplace",
                      })}
                    </p>
                  </li>
                  <li>
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage: " - Remote Workplace",
                      })}
                    </p>
                  </li>
                </ul>
                <p data-h2-margin="b(left, none)" data-h2-padding="b(all, s)">
                  {intl.formatMessage({
                    defaultMessage:
                      " Noise cancelling headphones is particularly helpful for me because",
                  })}
                  <p>
                    <PaperClipIcon style={{ width: "1.2rem" }}> </PaperClipIcon>
                    <Link data-h2-margin="b(left, s)" href={""}>
                      {intl.formatMessage({
                        defaultMessage: "my_hearing_assessment.pdf(3MB)",
                      })}
                    </Link>
                  </p>
                </p>
              </section>{" "}
              <section
                data-h2-border="b(darkgray, left, solid, m)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h5)"
                      data-h2-margin="b(left, s)"
                      data-h2-font-style="b(underline)"
                    >
                      {intl.formatMessage(
                        {
                          defaultMessage: "Access to quiet space",
                        },
                        { bold },
                      )}
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "View",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                  data-h2-bg-color="b(lightblue)"
                  data-h2-margin="b(all, s)"
                >
                  <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage:
                          "This solution is awaiting your approval.",
                      })}
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(left, l)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Review",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <p data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage:
                      "This solution applies to me in following situations:",
                  })}
                </p>
                <ul>
                  <li>
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage: " - Office Workplace",
                      })}
                    </p>
                  </li>
                  <li>
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage: " - Remote Workplace",
                      })}
                    </p>
                  </li>
                </ul>
                <p data-h2-margin="b(left, none)" data-h2-padding="b(all, s)">
                  {intl.formatMessage({
                    defaultMessage:
                      " Access to quiet space is particularly helpful for me because",
                  })}
                  <p>
                    <PaperClipIcon style={{ width: "1.2rem" }}> </PaperClipIcon>
                    <Link data-h2-margin="b(left, s)" href={""}>
                      {intl.formatMessage({
                        defaultMessage: "location_assessment.pdf(3MB)",
                      })}
                    </Link>
                  </p>
                </p>
              </section>{" "}
              <section
                data-h2-border="b(darkgray, left, solid, m)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h5)"
                      data-h2-margin="b(left, s)"
                      data-h2-font-style="b(underline)"
                    >
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "Organizer / task planning tool/software application",
                        },
                        { bold },
                      )}
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "View",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                  data-h2-bg-color="b(lightblue)"
                  data-h2-margin="b(all, s)"
                >
                  <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage:
                          "This solution is awaiting your approval.",
                      })}
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(left, l)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Review",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <p data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage:
                      "This solution applies to me in following situations:",
                  })}
                </p>

                <ul>
                  <li>
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage: " - Office Workplace",
                      })}
                    </p>
                  </li>
                  <li>
                    <p data-h2-margin="b(left, s)">
                      {intl.formatMessage({
                        defaultMessage: " - Remote Workplace",
                      })}
                    </p>
                  </li>
                </ul>
                <p data-h2-margin="b(left, none)" data-h2-padding="b(all, s)">
                  {intl.formatMessage({
                    defaultMessage:
                      " Organizer / task planning tool/software application is particularly helpful for me because",
                  })}
                  <p>
                    <PaperClipIcon style={{ width: "1.2rem" }}> </PaperClipIcon>
                    <Link data-h2-margin="b(left, s)" href={""}>
                      {intl.formatMessage({
                        defaultMessage: "software_assessment.pdf(3MB)",
                      })}
                    </Link>
                  </p>
                </p>
              </section>{" "}
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
