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
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Identify a new barrier (cont.)",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Step 2 of 2: Identify a new barrier - GC Accessibility Passport",
      })}
    >
      <div data-h2-padding="b(all, xl)">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div data-h2-margin="b(bottom, l)">
              <h2 data-h2-font-size="b(h3)" data-h2-margin="b(all, none)">
                {intl.formatMessage({
                  defaultMessage:
                    "You’ve selected “Example barrier #3” to add to your passport.",
                })}
              </h2>
              <p
                data-h2-bg-color="b(lightgray)"
                data-h2-padding="b(all, s)"
                data-h2-margin="b(bottom, none)"
              >
                {intl.formatMessage({
                  defaultMessage: "Example barrier 3 is commonly defined as...",
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
            <div data-h2-margin="b(bottom, l)">
              <p>
                {intl.formatMessage({
                  defaultMessage:
                    "This step is optional, but if you’d like to elaborate on how this particular barrier affects you, feel free to add on to the definition we’ve provided.",
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
                {intl.formatMessage({
                  defaultMessage:
                    "Now that you’ve selected a barrier to add to your passport, it’s time to explore some possible solutions that will help alleviate or remove this barrier.",
                })}
              </p>
            </div>
            <FormFooter
              cancelButton={{
                href: "/passport", // TODO: Add href
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
                color="white"
                mode="inline"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "I’m happy with this barrier, save and move to identifying solutions",
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
