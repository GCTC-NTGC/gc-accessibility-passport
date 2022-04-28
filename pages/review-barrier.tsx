import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../components/Button";
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
        defaultMessage:
          "Review or edit your barrier: Concentration in a noisy workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Review or edit your barrier: Concentration in a noisy workplace",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <Page>
          <LeftSection>
            <div data-h2-margin="b(bottom, l)">
              <p data-h2-padding="b(all, s)" data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage:
                    "Below you will find a summary of your barrier and the solutions you have identified. Select the view or edit links within each interactive solution module to view or modify its details. Select the delete link within each module to remove a solution from your passport.",
                })}
              </p>
              <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
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
              <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
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
              <section
                data-h2-border="b(lightgray, all, solid, s)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h6)"
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
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Edit",
                        })}
                      </Link>
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Delete",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-margin="b(left, s)"
                      data-h2-bg-color="b(lightgray)"
                    >
                      {intl.formatMessage({
                        defaultMessage:
                          "This solution is awaiting confirmation from your manager.",
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

                <p data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage: " - Noisy Workplace",
                  })}
                </p>
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
                data-h2-border="b(lightgray, all, solid, s)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h6)"
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
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Edit",
                        })}
                      </Link>
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Delete",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-margin="b(left, s)"
                      data-h2-bg-color="b(lightgray)"
                    >
                      {intl.formatMessage({
                        defaultMessage:
                          "This solution is awaiting confirmation from your manager.",
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

                <p data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage: " - Noisy Workplace",
                  })}
                </p>
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
                data-h2-border="b(lightgray, all, solid, s)"
                data-h2-margin="b(all, s)"
                data-h2-shadow="b(m)"
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 7 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-font-size="b(h6)"
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
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Edit",
                        })}
                      </Link>
                    </p>
                  </div>
                  <div style={{ flex: 1 }} data-h2-margin="b(right, s)">
                    <p>
                      {" "}
                      <Link href={""}>
                        {intl.formatMessage({
                          defaultMessage: "Delete",
                        })}
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <div style={{ flex: 4 }} data-h2-margin="b(right, l)">
                    <p
                      data-h2-margin="b(left, s)"
                      data-h2-bg-color="b(lightgray)"
                    >
                      {intl.formatMessage({
                        defaultMessage:
                          "This solution is awaiting confirmation from your manager.",
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

                <p data-h2-margin="b(left, s)">
                  {intl.formatMessage({
                    defaultMessage: " - Noisy Workplace",
                  })}
                </p>
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
              <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
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
              <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
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
            <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
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
            <div data-h2-margin="b(bottom, m)">
              <Button
                type="submit"
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Edit this barrier's information",
                })}
              </Button>
            </div>
            <div>
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
            <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Permissions",
                },
                { bold },
              )}
            </h4>
            <p data-h2-font-size="b(h5)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "My manager(can approve)",
                },
                { bold },
              )}
            </p>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
            >
              <div style={{ flex: 4 }}>
                <p data-h2-margin="b(bottom, none)">
                  {intl.formatMessage({
                    defaultMessage: "Jennifer Rotterdam",
                  })}
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p>
                  {" "}
                  <Link href={""}>
                    {intl.formatMessage({
                      defaultMessage: "Revoke",
                    })}
                  </Link>
                </p>
              </div>
            </div>
            <p data-h2-font-size="b(h5)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Others(can view only)",
                },
                { bold },
              )}
            </p>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
            >
              <div style={{ flex: 4 }}>
                <p data-h2-margin="b(bottom, none)">
                  {intl.formatMessage({
                    defaultMessage: "Barnabus Sui",
                  })}
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p>
                  {" "}
                  <Link href={""}>
                    {intl.formatMessage({
                      defaultMessage: "Revoke",
                    })}
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Share with someone new",
                })}
              </Button>
            </div>
            <h4 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, none)">
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
                  "You proposed noise cancelling headphones as a solution to this barrier.",
              })}
            </p>
          </RightSection>
        </Page>
      </div>
    </Layout>
  );
};

export default ReviewBarrier;
