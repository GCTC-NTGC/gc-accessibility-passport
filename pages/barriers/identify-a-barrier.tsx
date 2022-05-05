import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import Filters from "../../components/Filters";
import { Input, TextArea } from "../../components/formComponents";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";

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
  const { handleSubmit, watch, setValue } = methods;
  const watchBarrier = watch("barrier");
  const setBarrierValue = (value: string): void => setValue("barrier", value);
  const onSubmit = async (data: FormValues): Promise<void> => {
    // TODO: Save barrier to cookie?
    console.log(data);
    push(`/solutions/identify-a-solution`);
  };

  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(600)">{msg}</span>
  );

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
        defaultMessage: "Identify a barrier - GC Accessibility Passport",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div data-h2-margin="b(bottom, l)">
              <p data-h2-font-weight="b(700)">
                {intl.formatMessage({
                  defaultMessage:
                    "Please note that only the barrier you select will be recorded on your passport - none of the filters or sorting tools you use will be saved or shared with anyone else.",
                })}
              </p>
              <p>
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "<bold>You can identify your barrier and enter a description</bold> (a barrier means anything that prevents you from participating in your work environment.)",
                  },
                  { bold },
                )}
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
            <p data-h2-margin="b(top-bottom, l)" data-h2-font-weight="b(600)">
              {intl.formatMessage({
                defaultMessage:
                  "Or use the worksheet to identify and select a solution (or solutions) for this barrier.",
              })}
            </p>
            <div data-h2-margin="b(bottom, xl)">
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Use the tool to select a barrier (a barrier means anything that prevents you from participating in your work environment). You can select the barrier from the drop-down menus below.",
                })}
              </p>
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
              <p>
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "You've selected <bold>{watchBarrier}</bold> as the barrier you'd like to add to your passport.",
                  },
                  { bold, watchBarrier },
                )}
              </p>
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
                    "I'm happy with this barrier, save and move to identifying solutions",
                })}
              </Button>
            </FormFooter>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default IdentifyABarrier;
