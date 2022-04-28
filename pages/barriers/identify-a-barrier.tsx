import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import Filters from "../../components/Filters";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";

type FormValues = {
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
      name: intl.formatMessage({ defaultMessage: "Blindness" }),
    },
    {
      id: 3,
      parentId: 1,
      name: intl.formatMessage({
        defaultMessage: "Colourblind(ness)/Colour Vision Deficiency",
      }),
    },
    {
      id: 4,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Diabetes" }),
    },
    {
      id: 5,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Learning Disability" }),
    },
    {
      id: 6,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Mental Health Conditions" }),
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
        defaultMessage: "Executive Function Challenges",
      }),
      categoryId: 1,
    },
    {
      id: 3,
      name: intl.formatMessage({
        defaultMessage: "Time Management Challenges",
      }),
      categoryId: 1,
    },
    {
      id: 4,
      name: intl.formatMessage({ defaultMessage: "Memory Challenges" }),
      categoryId: 1,
    },
    {
      id: 5,
      name: intl.formatMessage({ defaultMessage: "Noise sensitivity" }),
      categoryId: 1,
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
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Your GC Workplace Accessibility Passport is a tool to document the barriers you might face at work and the adaptive tools and support measures that you need to succeed in your job. In this section, please describe the barriers you face at work.",
                })}
              </p>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "A Barrier means anything that prevents you from participating in your work environment. For the purposes of completing the Passport, a barrier can be work or task specific. It can refer to how the employee interacts with their work environment. A barrier does not need to refer to a specific disability or health condition.",
                })}
              </p>
              <p>
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "The tool below presents a list of barriers that can be filtered by the type of <help>Disability</help> that, in interaction with the conditions in your workplace, might hinder your full and equal participation.",
                  },
                  { help },
                )}
              </p>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "You can use the tool below to select a barrier using the tool. Once you have selected a barrier from the list you can choose to elaborate on how this barrier might presents a challenge for you.  ",
                })}
              </p>
              <p data-h2-font-weight="b(700)">
                {intl.formatMessage({
                  defaultMessage:
                    "Please note that only the barrier you select will be recorded on your passport - none of the filters or sorting tools you use will be saved or shared with anyone else.",
                })}
              </p>
            </div>
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
