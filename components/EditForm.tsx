import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Submit } from "./formComponents";

type FormValues = {
  examples: string[];
  email: string;
  managerRelation: string;
};

const EditForm: React.FunctionComponent = ({ children }) => {
  const intl = useIntl();
  const { pathname, push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    push(`/${pathname.split("/")[1]}`);
  };

  return (
    <section data-h2-margin="b(bottom, xl)">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>{children}</div>
          <div
            data-h2-padding="b(top-bottom, m)"
            data-h2-margin="b(top-bottom, m)"
            data-h2-border="b(black, top, solid, s)"
            data-h2-display="b(flex)"
            data-h2-justify-content="b(space-between)"
            data-h2-align-items="b(center)"
          >
            <Link
              href={`/${pathname.split("/")[1]}`}
              key={intl.formatMessage({
                defaultMessage: "cancel",
              })}
            >
              <a
                title={intl.formatMessage({
                  defaultMessage: "cancel",
                })}
              >
                {intl.formatMessage({
                  defaultMessage: "cancel",
                })}
              </a>
            </Link>
            <Submit
              data-h2-padding="b(top-bottom, s) b(right-left, m)"
              data-h2-font-style="b(underline)"
              text={intl.formatMessage({
                defaultMessage: "Save",
              })}
            />
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default EditForm;
