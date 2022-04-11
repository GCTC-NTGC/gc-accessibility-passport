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
      <Link href="/barriers/identify-a-barrier-2">
        <a
          title={intl.formatMessage({
            defaultMessage: "Identify a barrier (cont.)",
          })}
        >
          {intl.formatMessage({ defaultMessage: "Identify a barrier (cont.)" })}
        </a>
      </Link>
    </div>
  );
};

export default Passport;
