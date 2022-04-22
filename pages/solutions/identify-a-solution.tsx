import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import Filters from "../../components/Filters";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";

type Solution = {
  id: number;
  name: string;
  categoryId: number;
  checked?: boolean;
};

type SolutionCategory = {
  id: number;
  parentId: number;
  name: string;
};

type FormValues = {
  barrier: string;
};

const IdentifyASolution: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (): Promise<void> => {
    // TODO: Save solution to cookie?
    push(`/barriers/identify-a-barrier-2`);
  };

  const solutionCont = (msg: string): React.ReactNode => (
    <Link href="/barriers/identify-a-solution-2">
      <a title="msg">{msg}</a>
    </Link>
  );

  const parentSolutionCategories = [
    {
      id: 1,
      name: intl.formatMessage({ defaultMessage: "Recommendations" }),
    },
  ];
  const solutionCategories: SolutionCategory[] = [
    {
      id: 1,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Noise in the Workplace" }),
    },
    {
      id: 2,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Time Management" }),
    },
    {
      id: 3,
      parentId: 1,
      name: intl.formatMessage({
        defaultMessage: "Memory",
      }),
    },
    {
      id: 4,
      parentId: 1,
      name: intl.formatMessage({
        defaultMessage: "Organization and prioritization",
      }),
    },
    {
      id: 5,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Multi-tasking" }),
    },
    {
      id: 6,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Paperwork" }),
    },
    {
      id: 7,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Social Skills" }),
    },
    {
      id: 8,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Work Hours" }),
    },
    {
      id: 9,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Attendance" }),
    },
  ];

  const solutions: Solution[] = [
    {
      id: 1,
      name: intl.formatMessage({
        defaultMessage: "Access to quiet place",
      }),
      categoryId: 1,
    },
    {
      id: 2,
      name: intl.formatMessage({
        defaultMessage: "Alerting devices",
      }),
      categoryId: 1,
    },
    {
      id: 3,
      name: intl.formatMessage({
        defaultMessage: "Alternative Lighting",
      }),
      categoryId: 1,
    },
    {
      id: 4,
      name: intl.formatMessage({ defaultMessage: "Applications" }),
      categoryId: 1,
    },
    {
      id: 5,
      name: intl.formatMessage({ defaultMessage: "Apps for Memory" }),
      categoryId: 1,
    },
    {
      id: 6,
      name: intl.formatMessage({
        defaultMessage: "Behavior Modification Techniques",
      }),
      categoryId: 1,
    },
    {
      id: 7,
      name: intl.formatMessage({ defaultMessage: "Job Coaches" }),
      categoryId: 1,
    },
    {
      id: 8,
      name: intl.formatMessage({ defaultMessage: "Modified Break Schedule" }),
      categoryId: 1,
    },
    {
      id: 9,
      name: intl.formatMessage({
        defaultMessage: "Noise cancelling headphones",
      }),
      categoryId: 1,
      checked: true,
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Identify a solution for Noise in the Workplace",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Identify a solution for Noise in the Workplace - GC Accessibility Passport",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div data-h2-margin="b(bottom, l)">
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Now that you have selected the barrier in your workplace, this page allows you to identify solutions to address this barrier (e.g., adaptive tools, support measures, or any other accommodation or adjustment). ",
                })}
              </p>
              <p data-h2-font-weight="b(700)">
                {intl.formatMessage({
                  defaultMessage:
                    "Please use the tool below to identify and select a solution (or solutions) for this barrier. You can identify as many solutions to barrier as you choose on this page.",
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
                    defaultMessage: "Select your solutions:",
                  })}
                </p>
                <p data-h2-margin="b(top-bottom, xs)">
                  {intl.formatMessage(
                    {
                      defaultMessage:
                        "Can't find a solution that meets your needs? <solutionCont>Define your own.</solutionCont>",
                    },
                    { solutionCont },
                  )}
                </p>
              </div>
              <Filters
                parents={parentSolutionCategories}
                categories={solutionCategories}
                results={solutions}
              />
              <div>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "When you share this barrier, the solutions you identified will be shared as a package with your manager or your colleague. Note that you can identify as many solutions to a barrier as you need using this page. You can even add or edit solutions later if your situation changes.",
                  })}
                </p>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Please select the link below to customize the solution you have selected.",
                  })}
                </p>
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
                  defaultMessage: "Customize the solution I've selected",
                })}
              </Button>
            </FormFooter>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default IdentifyASolution;
