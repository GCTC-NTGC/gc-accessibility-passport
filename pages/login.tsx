import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Input, Submit } from "../components/formComponents";
import Layout from "../components/Layout";
import Page from "../components/Page";
import fetchJson, { FetchError } from "../lib/fetchJson";
import useUser from "../lib/useUser";
import { errorMessages } from "../messages";

type FormValues = {
  name: string;
};

const Login: React.FunctionComponent = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/passport",
    redirectIfFound: true,
  });
  const intl = useIntl();

  const [errorMsg, setErrorMsg] = useState("");
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const body = {
      name: data.name,
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
        defaultMessage: "Login",
        description: "Heading for login page.",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Login - GC Accessibility Passport",
      })}
    >
      <Page
        data-h2-justify-content="b(center)"
        data-h2-flex-direction="b(column)"
      >
        <div data-h2-width="s(50)" style={{ margin: "auto" }}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="name"
                name="name"
                type="text"
                label={intl.formatMessage({ defaultMessage: "Name" })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <Input
                id="email"
                name="email"
                type="text"
                label={intl.formatMessage({ defaultMessage: "Email" })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <Submit
                data-h2-padding="b(top-bottom, s) b(right-left, m)"
                data-h2-margin="b(top, s)"
                data-h2-font-style="b(underline)"
              />
            </form>
          </FormProvider>
        </div>
      </Page>
    </Layout>
  );
};

export default Login;
