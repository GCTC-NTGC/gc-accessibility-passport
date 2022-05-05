import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";

const Passport: React.FunctionComponent = () => {
  const intl = useIntl();
  return (
    <div data-h2-display="b(flex)" data-h2-flex-direction="b(column)">
      <Link href="/barriers/identify-a-barrier">
        <a title={intl.formatMessage({ defaultMessage: "Identify a barrier" })}>
          {intl.formatMessage({ defaultMessage: "Identify a barrier" })}
        </a>
      </Link>
      <Link href="/review-barrier">
        <a
          title={intl.formatMessage({
            defaultMessage: "Review Barrier info form",
          })}
        >
          {intl.formatMessage({ defaultMessage: "Review Barrier info form" })}{" "}
        </a>
      </Link>

      <Link href="solutions/identify-a-solution">
        <a
          title={intl.formatMessage({
            defaultMessage: "Identify a solution",
          })}
        >
          {intl.formatMessage({ defaultMessage: "Identify a solution" })}
        </a>
      </Link>
      <Link href="solutions/identify-a-solution-2">
        <a
          title={intl.formatMessage({
            defaultMessage: "Identify a solution (cont.)",
          })}
        >
          {intl.formatMessage({
            defaultMessage: "Identify a solution (cont.)",
          })}
        </a>
      </Link>
      <Link href="/manager-info">
        <a
          title={intl.formatMessage({
            defaultMessage: "Manager info form",
          })}
        >
          {intl.formatMessage({ defaultMessage: "Manager info form" })}
        </a>
      </Link>
      <Link href="/view-employee-barrier">
        <a
          title={intl.formatMessage({
            defaultMessage: "View Employee Barrier",
          })}
        >
          {intl.formatMessage({
            defaultMessage: "View Employee Barrier",
          })}
        </a>
      </Link>
      <Link href="/manage-permissions">
        <a
          title={intl.formatMessage({
            defaultMessage: "Manage Permissions",
          })}
        >
          {intl.formatMessage({
            defaultMessage: "Manage Permissions",
          })}
        </a>
      </Link>
    </div>
  );
};

export default Passport;
