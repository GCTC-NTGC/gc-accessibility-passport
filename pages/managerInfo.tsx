import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import { Input, Select } from "../components/formComponents";
import FormFooter from "../components/FormFooter";
import Layout from "../components/Layout";
import { errorMessages } from "../messages";
import jsonData from "../public/resources/departments.json";
const ManagerInfo: React.FunctionComponent = () => {
  const intl = useIntl();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    // TODO: Save Manager Info to DB
  };

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "My Manager's Information" })}
      headTitle={intl.formatMessage({
        defaultMessage: "My Manager's Information",
      })}
    >
      <div
        data-h2-container="b(center, xl)"
        data-h2-radius="b(s)"
        data-h2-shadow="b(s)"
        data-h2-padding="b(all, l) b(right, xxl)"
        data-h2-bg-color="b(white)"
        data-h2-display="b(flex)"
        data-h2-justify-content="b(center)"
        data-h2-align-items="b(center)"
      >
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
              <div
                data-h2-display="b(flex)"
                data-h2-justify-content="b(space-between)"
              >
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
                options={jsonData.departments}
              />
            </div>
            <div>
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
            </div>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default ManagerInfo;
