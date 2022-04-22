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
import { errorMessages } from "../../messages";

type FormValues = {
  name: string;
  description: string;
  barrier: string;
};

type Barrier = {
  id: number;
  name: string;
  categoryId: number;
};

type BarrierCategory = {
  id: number;
  parentId: number;
  name: string;
};

const IdentifyABarrier: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (): Promise<void> => {
    // TODO: Save barrier to cookie?
    push(`/barriers/identify-a-barrier-2`);
  };

  const help = (msg: string): React.ReactNode => (
    <a
      href={"https://laws.justice.gc.ca/eng/acts/A-0.6/page-1.html"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {msg}
    </a>
  );
  const barrierCont = (msg: string): React.ReactNode => (
    <Link href="/barriers/identify-a-barrier-2">
      <a title="msg">{msg}</a>
    </Link>
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
                {intl.formatMessage({
                  defaultMessage:
                    "Identify a barrier. A barrier means anything that prevents you from participating in your work environment. For the purposes of completing the Passport, a barrier can be work or task specific.",
                })}
              </p>
              <Input
                id="name"
                name="name"
                type="text"
                label={intl.formatMessage({
                  defaultMessage: "Barrier name",
                })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
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
            <div data-h2-margin="b(bottom, xl)">
              <p data-h2-margin="b(top-bottom, l)">
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
                <p data-h2-margin="b(top-bottom, xs)">
                  {intl.formatMessage(
                    {
                      defaultMessage:
                        "Can't find a barrier that meets your needs? <barrierCont>Define your own.</barrierCont>",
                    },
                    { barrierCont },
                  )}
                </p>
              </div>
              <div>
                <Filters
                  parents={parentBarrierCategories}
                  categories={barrierCategories}
                  results={barriers}
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
                  defaultMessage: "Start with the barrier I've selected",
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
