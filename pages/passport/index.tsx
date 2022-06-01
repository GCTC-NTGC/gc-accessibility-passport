import { PaperClipIcon } from "@heroicons/react/outline";
import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { colorMap } from "../../components/Button";
import Layout from "../../components/Layout";
import Page, { LeftSection, RightSection } from "../../components/Page";
import { PassportCard } from "../../components/PassportCard";

const Passport: React.FunctionComponent = () => {
  const intl = useIntl();
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Welcome to your passport, Frank",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "My Passport - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "My passport",
            description: "Breadcrumb title.",
          }),
        },
      ]}
    >
      <Page>
        <LeftSection>
          <div>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Below is a summary of your GC Workplace Accessibility Passport. Select the links below to:",
              })}
            </p>
            <ul
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage:
                      "Review and edit the barriers and solutions you have identified. ",
                  })}
                </p>
              </li>
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Share your passport information, or",
                  })}
                </p>
              </li>
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Manage access permissions",
                  })}
                </p>
              </li>
            </ul>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              style={{ gap: "1rem" }}
            >
              <Link href="/passport/barriers/identify-a-barrier">
                <a
                  {...colorMap.blue.solid}
                  data-h2-padding="b(all, s)"
                  data-h2-width="b(100)"
                  data-h2-display="b(flex)"
                  data-h2-align-items="b(center)"
                  data-h2-text-align="b(center)"
                  data-h2-radius="b(s)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Identify a new barrier",
                  })}
                </a>
              </Link>
              <Link href="/passport/share-my-passport">
                <a
                  {...colorMap.blue.solid}
                  data-h2-padding="b(all, s)"
                  data-h2-width="b(100)"
                  data-h2-display="b(flex)"
                  data-h2-align-items="b(center)"
                  data-h2-text-align="b(center)"
                  data-h2-radius="b(s)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Share my passport information",
                  })}
                </a>
              </Link>
              <Link href="/passport/manage-permissions">
                <a
                  {...colorMap.blue.solid}
                  data-h2-padding="b(all, s)"
                  data-h2-width="b(100)"
                  data-h2-display="b(flex)"
                  data-h2-align-items="b(center)"
                  data-h2-text-align="b(center)"
                  data-h2-radius="b(s)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Manage permissions",
                  })}
                </a>
              </Link>
            </div>
          </div>
          <div data-h2-margin="b(top, xl)">
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Below are your Barriers listed under two categories: Barriers with implemented solutions; Barriers with solutions in discussion or implementation. Select the view links within each barrier module to see its full information.",
              })}
            </p>
            <div>
              <h2 data-h2-font-size="b(h3)" data-h2-margin="b(top, none)">
                {intl.formatMessage({
                  defaultMessage: "Solutions in place",
                })}
              </h2>
              <PassportCard
                title="Noise in the workplace"
                link={{
                  title: intl.formatMessage({
                    defaultMessage: "View",
                  }),
                  href: "/passport/barriers/review-barrier",
                }}
              />
            </div>
            <div>
              <h2 data-h2-font-size="b(h3)" data-h2-margin="b(top, m)">
                {intl.formatMessage({
                  defaultMessage: "Solutions in progress",
                })}
              </h2>
              <p data-h2-padding="b(all, s)" data-h2-bg-color="b(lightgray)">
                {intl.formatMessage({
                  defaultMessage: "No solutions in progress.",
                })}
              </p>
            </div>
          </div>
          <div data-h2-margin="b(top, xl)">
            <h2 data-h2-font-size="b(h3)" data-h2-margin="b(top, m)">
              {intl.formatMessage({
                defaultMessage: "Emergency Information and Manager Details",
              })}
            </h2>
            <div data-h2-display="b(flex)">
              <div style={{ flex: "1" }} data-h2-margin="b(right, l)">
                <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
                  {intl.formatMessage({
                    defaultMessage: "Your emergency information",
                  })}
                </h2>
                <p
                  data-h2-margin="b(bottom, none)"
                  data-h2-font-weight="b(700)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Critical Information",
                  })}
                </p>
                <p data-h2-margin="b(top, none)">
                  {intl.formatMessage({
                    defaultMessage: "In the event of an emergency...",
                  })}
                </p>
                <p
                  data-h2-margin="b(bottom, none)"
                  data-h2-font-weight="b(700)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Emergency Contact",
                  })}
                </p>
                <p data-h2-margin="b(top-bottom, none)">Gal Turot</p>
                <p data-h2-margin="b(top, none)">(555)555-5555</p>
                <div>
                  <p
                    data-h2-margin="b(bottom, none)"
                    data-h2-font-weight="b(700)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "Emergency documentation",
                    })}
                  </p>
                  <div
                    data-h2-margin="b(top-bottom, s)"
                    data-h2-display="b(flex)"
                  >
                    <span
                      data-h2-display="b(flex)"
                      data-h2-margin="b(right, xs)"
                    >
                      <PaperClipIcon style={{ width: "1.2rem" }} />
                    </span>
                    <Link href="#">
                      <a>my_evacuation_plan.pdf(3MB)</a>
                    </Link>
                  </div>
                  <div data-h2-margin="b(bottom, m)" data-h2-display="b(flex)">
                    <span
                      data-h2-display="b(flex)"
                      data-h2-margin="b(right, xs)"
                    >
                      <PaperClipIcon style={{ width: "1.2rem" }} />
                    </span>
                    <Link href="#">
                      <a>my_paramedical_needs.pdf(3MB)</a>
                    </Link>
                  </div>
                </div>
                <Link href="#">
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
                      defaultMessage: "Edit emergency info",
                    })}
                  </a>
                </Link>
              </div>
              <div style={{ flex: "1" }}>
                <h2 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
                  {intl.formatMessage({
                    defaultMessage: "Your manager information",
                  })}
                </h2>
                <p
                  data-h2-margin="b(bottom, none)"
                  data-h2-font-weight="b(700)"
                >
                  Alasie Sikku
                </p>
                <p data-h2-margin="b(top-bottom, none)">
                  alasie.sikku@example.gov.ca
                </p>
                <p data-h2-margin="b(top, none)">
                  {intl.formatMessage({
                    defaultMessage: "Treasury Board of Canada Secretariat",
                  })}
                </p>
                <Link href="/passport/manager-info">
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
                      defaultMessage: "Edit manager info",
                    })}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </LeftSection>
        <RightSection>
          <div>
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "Resources",
              })}
            </h4>
            <ul
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Example resource #1",
                  })}
                </p>
              </li>
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Example resource #2",
                  })}
                </p>
              </li>
              <li>
                <p data-h2-margin="b(all, none)">
                  {intl.formatMessage({
                    defaultMessage: "Example resource #3",
                  })}
                </p>
              </li>
            </ul>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage: "Contact a Case Manager/DTA Officer",
              })}
            </h2>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to contact a workplace accommodation professional in your organization.",
              })}
            </p>
            <Link href="#">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-display="b(block)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                data-h2-margin="b(bottom, m)"
              >
                {intl.formatMessage({
                  defaultMessage: "Get in touch",
                })}
              </a>
            </Link>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(all, none)">
              {intl.formatMessage({
                defaultMessage:
                  "Contact the Accessibility, Accommodation and Adaptive Computer Technology (AAACT) Team",
              })}
            </h2>
            <p data-h2-margin="b(bottom, m)">
              {intl.formatMessage({
                defaultMessage:
                  "Activate the link to contact the AAACT team for an information session or an assessment.",
              })}
            </p>
            <Link href="https://www.canada.ca/en/shared-services/corporate/aaact-program.html">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-display="b(block)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({
                  defaultMessage: "Contact the AAACT",
                })}
              </a>
            </Link>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default Passport;
