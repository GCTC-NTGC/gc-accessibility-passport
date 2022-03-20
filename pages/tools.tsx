import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Links from "../components/Links";
import Page, { SectionOne, SectionTwo } from "../components/Page";

interface ToolsProps {}

const Tools: React.FunctionComponent<ToolsProps> = (props) => {
  const intl = useIntl();

  const tools = [
    {
      title: intl.formatMessage({ defaultMessage: "Situations" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Identify a situation" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "View my situations" }),
          link: "/situations",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share my situations" }),
          link: "/",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Barriers" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Identify a barrier" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "View my barriers" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share my barriers" }),
          link: "/",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Solutions" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Identify a solution" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "View my solutions" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share my solutions" }),
          link: "/",
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: "Documents" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Upload a document" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "View my documents" }),
          link: "/",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Share my documents" }),
          link: "/",
        },
      ],
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Welcome back, Jake" })}
    >
      <Page>
        <SectionOne>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({ defaultMessage: "Passport tools" })}
          </h2>
          <div data-h2-display="b(flex)" data-h2-flex-wrap="b(wrap)">
            {tools.map(({ title, buttons }) => (
              <div key={title} data-h2-margin="b(right, m)">
                <h3 data-h2-font-size="b(h4)" data-h2-font-weight="b(600)">
                  {title}
                </h3>
                <div
                  data-h2-display="b(flex)"
                  data-h2-flex-direction="b(column)"
                >
                  {buttons.map(({ title, link }, index) => (
                    <Link href={link} key={title}>
                      <a title={title}>
                        <Button
                          color={index === 0 ? "blue" : "darkblue"}
                          mode="solid"
                          data-h2-padding="b(top-bottom, s) b(right-left, m)"
                          data-h2-margin="b(bottom, xxs)"
                          data-h2-font-style="b(underline)"
                        >
                          {title}
                        </Button>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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

export default Tools;
