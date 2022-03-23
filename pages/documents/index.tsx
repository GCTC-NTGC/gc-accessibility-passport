import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button, { colorMap } from "../../components/Button";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Links from "../../components/Links";
import NewButton from "../../components/NewButton";
import Page, { SectionOne, SectionTwo } from "../../components/Page";
import { Tab, TabSet } from "../../components/tabs";
import useUser from "../../lib/useUser";

const Documents: React.FunctionComponent = () => {
  useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const intl = useIntl();
  const documents = [
    {
      title: intl.formatMessage({ defaultMessage: "Example file #1" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Review" }),
          link: "/documents/view",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share" }),
          link: "/documents/shareform",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Delete" }),
          link: "/documents/edit",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example file #2" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Review" }),
          link: "/documents/view",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share" }),
          link: "/documents/shareform",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Delete" }),
          link: "/documents/edit",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example file #3" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Review" }),
          link: "/documents/view",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share" }),
          link: "/documents/shareform",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Delete" }),
          link: "/documents/edit",
        },
      ],
    },
  ];
  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "My documents and files" })}
      headTitle={intl.formatMessage({
        defaultMessage: "My Documents and Files - GC Accessibility Passport",
      })}
    >
      <Page>
        <SectionOne>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({
              defaultMessage: "Documents I’ve uploaded",
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
                  <NewButton
                    href="/documents/edit"
                    title={intl.formatMessage({
                      defaultMessage:
                        "Click to upload a new file to your passport",
                    })}
                  />
                  <div data-h2-margin="b(top, m)">
                    {documents.map(({ title, buttons }) => (
                      <Card id={title} key={title} title={title}>
                        {buttons.map(({ link, title }) => (
                          <Link href={link} key={title}>
                            <a
                              {...colorMap["white"]["solid"]}
                              data-h2-margin="b(right, s)"
                              data-h2-font-style="b(underline)"
                              data-h2-font-size="b(caption)"
                              data-h2-radius="b(s)"
                              title={title}
                            >
                              {title}
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
                  <NewButton
                    href="/documents/edit"
                    title={intl.formatMessage({
                      defaultMessage:
                        "Click to upload a new file to your passport",
                    })}
                  />
                  <div data-h2-margin="b(top, m)">
                    {documents.map(({ title, buttons }) => (
                      <Card id={title} key={title} title={title}>
                        {buttons.map(({ link, title }) => (
                          <Link href={link} key={title}>
                            <a
                              {...colorMap["white"]["solid"]}
                              data-h2-margin="b(right, s)"
                              data-h2-font-style="b(underline)"
                              data-h2-font-size="b(caption)"
                              data-h2-radius="b(s)"
                              title={title}
                            >
                              {title}
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

export default Documents;
