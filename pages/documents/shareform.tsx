import { ExclamationCircleIcon } from "@heroicons/react/outline";
import * as React from "react";
import { useIntl } from "react-intl";
import Alert from "../../components/Alert";
import Form from "../../components/ShareForm";
import Layout from "../../components/Layout";
import Page from "../../components/Page";

interface ShareFormProps {}

const ShareForm: React.FunctionComponent<ShareFormProps> = (props) => {
  const intl = useIntl();

  return (
    <Layout
      center
      title={intl.formatMessage({
        defaultMessage: "Share “Example file #1”",
      })}
    >
      <Page
        data-h2-justify-content="b(center)"
        data-h2-flex-direction="b(column)"
      >
        <div data-h2-width="s(50)" style={{ margin: "auto" }}>
          <h2 data-h2-margin="b(all, none)" data-h2-font-size="b(h3)">
            {intl.formatMessage({
              defaultMessage: "Share with someone new",
            })}
          </h2>
          <p>
            {intl.formatMessage({
              defaultMessage:
                "Below you can share “Example file #1” with an individual. Once shared, an invitation will be sent, requiring them to accept. You can remove their access to your documents at any time.",
            })}
          </p>
          <Alert
            icon={<ExclamationCircleIcon style={{ width: "1.25rem" }} />}
            message={intl.formatMessage({
              defaultMessage:
                "Please note that by sharing this document, the recipient can see linked situations, barriers, and solutions.",
            })}
          />
          <Form
            submitText={intl.formatMessage({
              defaultMessage: "Share this document",
            })}
            cancelButton
          />
        </div>
      </Page>
    </Layout>
  );
};

export default ShareForm;
