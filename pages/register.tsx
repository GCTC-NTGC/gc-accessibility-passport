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
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FunctionComponent = () => {
  const intl = useIntl();
  const [, setErrorMsg] = useState("");
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User>({
    isLoggedIn: false,
    name: "",
    isManager: false,
  });
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: `${
      user.isManager ? "/manager/manager-dashboard" : "/passport"
    }`,
    redirectIfFound: true,
  });
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    setUser({
      isLoggedIn: true,
      name: `${data.firstName}`,
      isManager: false,
    });
    setOpen(true); // Open select role dialog.
  };

  const handleLogin = async (userData: User): Promise<void> => {
    const body = {
      name: userData.name,
      isManager: userData.isManager,
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

  const handleSelectRole = (isManager: boolean): void => {
    setUser({
      ...user,
      isManager,
    });

    handleLogin(user);
  };

  const passwordHints = [
    intl.formatMessage({
      defaultMessage: "Must be at least 8 characters.",
    }),
    intl.formatMessage({
      defaultMessage: "Must have at least 1 number.",
    }),
    intl.formatMessage({
      defaultMessage: "Must have at least 1 uppercase letter.",
    }),
    intl.formatMessage({
      defaultMessage: "Must have at least 1 special character (!@#$%^&*).",
    }),
  ];

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Register to create a passport",
        description: "Heading for register page.",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Register - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Register",
        },
      ]}
      formLayout
      data-h2-width="b(75) s(50)"
      data-h2-padding="b(top-bottom, l) b(right-left, m) m(right-left, xl)"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div data-h2-margin="b(bottom, l)">
            <div data-h2-display="b(flex)" style={{ gap: "1rem" }}>
              <div style={{ flex: "1 " }}>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  label={intl.formatMessage({
                    defaultMessage: "Given name(s)",
                  })}
                  rules={{
                    required: intl.formatMessage(errorMessages.required),
                  }}
                />
              </div>
              <div style={{ flex: "1 " }}>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  label={intl.formatMessage({
                    defaultMessage: "Surname(s)",
                  })}
                  rules={{
                    required: intl.formatMessage(errorMessages.required),
                  }}
                />
              </div>
            </div>
            <Input
              id="email"
              name="email"
              type="text"
              label={intl.formatMessage({
                defaultMessage: "Email address",
              })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
            />
            <p
              data-h2-font-size="b(caption)"
              data-h2-margin="b(top, s) b(bottom, none)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Please create a password. Passwords must contain at least:",
              })}
            </p>
            <ul
              data-h2-margin="b(bottom-left, s)"
              style={{ listStyleType: "disc" }}
            >
              {passwordHints.map((hint) => (
                <li key={hint} style={{ marginTop: "0" }}>
                  <p
                    data-h2-font-size="b(caption)"
                    data-h2-margin="b(all, none)"
                  >
                    {hint}
                  </p>
                </li>
              ))}
            </ul>
            <Input
              id="password"
              name="password"
              type="password"
              label={intl.formatMessage({ defaultMessage: "Password" })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label={intl.formatMessage({
                defaultMessage: "Confirm Password",
              })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
            />
          </div>
          <FormFooter
            cancelButton={{
              href: "/",
              title: intl.formatMessage({
                defaultMessage: "Already have an account? Log in instead.",
              }),
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
                defaultMessage: "Register",
              })}
            </Button>
          </FormFooter>
        </form>
      </FormProvider>
      <SelectRoleDialog isOpen={isOpen} handleSelectRole={handleSelectRole} />
    </Layout>
  );
};

export default Register;
