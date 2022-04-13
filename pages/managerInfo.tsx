import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import { Input, Select } from "../components/formComponents";
import FormFooter from "../components/FormFooter";
import Layout from "../components/Layout";
import { errorMessages } from "../messages";

const ManagerInfo: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    // TODO: Save Manager Info to DB
  };

  const help = (msg: string): React.ReactNode => (
    <a href={"https://laws.justice.gc.ca/eng/acts/A-0.6/page-1.html"}>{msg}</a>
  );

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "My manager's Information" })}
      headTitle={intl.formatMessage({
        defaultMessage: "My manager's Information",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div data-h2-margin="b(bottom, l)">
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Your manager plays a key role in obtaining solutions for any barriers you might face in the workplace. Add your manager’s contact information into this section of your Passport. You will then have the option to share information from your Passport with your manager once it is documented or updated.",
                })}
              </p>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Because your manager is accountable for setting work objectives and evaluating your performance, they have a vested interest in understanding the barriers you may encounter in the workplace. They also need to be accountable, at least in part, for implementing the solutions needed to equip you to succeed.",
                })}
              </p>
            </div>

            <div>
              <Input
                id="firstName"
                name="firstName"
                label={intl.formatMessage({
                  defaultMessage: "Manager's First Name",
                  description:
                    "Label displayed on My manager's Information Form Manager's First Name field.",
                })}
                type="text"
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <Input
                id="lastName"
                name="lastName"
                label={intl.formatMessage({
                  defaultMessage: "Manager's Last Name",
                  description:
                    "Label displayed on My manager's Information Form Manager's Last Name field.",
                })}
                type="text"
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <Input
                id="title"
                name="title"
                label={intl.formatMessage({
                  defaultMessage: "Manager's Title",
                  description:
                    "Label displayed on My manager's Information Form Manager's Title field.",
                })}
                type="text"
              />

              <Input
                id="workEmail"
                name="workEmail"
                label={intl.formatMessage({
                  defaultMessage: "Manager's Work Email",
                  description:
                    "Label displayed on the My manager's Information Form Manager's Work Email field.",
                })}
                type="text"
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
              <Select
                id="department"
                name="department"
                label={intl.formatMessage({
                  defaultMessage: "department",
                  description:
                    "Label displayed on the My manager's Information form department field.",
                })}
                nullSelection={intl.formatMessage({
                  defaultMessage: "Select a department...",
                  description:
                    "Placeholder displayed on the My manager's Information form department field.",
                })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
                options={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                  { value: 6, label: "6" },
                  { value: 7, label: "7" },
                  { value: 8, label: "8" },
                  { value: 9, label: "9" },
                ]}
              />
            </div>
            <FormFooter
              cancelButton={{
                href: "/passport",
              }}
            >
              <Button
                type="submit"
                color="white"
                mode="inline"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Save My Manager's Information",
                })}
              </Button>
            </FormFooter>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default ManagerInfo;