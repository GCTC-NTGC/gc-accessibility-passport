import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Input, Submit } from "../components/formComponents";
import Layout from "../components/Layout";
import fetchJson, { FetchError } from "../lib/fetchJson";
import useUser from "../lib/useUser";
import { errorMessages } from "../messages";

type FormValues = {
  username: string;
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
      username: data.username,
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
    >
      <section data-h2-container="b(center, s)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="username"
              name="username"
              type="text"
              label={intl.formatMessage({ defaultMessage: "Username" })}
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
      </section>
    </Layout>
  );
};

export default Login;
