import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";

interface FormFooterProps {
  cancelButton: {
    href: string;
    title?: string;
  };
}

const FormFooter: React.FunctionComponent<FormFooterProps> = ({
  cancelButton,
  children,
  ...rest
}) => {
  const intl = useIntl();
  const { href, title = intl.formatMessage({ defaultMessage: "Cancel" }) } =
    cancelButton;

  return (
    <div
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column) s(row)"
      data-h2-justify-content="b(center) s(space-between)"
      data-h2-align-items="b(center)"
      data-h2-padding="b(top, l)"
      data-h2-border="b(darkgray, top, solid, s)"
      {...rest}
    >
      <Link href={href}>
        <a data-h2-font-size="b(caption) m(normal)" title={title}>
          {title}
        </a>
      </Link>
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(center) s(space-between)"
        data-h2-align-items="b(center)"
      >
        {children}
      </div>
    </div>
  );
};

export default FormFooter;
