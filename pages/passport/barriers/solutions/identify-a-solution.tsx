import { ExclamationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Alert from "../../../../components/Alert";
import Button from "../../../../components/Button";
import Filters from "../../../../components/Filters";
import { Input, TextArea } from "../../../../components/formComponents";
import FormFooter from "../../../../components/FormFooter";
import Layout from "../../../../components/Layout";

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
  solution: string;
  name: string;
  description: string;
};

const IdentifyASolution: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>({
    defaultValues: { solution: "Noise cancelling headphones" },
  });
  const { handleSubmit, setValue } = methods;
  const setSolutionValue = (value: string): void => setValue("solution", value);
  const onSubmit = async (): Promise<void> => {
    push(`/passport/barriers/solutions/identify-a-solution-2`);
  };

  const solutionCont = (msg: string): React.ReactNode => (
    <Link href="/passport/barriers/solutions/identify-a-solution-2">
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
  ];

  const solutions: Solution[] = [
    {
      id: 1,
      name: intl.formatMessage({
        defaultMessage: "Access to a quiet space",
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
        defaultMessage: "Identify a solution for: Noise in the Workplace.",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Identify a solution for: Noise in the Workplace - GC Workplace Accessibility Passport",
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
          href: "/passport/barriers/identify-a-barrier",
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Propose Solutions",
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
                  "Now that you have selected the barrier in your workplace, this page allows you to identify solutions to address this barrier (e.g., adaptive tools, support measures, or any other accommodation or adjustment). ",
              })}
            </p>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "You can identify a solution and enter a description (a solution means the tools, support measures and any other accommodation or adjustment that address the barrier you have identified).",
              })}
            </p>
          </div>
          <div>
            <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
              {intl.formatMessage({ defaultMessage: "Solution Description" })}
            </h2>
            <Alert
              icon={<ExclamationCircleIcon style={{ width: "1.25rem" }} />}
              message={intl.formatMessage({
                defaultMessage:
                  "Please ensure that you do not share any personal or medical information before saving.",
              })}
            />
            <Input
              id="name"
              name="name"
              type="text"
              label={intl.formatMessage({
                defaultMessage: "Solution name",
              })}
            />
            <TextArea
              id="description"
              name="description"
              label={intl.formatMessage({
                defaultMessage: "Solution description",
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
              setResultValue={setSolutionValue}
              inputName="solution"
            />
            <div>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "When you share this barrier/solution information, the solutions you identified will be shared as a package with your manager or your colleague. Note that you can identify as many solutions to a barrier as you need using this page. You can even add or edit your solutions later if your situation changes.",
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
    </Layout>
  );
};

export default IdentifyASolution;
