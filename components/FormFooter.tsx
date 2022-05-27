import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";

interface FormFooterProps {
  cancelButton?: {
    href: string;
    title?: string;
  };
  leftSideActions?: {
    href: string;
    title?: string;
  }[];
}

const FormFooter: React.FunctionComponent<FormFooterProps> = ({
  cancelButton,
  leftSideActions,
  children,
  ...rest
}) => {
  const intl = useIntl();
  const cancel = intl.formatMessage({ defaultMessage: "Cancel" });
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
      {leftSideActions ? (
        <div
          data-h2-display="b(flex)"
          data-h2-justify-content="b(center) s(space-between)"
          data-h2-align-items="b(center)"
        >
          {leftSideActions.map(({ href, title }) => (
            <Link href={href} key={title}>
              <a
                data-h2-font-size="b(caption) m(normal)"
                data-h2-margin="b(right, m)"
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <div
          data-h2-display="b(flex)"
          data-h2-justify-content="b(center) s(space-between)"
          data-h2-align-items="b(center)"
        >
          <Link href={cancelButton?.href || "/"}>
            <a data-h2-font-size="b(caption) m(normal)">
              {cancelButton?.title || cancel}
            </a>
          </Link>
        </div>
      )}
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
