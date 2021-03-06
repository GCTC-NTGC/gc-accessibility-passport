import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import { Input } from "../components/formComponents";
import FormFooter from "../components/FormFooter";
import Layout from "../components/Layout";
import SelectRoleDialog from "../components/SelectRoleDialog";
import fetchJson, { FetchError } from "../lib/fetchJson";
import useUser from "../lib/useUser";
import { errorMessages } from "../messages";
import { User } from "./api/user";

type FormValues = {
  email: string;
  password: string;
};

const SignIn: React.FunctionComponent = () => {
  const intl = useIntl();
  const [, setErrorMsg] = useState("");
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User>({
    isSignedIn: false,
    name: "",
    isManager: false,
  });
  // here we just check if user is already signed in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: `${
      user.isManager ? "/manager/manager-dashboard" : "/passport"
    }`,
    redirectIfFound: true,
  });

  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async () => {
    setUser({
      ...user,
      isManager: false,
    });
    setOpen(true); // Open select role dialog.
  };

  const handleSignIn = async (userData: User): Promise<void> => {
    const body = {
      name: userData.name,
      isManager: userData.isManager,
    };

    try {
      mutateUser(
        await fetchJson("/api/sign-in", {
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

  const handleSelectRole = (isManager: boolean): void => {
    setUser({
      ...user,
      isManager,
    });

    handleSignIn(user);
  };

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Sign into your GC Workplace Accessibility Passport",
        description: "Heading for sign in page.",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Sign in - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "Home",
            description: "Breadcrumb title.",
          }),
          href: "/",
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Sign in",
            description: "Breadcrumb title.",
          }),
        },
      ]}
      formLayout
      data-h2-width="b(75) s(50)"
      data-h2-padding="b(top-bottom, l) b(right-left, m) m(right-left, xl)"
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
              type="password"
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
                defaultMessage: "Sign in",
              })}
            </Button>
          </FormFooter>
        </form>
      </FormProvider>
      <SelectRoleDialog isOpen={isOpen} handleSelectRole={handleSelectRole} />
    </Layout>
  );
};

export default SignIn;
