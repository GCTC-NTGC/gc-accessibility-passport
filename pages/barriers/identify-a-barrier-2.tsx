import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import { TextArea } from "../../components/formComponents";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";

type FormValues = {
  optionalContext: string;
};

const IdentifyABarrier2: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    // TODO: Save barrier to cookie.
    push(`/solutions/identify-a-solution`);
  };

  const solutions = (msg: string): React.ReactNode => <a href="#">{msg}</a>;
  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Identify a new barrier (cont.)",
      })}
      headTitle={intl.formatMessage({
        defaultMessage: "Identify a new barrier - GC Accessibility Passport",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div data-h2-margin="b(bottom, l)">
              <h2 data-h2-font-size="b(h3)" data-h2-margin="b(all, none)">
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "You've selected <bold>Noise in the Workplace</bold> to add to your passport.",
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
                    "Attentiveness/Concentration is commonly defined as: Executive functions are high-level mental processes or abilities that influence and direct more basic abilities like attention and memory. The term executive function describes a set of cognitive abilities that include the ability to plan, organize and strategize, pay attention to and remember details, start and stop actions, and form concepts and think abstractly.",
                })}
              </p>
              <p
                data-h2-margin="b(all, none)"
                data-h2-font-size="b(caption)"
                data-h2-text-align="b(right)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "Not the right barrier? You can head back and search for another.",
                })}
              </p>
            </div>
            <div data-h2-margin="b(bottom, xl)">
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "This step is optional, but if you'd like to elaborate on how this particular barrier affects you, feel free to add on to the definition we've provided.",
                })}
              </p>
              <p data-h2-font-weight="b(700)">
                {intl.formatMessage({
                  defaultMessage:
                    "Please ensure you do not include any personal or medical information.",
                })}
              </p>
              <TextArea
                id="optionalContext"
                name="optionalContext"
                label={intl.formatMessage({
                  defaultMessage: "Add optional context...",
                })}
                rows={8}
              />
              <p data-h2-margin="b(top, m)">
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "Please select the link below to explore some potential <solutions>solutions</solutions> for this barrier ",
                  },
                  { solutions },
                )}
              </p>
            </div>
            <FormFooter
              cancelButton={{
                href: "/passport",
              }}
              data-h2-flex-direction="b(column) m(row)"
            >
              <Button
                type="submit"
                color="white"
                mode="inline"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Save and propose solutions later",
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

export default IdentifyABarrier2;
