import { divide } from "lodash";
import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import Button, { colorMap } from "./Button";
import Dialog from "./Dialog";

interface SelectRoleDialogProps {
  isOpen: boolean;
}

const SelectRoleDialog: React.FunctionComponent<SelectRoleDialogProps> = ({
  isOpen,
}) => {
  const intl = useIntl();
  return (
    <>
      <Dialog
        onDismiss={() => {}}
        isOpen={isOpen}
        title={intl.formatMessage({ defaultMessage: "Select a role" })}
        footer={
          <div>
            <Link href="/passport">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-display="b(block)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Log in to my own passport",
                })}
              </a>
            </Link>
            <Link href="/manager/manager-dashboard">
              <a
                {...colorMap.blue.solid}
                data-h2-padding="b(all, s)"
                data-h2-width="b(100)"
                data-h2-display="b(block)"
                data-h2-text-align="b(center)"
                data-h2-radius="b(s)"
              >
                {intl.formatMessage({
                  defaultMessage: "Log in as a manager",
                })}
              </a>
            </Link>
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
