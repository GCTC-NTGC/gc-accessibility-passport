import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { errorMessages } from "../messages";
import { Checklist, Input, Select, Submit } from "./formComponents";

interface ShareFormProps {}

type FormValues = {
  examples: string[];
  email: string;
  managerRelation: string;
};

const ShareForm: React.FunctionComponent<ShareFormProps> = (props) => {
  const intl = useIntl();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {};

  const examples = [
    {
      label: intl.formatMessage({ defaultMessage: "Example Resource #1" }),
      value: "1",
    },
    {
      label: intl.formatMessage({ defaultMessage: "Example Resource #2" }),
      value: "2",
    },
    {
      label: intl.formatMessage({ defaultMessage: "Example Resource #3" }),
      value: "3",
    },
  ];
  return (
    <section data-h2-margin="b(bottom, xl)">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Checklist
            idPrefix="examples"
            legend={intl.formatMessage({
              defaultMessage: "Select one or more situations to share...",
            })}
            name="examples"
            items={examples}
            rules={{
              required: intl.formatMessage(errorMessages.required),
            }}
          />
          <div
            data-h2-display="b(flex)"
            data-h2-justify-content="b(space-between)"
          >
            <div data-h2-margin="b(right, m)">
              <Input
                id="email"
                name="email"
                type="email"
                label={intl.formatMessage({
                  defaultMessage: "Recipient's email",
                })}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
            </div>
            <div>
              <Select
                id="managerRelation"
                name="managerRelation"
                label={intl.formatMessage({
                  defaultMessage: "Recipient’s relationship to you",
                })}
                options={[
                  {
                    label: intl.formatMessage({ defaultMessage: "My manager" }),
                    value: "1",
                  },
                ]}
                rules={{
                  required: intl.formatMessage(errorMessages.required),
                }}
              />
            </div>
          </div>
          <Submit
            data-h2-padding="b(top-bottom, s)"
            data-h2-margin="b(top, s)"
            data-h2-font-style="b(underline)"
            block
            text={intl.formatMessage({
              defaultMessage: "Share the selected situations",
            })}
          />
        </form>
      </FormProvider>
    </section>
  );
};

export default ShareForm;
