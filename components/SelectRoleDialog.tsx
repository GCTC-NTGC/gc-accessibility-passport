import * as React from "react";
import { useIntl } from "react-intl";
import Button from "./Button";
import Dialog from "./Dialog";

interface SelectRoleDialogProps {
  isOpen: boolean;
  handleSelectRole: (isManager: boolean) => void;
}

const SelectRoleDialog: React.FunctionComponent<SelectRoleDialogProps> = ({
  isOpen,
  handleSelectRole,
}) => {
  const intl = useIntl();
  return (
    <>
      <Dialog
        onDismiss={() => {
          /* do nothing */
        }}
        isOpen={isOpen}
        title={intl.formatMessage({ defaultMessage: "Select a role" })}
        footer={
          <div data-h2-display="b(flex)">
            <div style={{ flex: 1 }} data-h2-padding="b(right, m)">
              <Button
                type="button"
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
                onClick={() => handleSelectRole(false)}
              >
                {intl.formatMessage({
                  defaultMessage: "Sign in to my own passport",
                })}
              </Button>
            </div>
            <div style={{ flex: 1 }}>
              <Button
                type="button"
                color="blue"
                mode="solid"
                data-h2-font-style="b(underline)"
                data-h2-padding="b(all, s)"
                onClick={() => handleSelectRole(true)}
              >
                {intl.formatMessage({
                  defaultMessage: "Sign in as a manager",
                })}
              </Button>
            </div>
          </div>
        }
      >
        <p>
          {intl.formatMessage({
            defaultMessage:
              "When logging into the passport application, you have the opportunity to access two different roles: a passport owner, and a manager.",
          })}
        </p>
        <p>
          {intl.formatMessage({
            defaultMessage:
              "The passport owner role allows you to view, edit, and share your own passport.",
          })}
        </p>
        <p>
          {intl.formatMessage({
            defaultMessage:
              "The manager roles allows you to view your employees' passport information if they've chosen to share it with you.",
          })}
        </p>
        <p>
          {intl.formatMessage({
            defaultMessage:
              "You can switch roles at any time using the link in the main site navigation.",
          })}
        </p>
      </Dialog>
    </>
  );
};

export default SelectRoleDialog;
