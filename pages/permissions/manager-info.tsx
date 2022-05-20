import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import { Input, Select } from "../../components/formComponents";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";
import { errorMessages } from "../../messages";
import jsonData from "../../public/resources/departments.json";

type FormValues = {
  firstName: string;
  lastName: string;
  title: string;
  workEmail: string;
  department: string;
};

const ManagerInfo: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (): Promise<void> => {
    push("/manager/manager-dashboard");
  };
  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "My Manager's Information" })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "My Manager's Information - GC Workplace Accessibility Passport",
      })}
      center={true}
      formLayout
      crumbs={[
        { title: "My passport", href: "/passport" },
        {
          title: "Manage Permissions",
          href: "/permissions/manage-permissions",
        },
        { title: "Manager Info" },
      ]}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div data-h2-margin="b(bottom, l)">
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Your manager is responsible for providing you with the tools and support measures to succeed in your work. Add your manager’s contact information into this section of your Passport. Adding your manager’s contact information here gives you the option to share your Passport information with your manager.",
              })}
            </p>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Because your manager is accountable for setting work objectives and evaluating your performance, they have a vested interest in understanding the barriers you may encounter in the workplace. They also need to be accountable, at least in part, for implementing the solutions needed to equip you to succeed.",
              })}
            </p>
          </div>

          <div data-h2-margin="b(bottom, xl)">
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
            >
              <div style={{ flex: 1 }} data-h2-margin="b(right, l)">
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
              </div>
              <div style={{ flex: 1 }} data-h2-margin="b(left, l)">
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
              </div>
            </div>

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
                defaultMessage: "Organization",
                description:
                  "Label displayed on the My manager's Information form department field.",
              })}
              nullSelection={intl.formatMessage({
                defaultMessage: "Select an organization...",
                description:
                  "Placeholder displayed on the My manager's Information form department field.",
              })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
              options={jsonData.departments}
            />
          </div>
          <div>
            <FormFooter
              cancelButton={{
                href: "/manager/manager-dashboard",
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
                  defaultMessage: "Save My Manager's Information",
                })}
              </Button>
            </FormFooter>
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default ManagerInfo;
