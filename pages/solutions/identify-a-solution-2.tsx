import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button, { colorMap } from "../../components/Button";
import { Checklist, Input, TextArea } from "../../components/formComponents";
import { Checkbox } from "../../components/formComponents/Checklist";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";
import { errorMessages } from "../../messages";

type FormValues = {
  solutions: string[] | undefined;
  optionalContext: string;
};

const IdentifyASolution2: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    push("/review-barrier");
  };
  const back = (msg: string): React.ReactNode => (
    <Link href="/solutions/identify-a-solution">
      <a title={msg}>{msg}</a>
    </Link>
  );
  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );

  const situations: Checkbox[] = [
    {
      value: "selection_process",
      label: intl.formatMessage({ defaultMessage: "Selection process" }),
    },
    {
      value: "remote_workplace",
      label: intl.formatMessage({ defaultMessage: "Remote workplace" }),
    },
    {
      value: "hybrid_workplace",
      label: intl.formatMessage({ defaultMessage: "Hybrid workplace" }),
    },
    {
      value: "office_workplace",
      label: intl.formatMessage({ defaultMessage: "Office workplace" }),
    },
    {
      value: "learning_event",
      label: intl.formatMessage({ defaultMessage: "Learning event" }),
    },
    {
      value: "training_course",
      label: intl.formatMessage({ defaultMessage: "Training Course" }),
    },
    {
      value: "in_person_meetings",
      label: intl.formatMessage({ defaultMessage: "In-person meetings" }),
    },
    {
      value: "virtual_meetings",
      label: intl.formatMessage({ defaultMessage: "Virtual meetings" }),
    },
    {
      value: "other",
      label: intl.formatMessage({ defaultMessage: "Other" }),
    },
  ];

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Customize your solution",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Customize your solution - GC Accessibility Passport",
      })}
      formLayout
      crumbs={[
        { title: "Identify a barrier" },
        { title: "Identify a solution" },
      ]}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, m)">
              {intl.formatMessage(
                {
                  defaultMessage:
                    "You've selected <bold>Noise-cancelling headphones</bold> as a proposed solution to <bold>Noise in the Workplace</bold>",
                },
                { bold },
              )}
            </h2>
            <p
              data-h2-bg-color="b(lightgray)"
              data-h2-padding="b(all, s)"
              data-h2-margin="b(bottom, none)"
            >
              {intl.formatMessage({
                defaultMessage:
                  "Noise canceling headphones are designed to reduce exposure to unwanted background noise.",
              })}
            </p>
            <p
              data-h2-margin="b(all, none)"
              data-h2-font-size="b(caption)"
              data-h2-text-align="b(right)"
            >
              {intl.formatMessage(
                {
                  defaultMessage:
                    "Not the right barrier? You can <back>head back and search for another</back>.",
                },
                { back },
              )}
            </p>
          </div>
          <div>
            <h4 data-h2-font-weight="b(600)" data-h2-font-size="b(h5)">
              {intl.formatMessage({
                defaultMessage:
                  "Describe a work situation where this solution works.",
              })}
            </h4>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "It’s important that your passport provides just enough context about how a solution can be helpful so that it is implemented appropriately. Please select situations in which this solution works best from the list below. You can select one or more from the list, or even add your own if you want to be more specific.",
              })}
            </p>
            <Checklist
              idPrefix="solutions"
              legend={intl.formatMessage({
                defaultMessage: "Select one or more situations...",
              })}
              name="solutions"
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
              items={situations}
            />
          </div>

          <div>
            <h4 data-h2-font-weight="b(600)" data-h2-font-size="b(h5)">
              {intl.formatMessage({
                defaultMessage: "Attach documents and files",
              })}
            </h4>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "This section allows you to upload any recommendations or the results of non-medical assessments (e.g., ergonomic or occupational assessment results) that could accompany any request you might like to make for the solution you have identified.",
              })}
            </p>
            <p data-h2-font-weight="b(600)">
              {intl.formatMessage({
                defaultMessage:
                  "Please ensure that you have not uploaded medical information.",
              })}
            </p>
            <Input
              id="file"
              name="file"
              type="file"
              label={intl.formatMessage({
                defaultMessage: "Attach supplementary information",
              })}
            />
          </div>
          <div>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Note that you can identify as many solutions to a barrier as you need using this page. You can even add or edit solutions later if your situation changes.",
              })}
            </p>
            <p>
              {intl.formatMessage(
                {
                  defaultMessage:
                    "<bold>REMINDER</bold>: When you share your barrier, the solutions, situations you identified and any documentation you have uploaded will be shared as a package with your manager or your colleague.",
                },
                { bold },
              )}
            </p>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "Select either one of the links below to save your barrier and view it; or save it and add another.",
              })}
            </p>
          </div>
          <FormFooter
            cancelButton={{
              href: "/passport",
            }}
          >
            <Link href="/solutions/identify-a-solution">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
                data-h2-margin="b(right, m)"
              >
                {intl.formatMessage({
                  defaultMessage: "Save and add another solution",
                })}
              </a>
            </Link>
            <Button
              type="submit"
              color="blue"
              mode="solid"
              data-h2-font-style="b(underline)"
              data-h2-padding="b(all, s)"
            >
              {intl.formatMessage({
                defaultMessage: "Save and review the barrier info",
              })}
            </Button>
          </FormFooter>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default IdentifyASolution2;
