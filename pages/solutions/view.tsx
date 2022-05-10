import { CheckCircleIcon, PaperClipIcon } from "@heroicons/react/outline";
import Link from "next/link";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button, { colorMap } from "../../components/Button";
import { Checkbox } from "../../components/formComponents";
import Layout from "../../components/Layout";
import Page, { RightSection, LeftSection } from "../../components/Page";
import { errorMessages } from "../../messages";

type FormValues = {
  managerConversation: boolean;
  employeeSignature: boolean;
};

const ViewSolution: React.FunctionComponent = () => {
  const intl = useIntl();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (data: FormValues): Promise<void> => {
    alert("Marked as effective!");
  };
  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage:
          "View/Action your solution: Noise-cancelling headphones",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "View/Action your solution: Noise-cancelling headphones - GC Accessibility Passport",
      })}
    >
      <Page>
        <LeftSection>
          <p data-h2-margin="b(top, none) b(bottom, m)">
            {intl.formatMessage({
              defaultMessage:
                "Below is a summary of your solution information.  You can review a solution, action a solution, and identify a solution's status.",
            })}
          </p>
          <div>
            <h2 data-h2-margin="b(top, none)" data-h2-font-size="b(h3)">
              {intl.formatMessage({ defaultMessage: "Solution Description" })}
            </h2>
            <div>
              <p
                data-h2-bg-color="b(lightgray)"
                data-h2-padding="b(all, s)"
                data-h2-margin="b(top, none)"
              >
                {intl.formatMessage({
                  defaultMessage:
                    "Noise canceling headphones are designed to reduce exposure to unwanted background noise",
                })}
              </p>
            </div>
          </div>
          <div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div data-h2-margin="b(bottom, l)">
                  <h2
                    data-h2-margin="b(top, none) b(bottom, m)"
                    data-h2-font-size="b(h3)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "GC Accessibility Passport Agreement",
                    })}
                  </h2>
                  <p data-h2-margin="b(top, none)">
                    {intl.formatMessage({
                      defaultMessage:
                        "Complete this section with your manager.",
                    })}
                  </p>
                  <Checkbox
                    id="managerConversation"
                    label={intl.formatMessage({
                      defaultMessage:
                        "My manager and I have had a conversation about the barrier and solution(s)",
                    })}
                    name="managerConversation"
                    rules={{
                      required: intl.formatMessage(errorMessages.required),
                    }}
                    boundingBox
                  />
                </div>
                <div>
                  <p>
                    {intl.formatMessage({
                      defaultMessage:
                        "This section should be completed jointly by the employee and their manager. Its purpose is to record the solutions- taken from above (e.g., adaptive tools services, or measures) that a manager has agreed to provide.",
                    })}
                  </p>
                  <ul
                    data-h2-padding="b(left, m)"
                    data-h2-margin="b(bottom, m)"
                    style={{ listStyleType: "disc" }}
                  >
                    <li>
                      {intl.formatMessage({
                        defaultMessage: "noise cancelling headphones",
                      })}
                    </li>
                    <li>
                      {intl.formatMessage({
                        defaultMessage: "access to quiet space",
                      })}
                    </li>
                  </ul>
                  <div>
                    <p
                      data-h2-bg-color="b(lightgray)"
                      data-h2-padding="b(all, s)"
                      data-h2-margin="b(top, none) b(bottom, m)"
                      data-h2-display="b(flex)"
                    >
                      <span
                        data-h2-margin="b(right, s)"
                        data-h2-display="m(flex)"
                      >
                        <CheckCircleIcon style={{ width: "1rem" }} />
                      </span>
                      {intl.formatMessage({
                        defaultMessage:
                          "Your manager has agreed to implement this solution.",
                      })}
                    </p>
                    <Checkbox
                      id="employeeSignature"
                      label={intl.formatMessage({
                        defaultMessage: "Employee Signature:",
                      })}
                      name="employeeSignature"
                      rules={{
                        required: intl.formatMessage(errorMessages.required),
                      }}
                      boundingBox
                    />
                  </div>
                </div>
                <div
                  data-h2-margin="b(top, l)"
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(space-between)"
                >
                  <Button
                    type="submit"
                    color="white"
                    mode="solid"
                    data-h2-font-style="b(underline)"
                    data-h2-padding="b(all, s)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "Mark this solution as ineffective",
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
                      defaultMessage: "Mark this solution as working",
                    })}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </LeftSection>
        <RightSection>
          <div data-h2-margin="b(bottom, l)">
            <h2
              data-h2-margin="b(top, none) b(bottom, s)"
              data-h2-font-size="b(h3)"
            >
              {intl.formatMessage({ defaultMessage: "Editing tools" })}
            </h2>
            <p data-h2-margin="b(top, none) b(bottom, s)">
              {intl.formatMessage({
                defaultMessage:
                  "Select the link below to edit the solution information that appears on this page.",
              })}
            </p>
            <Link href="/solutions/identify-a-solution">
              <a
                {...colorMap.blue.solid}
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
                data-h2-radius="b(s)"
                data-h2-display="b(inline-block)"
              >
                {intl.formatMessage({
                  defaultMessage: "Edit this solution's information",
                })}
              </a>
            </Link>
          </div>
          <div data-h2-margin="b(bottom, l)">
            <h2
              data-h2-margin="b(top, none) b(bottom, s)"
              data-h2-font-size="b(h3)"
            >
              {intl.formatMessage({ defaultMessage: "Documents and files" })}
            </h2>
            <div data-h2-display="b(flex)">
              <span data-h2-margin="b(right, s)" data-h2-display="b(flex)">
                <PaperClipIcon style={{ width: "1.25rem" }} />
              </span>
              <a href="#" data-h2-display="b(inline-block)">
                {intl.formatMessage({
                  defaultMessage: "my_ergonomic_assessment.pdf(3MB)",
                })}
              </a>
            </div>
          </div>
          <div>
            <h2
              data-h2-margin="b(top, none) b(bottom, s)"
              data-h2-font-size="b(h3)"
            >
              {intl.formatMessage({ defaultMessage: "History" })}
            </h2>
            <div>
              <p data-h2-margin="b(all, none)">
                {intl.formatMessage({ defaultMessage: "2022/April/03" })}
              </p>
              <p data-h2-margin="b(top, none)">
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "Frank proposed <bold>Noise cancelling headphones</bold> as a solution to this barrier.",
                  },
                  { bold },
                )}
              </p>
            </div>
            <div>
              <p data-h2-margin="b(all, none)">
                {intl.formatMessage({ defaultMessage: "2022/April/03" })}
              </p>
              <p data-h2-margin="b(top, none)">
                {intl.formatMessage({
                  defaultMessage: "Frank added this barrier to their passport.",
                })}
              </p>
            </div>
          </div>
        </RightSection>
      </Page>
    </Layout>
  );
};

export default ViewSolution;
