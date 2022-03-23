import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Links from "../../components/Links";
import Page, { SectionOne, SectionTwo } from "../../components/Page";
import { Tab, TabSet } from "../../components/tabs";

interface SituationsProps {}

const Situations: React.FunctionComponent<SituationsProps> = (props) => {
  const intl = useIntl();
  const situations = [
    {
      title: intl.formatMessage({ defaultMessage: "Example situation #1" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "View" }),
          link: "/situation/1",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share" }),
          link: "/share/id",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Edit" }),
          link: "/edit/id",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example situation #2" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "View" }),
          link: "/view/id",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share" }),
          link: "/share/id",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Edit" }),
          link: "/edit/id",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example situation #3" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "View" }),
          link: "/view/id",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share" }),
          link: "/share/id",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Edit" }),
          link: "/edit/id",
        },
      ],
    },
  ];
  return (
    <Layout title={intl.formatMessage({ defaultMessage: "My situations" })}>
      <Page>
        <SectionOne>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({
              defaultMessage: "Situations in my passport",
            })}
          </h2>
          <div data-h2-margin="b(top, m)">
            <TabSet>
              <Tab
                tabType="label"
                text={intl.formatMessage({ defaultMessage: "Sort By:" })}
                data-h2-padding="b(all, none)"
              />
              <Tab
                text={intl.formatMessage({ defaultMessage: "Alphabetical" })}
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-flex-direction="b(column)"
                >
                  <Button
                    color="lightblue"
                    mode="solid"
                    data-h2-padding="b(top-bottom, s) b(right-left, l)"
                    data-h2-font-style="b(underline)"
                    data-h2-border="b(darkblue, all, dashed, s)"
                  >
                    {intl.formatMessage({
                      defaultMessage:
                        "Click to add a new situation to your profile",
                    })}
                  </Button>
                  <div data-h2-margin="b(top, m)">
                    {situations.map(({ title, buttons }) => (
                      <Card id={title} key={title} title={title}>
                        {buttons.map(({ link, title }) => (
                          <Link href={link} key={title}>
                            <a title={title}>
                              <Button
                                color="white"
                                mode="solid"
                                data-h2-margin="b(right, s)"
                                data-h2-font-style="b(underline)"
                                data-h2-font-size="b(caption)"
                              >
                                {title}
                              </Button>
                            </a>
                          </Link>
                        ))}
                      </Card>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab
                text={intl.formatMessage({ defaultMessage: "Date created" })}
              >
                <div
                  data-h2-display="b(flex)"
                  data-h2-flex-direction="b(column)"
                >
                  <Button
                    color="lightblue"
                    mode="solid"
                    data-h2-padding="b(top-bottom, s) b(right-left, l)"
                    data-h2-font-style="b(underline)"
                    data-h2-border="b(darkblue, all, dashed, s)"
                  >
                    {intl.formatMessage({
                      defaultMessage:
                        "Click to add a new situation to your profile",
                    })}
                  </Button>
                  <div data-h2-margin="b(top, m)">
                    {situations.map(({ title, buttons }) => (
                      <Card id={title} key={title} title={title}>
                        {buttons.map(({ link, title }) => (
                          <Link href={link} key={title}>
                            <a title={title}>
                              <Button
                                color="white"
                                mode="solid"
                                data-h2-margin="b(right, s)"
                                data-h2-font-style="b(underline)"
                                data-h2-font-size="b(caption)"
                              >
                                {title}
                              </Button>
                            </a>
                          </Link>
                        ))}
                      </Card>
                    ))}
                  </div>
                </div>
              </Tab>
            </TabSet>
          </div>
        </SectionOne>
        <SectionTwo>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({ defaultMessage: "Resources and links" })}
          </h2>
          <div data-h2-margin="b(top, m)">
            <Links />
          </div>
        </SectionTwo>
      </Page>
    </Layout>
  );
};

export default Situations;
