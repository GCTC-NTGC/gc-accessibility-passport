import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import Layout from "../components/Layout";
import useBarriers from "../lib/useBarriers";
import useUser from "../lib/useUser";

const HomePage: React.FunctionComponent = () => {
  const { user } = useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const { barriers = [] } = useBarriers();
  const intl = useIntl();
  const tools = [
    {
      title: intl.formatMessage({ defaultMessage: "My barriers" }),
      link: "",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Share my barriers" }),
      link: "",
    },
    {
      title: intl.formatMessage({
        defaultMessage: "Review barriers shared with me",
      }),
      link: "",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Download my passport" }),
      link: "",
    },
  ];
  return (
    <Layout>
      <section
        data-h2-display="b(flex)"
        data-h2-flex-direction="b(column) s(row)"
        data-h2-padding="b(top-bottom, xl)"
      >
        <div
          data-h2-padding="b(right-left, l) b(top-bottom, none)"
          data-h2-border="s(black, right, solid, s)"
          style={{ flex: 3 }}
        >
          <div>
            <h2 data-h2-margin="b(all, none)">
              {intl.formatMessage({ defaultMessage: "Tools" })}
            </h2>
            <div data-h2-display="b(flex)" data-h2-flex-wrap="b(wrap)">
              {tools.map(({ title, link }) => (
                <Link key={title} href={link}>
                  <a title={title} data-h2-margin="b(top, s) b(right, s)">
                    <Button
                      color="secondary"
                      mode="solid"
                      data-h2-font-style="b(underline)"
                    >
                      {title}
                    </Button>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div data-h2-display="b(flex)" data-h2-flex-direction="b(column)">
            <h2>{intl.formatMessage({ defaultMessage: "My barriers" })}</h2>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Below you can check and manage any of the barriers you’ve added to your passport. Clicking on a barrier will take you to a detailed page that showcases your solutions to that barrier, as well as its history over the course of your passport’s lifetime. You can also learn more about what constitutes a barrier.",
              })}
            </p>
            <Button
              color="secondary"
              mode="outline"
              data-h2-border="b(lightblue, all, dashed, s)"
              data-h2-margin="b(bottom, s)"
              data-h2-font-style="b(underline)"
            >
              {intl.formatMessage({
                defaultMessage: "Click to add a new barrier to your profile",
              })}
            </Button>
            {barriers.map(({ id, title, updates }) => (
              <div
                key={id}
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
                data-h2-align-items="b(center)"
                data-h2-shadow="b(m)"
                data-h2-radius="b(s)"
                data-h2-padding="b(top-bottom, xs) b(right-left, xxs)"
                data-h2-margin="b(bottom, m)"
              >
                <p data-h2-margin="b(all, s)">{title}</p>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                  data-h2-align-items="b(center)"
                >
                  <p data-h2-margin="b(all, s)">
                    {intl.formatMessage(
                      { defaultMessage: "{updates} updates" },
                      { updates },
                    )}
                  </p>
                  <Link href={`/barrier/{id}`}>
                    <a data-h2-margin="b(right, s)">
                      {intl.formatMessage({ defaultMessage: "Check details" })}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-h2-padding="b(right-left, l) b(top-bottom, none)"
          style={{ flex: 2 }}
        >
          <div data-h2-display="b(flex)" data-h2-flex-direction="b(column)">
            <div
              data-h2-display="b(flex)"
              data-h2-align-items="b(center)"
              data-h2-justify-content="b(space-between)"
            >
              <h3 data-h2-margin="b(all, none) b(right, s)">
                {intl.formatMessage({ defaultMessage: "Notifications" })}
              </h3>
              <Link href={`/notifications`}>
                <a data-h2->
                  {intl.formatMessage({
                    defaultMessage: "View all notifications",
                  })}
                </a>
              </Link>
            </div>
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                data-h2-display="b(flex)"
                data-h2-flex-direction="b(column)"
                data-h2-border="b(black, bottom, solid, s)"
              >
                <p>date</p>
                <p>replace with notification</p>
                <Button
                  color="white"
                  mode="inline"
                  data-h2-font-color="b(black)"
                  data-h2-font-style="b(underline)"
                  data-h2-font-size="b(caption)"
                  data-h2-text-align="b(right)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Mark as read",
                  })}
                </Button>
              </div>
            ))}
            <Button
              color="secondary"
              mode="outline"
              data-h2-margin="b(top, m)"
              data-h2-font-style="b(underline)"
            >
              {intl.formatMessage({
                defaultMessage: "Mark all as read",
              })}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
