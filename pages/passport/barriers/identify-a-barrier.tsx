import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../../components/Button";
import Filters from "../../../components/Filters";
import { Input, TextArea } from "../../../components/formComponents";
import FormFooter from "../../../components/FormFooter";
import Layout from "../../../components/Layout";
import { errorMessages } from "../../../messages";

type FormValues = {
  name: string;
  description: string;
  barrier: string;
};

type Barrier = {
  id: number;
  name: string;
  categoryId: number;
  checked?: boolean;
};

type BarrierCategory = {
  id: number;
  parentId: number;
  name: string;
};

const IdentifyABarrier: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>({
    defaultValues: { barrier: "Noise in the Workplace" },
  });
  const { handleSubmit, setValue } = methods;
  const setBarrierValue = (value: string): void => setValue("barrier", value);
  const onSubmit = async (): Promise<void> => {
    push(`/passport/barriers/solutions/identify-a-solution`);
  };

  const strong = (msg: string): React.ReactNode => <strong>{msg}</strong>;

  const parentBarrierCategories = [
    {
      id: 1,
      name: intl.formatMessage({ defaultMessage: "Disability" }),
    },
  ];
  const barrierCategories: BarrierCategory[] = [
    {
      id: 1,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Autism Spectrum" }),
    },
    {
      id: 2,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Hard of hearing" }),
    },
  ];

  const barriers: Barrier[] = [
    {
      id: 1,
      name: intl.formatMessage({
        defaultMessage: "Noise in the Workplace",
      }),
      categoryId: 1,
      checked: true,
    },
    {
      id: 2,
      name: intl.formatMessage({
        defaultMessage: "Background Noise",
      }),
      categoryId: 2,
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Identify a barrier" })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Identify a barrier - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        { title: "My passport", href: "/passport" },
        { title: "Identify a barrier" },
      ]}
      formLayout
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div data-h2-margin="b(bottom, l)">
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "A barrier means anything that prevents you from participating in your work environment. For the purposes of completing the Passport, a barrier can be work or task specific.",
              })}
            </p>

            <Input
              id="name"
              name="name"
              type="text"
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
              label={intl.formatMessage({
                defaultMessage: "Barrier name",
              })}
            />
            <TextArea
              id="description"
              name="description"
              label={intl.formatMessage({
                defaultMessage: "Barrier description",
              })}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
              rows={10}
            />
          </div>
          <p>
            {" "}
            {intl.formatMessage(
              {
                defaultMessage:
                  "<strong>Use the tool to select a barrier </strong> (a barrier means anything that prevents you from participating in your work environment). You can select the barriers from the dropdown menus below.",
              },
              { strong },
            )}
          </p>

          <div data-h2-margin="b(bottom, xl)">
            <div
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <p data-h2-margin="b(top-bottom, xs)">
                {intl.formatMessage({
                  defaultMessage: "Filter to choose barriers by:",
                })}
              </p>
            </div>
            <div>
              <Filters
                parents={parentBarrierCategories}
                categories={barrierCategories}
                results={barriers}
                setResultValue={setBarrierValue}
                inputName="barrier"
              />
            </div>
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
                defaultMessage:
                  "I confirm that this is the barrier that I face",
              })}
            </Button>
          </FormFooter>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default IdentifyABarrier;
