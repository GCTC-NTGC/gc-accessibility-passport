import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import { Input } from "../components/formComponents";
import FormFooter from "../components/FormFooter";
import Layout from "../components/Layout";
import fetchJson, { FetchError } from "../lib/fetchJson";
import useUser from "../lib/useUser";
import { errorMessages } from "../messages";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FunctionComponent = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/passport",
    redirectIfFound: true,
  });
  const intl = useIntl();

  const [, setErrorMsg] = useState("");
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async () => {
    const body = {
      name: "Frank", // Replace later with user name
    };

    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Log in to your passport",
        description: "Heading for login page.",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Login - GC Workplace Accessibility Passport",
      })}
      crumbs={[{ title: "Login", href: "/login" }]}
      formLayout
      data-h2-width="b(75) s(50) m(50)"
      data-h2-padding="b(top-bottom, xl) b(right-left, m) m(right-left, xl)"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div data-h2-margin="b(bottom, l)">
            <Input
              id="email"
              name="email"
              type="text"
              label={intl.formatMessage({ defaultMessage: "Email address" })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
            />
            <Input
              id="password"
              name="password"
              type="text"
              label={intl.formatMessage({ defaultMessage: "Password" })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
            />
          </div>
          <FormFooter
            leftSideActions={[
              {
                href: "/register",
                title: intl.formatMessage({
                  defaultMessage: "Register",
                }),
              },
              {
                href: "/#",
                title: intl.formatMessage({
                  defaultMessage: "Reset my password",
                }),
              },
            ]}
          >
            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
            >
              {intl.formatMessage({
                defaultMessage: "Login",
              })}
            </Button>
          </FormFooter>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default Login;
