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

  const prevTabbedElement = React.useRef<HTMLElement | null>(null);
  const handleTabableElements: (event: KeyboardEvent) => void =
    React.useCallback((event) => {
      if (event.key === "Tab") {
        const tabableElements = Array.from(
          document.querySelectorAll(
            'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), textarea, select, details, [tabindex]:not([tabindex="-1"])',
          ),
        ) as HTMLElement[];
        if (tabableElements.length === 0) {
          return;
        }

        const firstElement = tabableElements[0] as HTMLElement;

        if (tabableElements.length === 1) {
          // This check is to avoid strange behavior if firstElement == lastElement.
          event.preventDefault();
          firstElement.focus();
          return;
        }

        // Because "non-tabable" may receive focus, we track the last "tabable" element we were at
        // with prevTabbedElement, and calculate the next and prev tabable elements in reference to that.

        // If prevTabbedElement is null, treat the current index as zero
        const currentTabIndex =
          prevTabbedElement.current !== null
            ? tabableElements.findIndex(
                (element) => element === prevTabbedElement.current,
              )
            : 0;

        const forwardIndex = (currentTabIndex + 1) % tabableElements.length;
        // backwardIndex loops around to the last tabable element if currently focused on the first.
        const backwardIndex =
          currentTabIndex <= 0
            ? tabableElements.length - 1
            : currentTabIndex - 1;

        const targetElement = event.shiftKey
          ? tabableElements[backwardIndex]
          : tabableElements[forwardIndex];

        event.preventDefault();
        targetElement.focus();
        prevTabbedElement.current = targetElement;
      }
    }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleTabableElements);
    return () => document.removeEventListener("keydown", handleTabableElements);
  }, [handleTabableElements]);

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
                color="white"
                mode="inline"
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
