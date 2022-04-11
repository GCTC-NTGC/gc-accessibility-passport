import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import FormFooter from "../../components/FormFooter";
import Layout from "../../components/Layout";
import { Barrier } from "../api/barrier";

type FormValues = {
  barrier: Barrier;
};

const IdentifyABarrier: React.FunctionComponent = () => {
  const intl = useIntl();
  const { push } = useRouter();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    // TODO: Save barrier to cookie.
    push(`/barriers/identify-a-barrier-2`);
  };

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
                    "Your passport is a tool for communicating with your manager and actioning solutions that will empower your every day work. In order to provide the best context, we ask that you start by identifying a barrier you might face in the workplace. It can be hard to describe these barriers, so below you will find a robust tool that allows you to filter a curated list of barriers by a variety of helpful concepts. Once you’ve found the barrier you’d like to work with, select it from the list and move on to the next step. You’ll be able to add as many barriers as you need to your passport using this tool each time.",
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
              >
                <p>
                  {intl.formatMessage({
                    defaultMessage: "Filter barriers by...",
                  })}
                </p>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Can’t find a barrier that meets your needs? Define your own.",
                  })}
                </p>
              </div>
              <div data-h2-margin="b(bottom, l)">Add filter section here!!</div>
            </div>
            <FormFooter
              cancelButton={{
                href: "", // TODO: Replace with passport link
              }}
            >
              <Link href="/passport">
                <a
                  title={intl.formatMessage({
                    defaultMessage: "Start with the barrier I’ve selected",
                  })}
                  data-h2-padding="b(all, s)"
                >
                  {intl.formatMessage({
                    defaultMessage: "Start with the barrier I’ve selected",
                  })}
                </a>
              </Link>
            </FormFooter>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default IdentifyABarrier;
