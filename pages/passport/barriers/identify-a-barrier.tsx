import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../../components/Button";
import Worksheet from "../../../components/Worksheet";
import { Input, TextArea } from "../../../components/formComponents";
import FormFooter from "../../../components/FormFooter";
import Layout from "../../../components/Layout";
import { strong } from "../../../helpers/format";

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

  const parentBarrierCategories = [
    {
      id: 1,
      name: intl.formatMessage({ defaultMessage: "Disability" }),
    },
    {
      id: 2,
      name: intl.formatMessage({ defaultMessage: "Work Situation" }),
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
    {
      id: 3,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Office workplace" }),
    },
    {
      id: 4,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Selection process" }),
    },
    {
      id: 5,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Remote workplace" }),
    },
    {
      id: 6,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Hybrid workplace" }),
    },
    {
      id: 7,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Learning event" }),
    },
    {
      id: 8,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Training Course" }),
    },
    {
      id: 9,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "In-person meetings" }),
    },
    {
      id: 10,
      parentId: 2,
      name: intl.formatMessage({ defaultMessage: "Virtual meetings" }),
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
    {
      id: 3,
      name: intl.formatMessage({
        defaultMessage: "Noise in the Workplace",
      }),
      categoryId: 3,
      checked: true,
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Identify a barrier" })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Identify a Barrier - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "My passport",
            description: "Breadcrumb title.",
          }),
          href: "/passport",
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Identify a barrier",
            description: "Breadcrumb title.",
          }),
        },
      ]}
      formLayout
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div data-h2-margin="b(bottom, l)">
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Identify a barrier. A barrier is anything that prevents you from accomplishing your tasks in the workplace. For the purposes of completing the Passport, a barrier can be work or task specific.",
              })}
            </p>

            <Input
              id="name"
              name="name"
              type="text"
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
              rows={10}
            />
          </div>
          <p>
            {intl.formatMessage(
              {
                defaultMessage:
                  "<strong>Use the tool to select a barrier</strong> (a barrier means anything that prevents you from participating in your work environment). <strong>You can</strong> select the barriers from the dropdown menus below.",
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
              <Worksheet
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
