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

const IdentifyABarrier: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit, setValue } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    // TODO: Save barrier to cookie?
    push(`/barriers/identify-a-barrier-2`);
  };

  const setBarrierValue = (barrier: string) => setValue("barrier", barrier);

  const help = (msg: string): React.ReactNode => (
    <a href={"https://laws.justice.gc.ca/eng/acts/A-0.6/page-1.html"}>{msg}</a>
  );

  return (
    <Layout
      title={intl.formatMessage({ defaultMessage: "Identify a barrier" })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Step 1 of 2: Identify a barrier - GC Accessibility Passport",
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
            <div>
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
                  {intl.formatMessage({
                    defaultMessage:
                      "Can't find a barrier that meets your needs? Define your own.",
                  })}
                </p>
              </div>
              <div data-h2-margin="b(bottom, l)">
                <Filters setBarrierValue={setBarrierValue} />
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
