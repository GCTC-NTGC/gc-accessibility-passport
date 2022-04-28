import Link from "next/link";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
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
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    console.log(data);
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
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2 data-h2-font-size="b(h3)" data-h2-margin="b(bottom, m)">
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "You've selected <bold>Flexible Schedule</bold> as a proposed solution to <bold>Noise in the Workplace</bold>",
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
                    "Flexible Schedule is commonly defined as: Employees who experience certain limitations may need a flexible schedule to work optimally during hours of increased attentiveness. Flexible schedules can also be used to have a period of mental rest to refocus and reorient into his/her work. Examples of a flexible schedule would be adjusting starting and ending times of the workday, combining regularly scheduled breaks to create one extended break, or dividing large breaks into smaller segments, and allowing work to be completed during hours when the employee is most mentally alert.",
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
                  defaultMessage: "Adding optional context",
                })}
              </h4>
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "Use this text box to share how this barrier might impact your work and note the ways that this solution can help you to succeed in the work situations you have identified.",
                })}
              </p>
              <p data-h2-font-weight="b(600)">
                {intl.formatMessage({
                  defaultMessage:
                    "Please ensure that you have not included medical information.",
                })}
              </p>
              <TextArea
                id="optionalContext"
                label={intl.formatMessage({
                  defaultMessage: "Add optional context...",
                })}
                name="optionalContext"
                rows={8}
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
              <Button
                type="submit"
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
                data-h2-margin="b(right, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Save and add another solution",
                })}
              </Button>
              <Button
                type="submit"
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Save and view the barrier",
                })}
              </Button>
            </FormFooter>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default IdentifyASolution2;
