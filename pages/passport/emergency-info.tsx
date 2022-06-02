import { PaperClipIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { colorMap } from "../../components/Button";
import { Input, TextArea } from "../../components/formComponents";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";
import Page, { LeftSection, RightSection } from "../../components/Page";
import Button from "../../components/Button";
import { strong } from "../../helpers/format";

type FormValues = {
  currentEmail: string;
  newEmail: string;
  password: string;
};

const EmergencyInfo: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async () => {
    push("/passport");
  };

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Emergency information",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Emergency information - GC Workplace Accessibility Passport",
      })}
      data-h2-width="b(100) l(75)"
      data-h2-padding="b(all, none)"
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "My passport",
            description: "Breadcrumb title.",
          }),
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Emergency information",
            description: "Breadcrumb title.",
          }),
        },
      ]}
    >
      <Page>
        <LeftSection>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "In emergency situations, it is incredibly important that everyone has access to the information they need. This page is an opportunity for you to concisely describe any information that is crucial for your manager or colleagues to know during an emergency.",
                })}
              </p>
              <div data-h2-margin="b(top, l)">
                <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
                  {intl.formatMessage({
                    defaultMessage: "Critical information",
                  })}
                </h2>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Please describe any crucial information required by your manager in order to help you during an emergency.",
                  })}
                </p>
                <TextArea
                  id="description"
                  name="description"
                  label={intl.formatMessage({
                    defaultMessage: "Critical emergency information",
                  })}
                  rows={10}
                />{" "}
              </div>
              <div data-h2-margin="b(top, l)">
                <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
                  {intl.formatMessage({
                    defaultMessage: "Emergency contact",
                  })}
                </h2>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "The individual you indicate below will be contacted in the event of an emergency.",
                  })}
                </p>
                <div data-h2-display="b(block) s(flex)" style={{ gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      label={intl.formatMessage({
                        defaultMessage: "First name",
                      })}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      label={intl.formatMessage({
                        defaultMessage: "Last name",
                      })}
                    />
                  </div>
                </div>
                <Input
                  id="telephone"
                  name="telephone"
                  type="text"
                  label={intl.formatMessage({ defaultMessage: "Telephone" })}
                />
                <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, l)">
                  {intl.formatMessage({
                    defaultMessage: "Emergency documentation and files",
                  })}
                </h2>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "This section allows you to upload relevant documentation to help your manager understand any specific requirements during an emergency.",
                  })}
                </p>
                <p data-h2-font-weight="b(700)">
                  {intl.formatMessage({
                    defaultMessage:
                      "Please ensure you do not upload any medical information.",
                  })}
                </p>
                <label htmlFor="file">
                  {intl.formatMessage({
                    defaultMessage: "Attach supplementary information",
                  })}
                </label>
                <div
                  data-h2-border="b(black, all, solid, s)"
                  data-h2-margin="b(top, s)"
                  data-h2-padding="b(all, m)"
                  data-h2-display="b(flex)"
                >
                  <input type="file" id="file" />
                </div>
                <div
                  data-h2-margin="b(top-bottom, s)"
                  data-h2-display="b(block) s(flex)"
                >
                  <span data-h2-margin="b(right, xs)">
                    <PaperClipIcon style={{ width: "1.2rem" }} />
                  </span>
                  <Link href="#">
                    <a data-h2-margin="b(right, xs)">
                      my_paramedical_needs.pdf (3MB)
                    </a>
                  </Link>
                  <Link href={"#"}>
                    <a
                      data-h2-margin="b(left, auto)"
                      data-h2-display="b(block)"
                    >
                      Remove
                    </a>
                  </Link>
                </div>
                <div
                  data-h2-margin="b(top-bottom, s)"
                  data-h2-display="b(block) s(flex)"
                >
                  <span data-h2-margin="b(right, xs)">
                    <PaperClipIcon style={{ width: "1.2rem" }} />
                  </span>
                  <Link href="#">
                    <a data-h2-margin="b(right, xs)">
                      my_evacuation_plan.pdf (3MB)
                    </a>
                  </Link>
                  <Link href={"#"}>
                    <a
                      data-h2-margin="b(left, auto)"
                      data-h2-display="b(block)"
                    >
                      Remove
                    </a>
                  </Link>
                </div>
              </div>
              <div data-h2-margin="b(top, m)">
                <FormFooter
                  cancelButton={{
                    href: "/passport",
                  }}
                >
                  <Button
                    type="submit"
                    color="blue"
                    mode="solid"
                    data-h2-font-style="b(underline)"
                    data-h2-padding="b(all, s)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "Save my emergency information",
                    })}
                  </Button>
                </FormFooter>
              </div>
            </form>
          </FormProvider>
        </LeftSection>
        <RightSection>
          <div data-h2-margin="b(top-bottom, l)">
            <h4 data-h2-font-size="b(h4)" data-h2-margin="b(bottom, none)">
              {intl.formatMessage(
                {
                  defaultMessage: "Permissions",
                },
                { strong },
              )}
            </h4>
            <div>
              <p data-h2-margin="b(bottom, xs)">
                {intl.formatMessage(
                  {
                    defaultMessage: "<strong>My manager (can approve)</strong>",
                  },
                  { strong },
                )}
              </p>
              <div
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
                data-h2-align-items="b(center)"
              >
                <p data-h2-margin="b(all, none)">Samira Hana</p>
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
                  defaultMessage: "<strong>Others (can view only)</strong>",
                },
                { strong },
              )}
            </p>
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p data-h2-margin="b(all, none)">Barnabus Sui</p>
              <Link href="#">
                <a>
                  {intl.formatMessage({
                    defaultMessage: "Revoke",
                  })}
                </a>
              </Link>
            </div>
            <Link href="/passport/share-my-passport">
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
        </RightSection>
      </Page>
    </Layout>
  );
};

export default EmergencyInfo;
