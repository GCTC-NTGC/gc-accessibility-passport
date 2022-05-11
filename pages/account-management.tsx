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
    push("/passport");
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
      data-h2-width="b(100) m(75) l(50)"
      data-h2-padding="b(all, none)"
    >
      <Page>
        <LeftSection>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="currentEmail"
                name="currentEmail"
                type="email"
                label={intl.formatMessage({ defaultMessage: "Current Email" })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <Input
                id="newEmail"
                name="newEmail"
                type="email"
                label={intl.formatMessage({ defaultMessage: "New email" })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
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
            </form>
          </FormProvider>
        </LeftSection>
        <RightSection>
          <h2 data-h2-margin="b(top, none)" data-h2-font-size="b(h3)">
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
