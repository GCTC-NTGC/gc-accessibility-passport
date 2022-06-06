import { LinkIcon } from "@heroicons/react/outline";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Button from "../../components/Button";
import { Checkbox } from "../../components/formComponents";
import Layout from "../../components/Layout";
import Page, { RightSection, LeftSection } from "../../components/Page";
import { strong } from "../../helpers/format";
import { errorMessages } from "../../messages";

type FormValues = {
  managerConversation: boolean;
  employeeSignature: boolean;
};

const ViewSolution: React.FunctionComponent = () => {
  const intl = useIntl();
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const onSubmit = async (): Promise<void> => {
    alert("A notification has been sent!");
  };

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: "Frank’s Solution: Noise-cancelling headphones",
      })}
      headTitle={intl.formatMessage({
        defaultMessage:
          "Frank’s Solution: Noise-cancelling headphones - GC Workplace Accessibility Passport",
      })}
      crumbs={[
        {
          title: intl.formatMessage({
            defaultMessage: "My Dashboard",
            description: "Breadcrumb title.",
          }),
          href: "/manager/manager-dashboard",
        },
        {
          title: "Frank Turot",
          href: "/manager/view-employee-passport",
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Noise in the workplace",
            description: "Breadcrumb title.",
          }),
          href: "/manager/view-employee-barrier",
        },
        {
          title: intl.formatMessage({
            defaultMessage: "Noise cancelling headphones",
            description: "Breadcrumb title.",
          }),
        },
      ]}
    >
      <Page>
        <LeftSection>
          <p data-h2-margin="b(top, none) b(bottom, m)">
            {intl.formatMessage({
              defaultMessage:
                "Here, you will find one or more solutions to the Noise in the workplace barrier. Review, action the solution and indicate its status.",
            })}
          </p>
          <div>
            <h2
              data-h2-margin="b(top, none) b(bottom, m)"
              data-h2-font-size="b(h3)"
            >
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
                    "Noise canceling headphones are designed to reduce exposure to unwanted background noise.",
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
                      defaultMessage:
                        "GC Workplace Accessibility Passport Agreement",
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
                        "My employee and I have had a conversation about the barrier and solution(s)",
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
                        "This section should be completed jointly by the employee and their manager. Its purpose is to record the solutions- taken from above (e.g., tools,  services, or support measures) that a manager has agreed to provide.",
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
                    <h3
                      data-h2-margin="b(top, none) "
                      data-h2-font-size="b(h5)"
                      data-h2-font-weight="b(600)"
                    >
                      {intl.formatMessage({
                        defaultMessage: "Implementation agreement",
                      })}
                    </h3>
                    <p data-h2-margin="b(top, none) b(bottom, m)">
                      {intl.formatMessage({
                        defaultMessage:
                          "By clicking this button, you are agreeing, as Frank’s manager, that you will implement this solution as soon as possible. Frank will be notified, and this agreement will appear in the barrier’s history.",
                      })}
                    </p>
                  </div>
                </div>
                <div data-h2-margin="b(top, l)">
                  <Button
                    type="submit"
                    color="blue"
                    mode="solid"
                    data-h2-font-style="b(underline)"
                    data-h2-padding="b(all, s)"
                  >
                    {intl.formatMessage({
                      defaultMessage: "I agree to action this solution",
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
              {intl.formatMessage({ defaultMessage: "Documents and files" })}
            </h2>
            <div data-h2-display="b(flex)">
              <span data-h2-margin="b(right, s)" data-h2-display="b(flex)">
                <LinkIcon style={{ width: "1rem" }} />
              </span>
              <a href="#" data-h2-display="b(inline-block)">
                my_ergonomic_assessment.pdf(3MB)
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
            <div data-h2-border="b(darkgray, bottom, solid, s)">
              <p data-h2-margin="b(all, none)">
                {intl.formatMessage({ defaultMessage: "2022/April/03" })}
              </p>
              <p data-h2-margin="b(top, none)">
                {intl.formatMessage(
                  {
                    defaultMessage:
                      "Frank proposed <strong>Noise cancelling headphones</strong> as a solution to this barrier.",
                  },
                  { strong },
                )}
              </p>
            </div>
            <div>
              <p data-h2-margin="b(bottom, none)">
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
