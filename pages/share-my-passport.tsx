import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../components/Button";
import { Checklist, Select } from "../components/formComponents";
import FormFooter from "../components/FormFooter";
import Layout from "../components/Layout";
import { errorMessages } from "../messages";

type FormValues = {
  barrier: string;
};

const ShareMyPassport: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (): Promise<void> => {
    push(`/barriers/identify-a-barrier-2`);
  };
  const barrierContainers: Checkbox[] = [
    {
      value: "example_barrier_container_1",
      label: intl.formatMessage({
        defaultMessage: "Example barrier container #1",
      }),
    },
    {
      value: "noise_in_the_workplace",
      label: intl.formatMessage({ defaultMessage: "Noise in the workplace" }),
    },
    {
      value: "example_barrier_container_3",
      label: intl.formatMessage({
        defaultMessage: "Example barrier container #3",
      }),
    },
    {
      value: "example_barrier_container_4",
      label: intl.formatMessage({
        defaultMessage: "Example barrier container #4",
      }),
    },
    {
      value: "example_barrier_container_5",
      label: intl.formatMessage({
        defaultMessage: "Example barrier container #5",
      }),
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Share my passport information",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Share my passport information",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div data-h2-margin="b(bottom, l)">
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Select one or more of the Passport information checkboxes and use the dropdown menu to share this information with  a manager or colleague",
                })}
              </p>

              <Checklist
                idPrefix="solutions"
                legend={intl.formatMessage({
                  defaultMessage: "Select one or more barriers to share...",
                })}
                name="barriers"
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
                items={barrierContainers}
              />

              <Select
                id="department"
                name="department"
                label={intl.formatMessage({
                  defaultMessage: "Share Passport information with",
                  description: "Share Passport information with",
                })}
                nullSelection={intl.formatMessage({
                  defaultMessage: "My manager",
                  description: "My manager",
                })}
                options={[
                  {
                    label: intl.formatMessage({ defaultMessage: "My manager" }),
                    value: "1",
                  },
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
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Share my Passport",
                })}
              </Button>
            </FormFooter>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default ShareMyPassport;
