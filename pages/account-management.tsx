import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { colorMap } from "../components/Button";
import { Input, Submit } from "../components/formComponents";
import Layout from "../components/Layout";
import Page, { LeftSection, RightSection } from "../components/Page";
import { errorMessages } from "../messages";

type FormValues = {
  currentEmail: string;
  newEmail: string;
  password: string;
};

const AccountManagement: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async () => {
    push("/passport"); // TODO: should return to manager dashboard if user is manager.
  };

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Manage your account",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Manage your account - GC Workplace Accessibility Passport",
      })}
      data-h2-width="b(100) l(75)"
      data-h2-padding="b(all, none)"
      crumbs={[{ title: "My passport" }, { title: "Manage your account" }]}
    >
      <Page>
        <LeftSection>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "This page allows you to manage basic account information such as your email address, password, and data.",
                })}
              </p>
              <p>
                {intl.formatMessage({
                  defaultMessage: "Your account was created on: 2021-05-06",
                })}
              </p>
              <div data-h2-margin="b(top, l)">
                <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
                  {intl.formatMessage({
                    defaultMessage: "Update my email",
                  })}
                </h2>
                <div data-h2-display="b(flex)">
                  <div style={{ flex: 1 }} data-h2-padding="b(right, m)">
                    <Input
                      id="currentEmail"
                      name="currentEmail"
                      type="email"
                      label={intl.formatMessage({
                        defaultMessage: "Current Email",
                      })}
                      rules={{
                        required: intl.formatMessage(errorMessages.required),
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Input
                      id="newEmail"
                      name="newEmail"
                      type="email"
                      label={intl.formatMessage({
                        defaultMessage: "New email",
                      })}
                      rules={{
                        required: intl.formatMessage(errorMessages.required),
                      }}
                    />
                  </div>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  label={intl.formatMessage({ defaultMessage: "Password" })}
                  rules={{
                    required: intl.formatMessage(errorMessages.required),
                  }}
                />
                <div style={{ float: "right" }}>
                  <Submit
                    data-h2-padding="b(top-bottom, s) b(right-left, m)"
                    data-h2-margin="b(top, s)"
                    data-h2-font-style="b(underline)"
                    text={intl.formatMessage({
                      defaultMessage: "Submit email change",
                    })}
                  />
                </div>
              </div>
            </form>
          </FormProvider>
        </LeftSection>
        <RightSection>
          <h2 data-h2-margin="b(top, none)" data-h2-font-size="b(h4)">
            {intl.formatMessage({ defaultMessage: "Account Tools" })}
          </h2>

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
                defaultMessage: "Reset my password",
              })}
            </a>
          </Link>
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
                defaultMessage: "Download my data",
              })}
            </a>
          </Link>
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
                defaultMessage: "Delete my account",
              })}
            </a>
          </Link>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default AccountManagement;
