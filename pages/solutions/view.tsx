import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ClockIcon, ShareIcon } from "@heroicons/react/solid";
import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Page, { SectionOne, SectionTwo } from "../../components/Page";
import useUser from "../../lib/useUser";

const Solution: React.FunctionComponent = () => {
  useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });
  const intl = useIntl();
  const linkedBarriers = [
    {
      title: intl.formatMessage({ defaultMessage: "Example barriers #1" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "View" }),
          link: "/barriers/view",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Unlink" }),
          link: "",
        },
      ],
    },
  ];
  const linkedSituations = [
    {
      title: intl.formatMessage({ defaultMessage: "Example situations #1" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "View" }),
          link: "/situations/view",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Unlink" }),
          link: "",
        },
      ],
    },
  ];
  const linkedDocuments = [
    {
      title: intl.formatMessage({ defaultMessage: "Example documents #1" }),
      buttons: [
        {
          title: intl.formatMessage({ defaultMessage: "Review" }),
          link: "/documents/view",
        },
        {
          title: intl.formatMessage({ defaultMessage: "Unlink" }),
          link: "",
        },
      ],
    },
  ];

  const history = [
    {
      date: new Date().toISOString().slice(0, 10),
      message: intl.formatMessage({
        defaultMessage:
          "You linked “Example situation #1” and “Example barrier #1” to this solution.",
      }),
    },
    {
      date: new Date().toISOString().slice(0, 10),
      message: intl.formatMessage({
        defaultMessage: "You created this solution.",
      }),
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Example solution #1" })}
      editButton={{
        title: intl.formatMessage({ defaultMessage: "Edit this solution" }),
        link: "edit",
      }}
    >
      <Page>
        <SectionOne>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({
              defaultMessage: "Description",
            })}
          </h2>
          <p>
            {intl.formatMessage({
              defaultMessage:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque sit amet tristique dignissim, tellus nisi malesuada lacus, et faucibus dui eros ac nisl. Nullam eget scelerisque risus. Suspendisse rhoncus sapien eu orci gravida, vel dapibus dui fringilla. Nam viverra nunc ante, ut lobortis ante pretium vel.",
            })}
          </p>
          <div>
            <h2
              data-h2-margin="b(all, none) b(top-bottom, m)"
              data-h2-font-size="b(h3)"
            >
              {intl.formatMessage({
                defaultMessage: "Status",
              })}
            </h2>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p data-h2-font-weight="b(600)">
                {intl.formatMessage({
                  defaultMessage: "This solution has been proposed",
                })}
              </p>
              <Button
                color="blue"
                mode="solid"
                data-h2-padding="b(top-bottom, s) b(right-left, m)"
                data-h2-font-style="b(underline)"
              >
                {intl.formatMessage({
                  defaultMessage: "Request manager approval",
                })}
              </Button>
            </div>
          </div>
          <div>
            <div data-h2-margin="b(top, xl)">
              {linkedBarriers.map(({ title, buttons }) => (
                <>
                  <h2
                    data-h2-margin="b(all, none) b(bottom, s)"
                    data-h2-font-size="b(h3)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "Linked situations",
                    })}
                  </h2>
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
                </>
              ))}
            </div>
            <div data-h2-margin="b(top, xl)">
              {linkedSituations.map(({ title, buttons }) => (
                <>
                  <h2
                    data-h2-margin="b(all, none) b(bottom, s)"
                    data-h2-font-size="b(h3)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "Linked situations",
                    })}
                  </h2>
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
                </>
              ))}
            </div>
            <div data-h2-margin="b(top, xl)">
              {linkedDocuments.map(({ title, buttons }) => (
                <>
                  <h2
                    data-h2-margin="b(all, none) b(bottom, s)"
                    data-h2-font-size="b(h3)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "Linked documents",
                    })}
                  </h2>
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
                </>
              ))}
            </div>
          </div>
        </SectionOne>
        <SectionTwo>
          <div data-h2-display="b(flex)" data-h2-flex-direction="b(column)">
            <div data-h2-display="b(flex)" data-h2-align-items="b(center)">
              <ShareIcon style={{ width: "1.25rem" }} />
              <h2
                data-h2-margin="b(all, none)"
                data-h2-padding="b(left, s)"
                data-h2-font-size="b(h5)"
                data-h2-font-weight="b(600)"
              >
                {intl.formatMessage({ defaultMessage: "Permissions" })}
              </h2>
            </div>
            <Alert
              icon={<ExclamationCircleIcon style={{ width: "1.25rem" }} />}
              message={intl.formatMessage({
                defaultMessage:
                  "Please note that by sharing this solution, the recipient can see linked situations, barriers and documents.",
              })}
            />
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p>
                {intl.formatMessage({
                  defaultMessage: "Melissa Sari",
                })}
              </p>
              <Button
                color="white"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-font-size="b(caption)"
              >
                {intl.formatMessage({
                  defaultMessage: "Remove access",
                })}
              </Button>
            </div>
            <Link href="/solutions/share">
              <a
                title={intl.formatMessage({
                  defaultMessage: "Share with someone new",
                })}
              >
                <Button
                  color="blue"
                  mode="solid"
                  data-h2-padding="b(top-bottom, s) b(left-right, s)"
                  data-h2-font-style="b(underline)"
                  data-h2-margin="b(bottom, xl) b(top, m)"
                  block
                >
                  {intl.formatMessage({
                    defaultMessage: "Share with someone new",
                  })}
                </Button>
              </a>
            </Link>

            <div data-h2-display="b(flex)" data-h2-align-items="b(center)">
              <ClockIcon style={{ width: "1.25rem" }} />
              <h2
                data-h2-margin="b(all, none)"
                data-h2-padding="b(left, s)"
                data-h2-font-size="b(h5)"
                data-h2-font-weight="b(600)"
              >
                {intl.formatMessage({ defaultMessage: "History" })}
              </h2>
            </div>
            {history.map(({ date, message }, index) => (
              <div
                key={date}
                data-h2-display="b(flex)"
                data-h2-flex-direction="b(column)"
                {...(index + 1 === history.length
                  ? {}
                  : { "data-h2-border": "b(black, bottom, solid, s)" })}
                data-h2-padding="b(top-bottom, m)"
              >
                <p data-h2-margin="b(all, none)" data-h2-font-size="b(caption)">
                  {date}
                </p>
                <p data-h2-margin="b(all, none)">{message}</p>
              </div>
            ))}
          </div>
        </SectionTwo>
      </Page>
    </Layout>
  );
};

export default Solution;
