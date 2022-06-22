import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { errorMessages } from "../messages";
import { Checklist, Input, Select, Submit } from "./formComponents";

interface ShareFormProps {
  cancelButton?: boolean;
  submitText?: string;
  checklistLabel?: string;
  checklistOptions?: { label: string; value: string }[];
}

type FormValues = {
  examples: string[];
  email: string;
  managerRelation: string;
};

const ShareForm: React.FunctionComponent<ShareFormProps> = ({
  cancelButton,
  submitText,
  checklistLabel,
  checklistOptions,
}) => {
  const intl = useIntl();
  const { pathname, push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    push(`/${pathname.split("/")[1]}/share`);
  };

  return (
    <section data-h2-margin="b(bottom, xl)">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {checklistOptions && (
            <Checklist
              idPrefix="examples"
              legend={checklistLabel || ""}
              name="examples"
              items={checklistOptions}
              rules={{
                required: intl.formatMessage(errorMessages.required),
              }}
            />
          )}

          <div data-h2-display="b(flex)" data-h2-margin="b(top, m)">
            <div data-h2-margin="b(right, m)" style={{ flex: "1" }}>
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
            <div style={{ flex: "1" }}>
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
          {cancelButton ? (
            <div
              data-h2-padding="b(top-bottom, m)"
              data-h2-margin="b(top-bottom, m)"
              data-h2-border="b(black, top, solid, s)"
              data-h2-display="b(flex)"
              data-h2-justify-content="b(space-between)"
              data-h2-align-items="b(center)"
            >
              <Link href={`/${pathname.split("/")[1]}/share`} key="cancel">
                <a>
                  {intl.formatMessage({
                    defaultMessage: "cancel",
                  })}
                </a>
              </Link>
              <Submit
                data-h2-padding="b(top-bottom, s) b(right-left, m)"
                data-h2-font-style="b(underline)"
                text={submitText}
              />
            </div>
          ) : (
            <Submit
              data-h2-padding="b(top-bottom, s)"
              data-h2-margin="b(top, s)"
              data-h2-font-style="b(underline)"
              block
              text={submitText}
            />
          )}
        </form>
      </FormProvider>
    </section>
  );
};

export default ShareForm;
