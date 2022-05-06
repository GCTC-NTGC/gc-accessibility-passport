import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";

export const PermissionsCard: React.FunctionComponent<{
  title: string;
  actionLinks: string[];
}> = ({ title, actionLinks }) => {
  const intl = useIntl();

  return (
    <section
      data-h2-bg-color="b(lightgray)"
      data-h2-margin="b(top, s)"
      data-h2-padding="b(all, m)"
    >
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(space-between)"
        data-h2-margin="b(bottom, s)"
      >
        <p
          data-h2-font-size="b(normal)"
          data-h2-margin="b(all, none) b(right, m)"
          data-h2-font-weight="b(700)"
        >
          {title}
        </p>
        <div>
          {actionLinks &&
            actionLinks.map((element) => {
              return (
                <Link href="#" key={element}>
                  <a data-h2-margin="b(right, s)">{element}</a>
                </Link>
              );
            })}
        </div>
      </div>
      <div>
        <hr data-h2-margin="b(top, s)"></hr>
      </div>
      <p data-h2-margin="b(bottom, none)">
        {intl.formatMessage({
          defaultMessage:
            "Sui has access to the following passport information as your manager: ",
        })}
      </p>
      <ul data-h2-margin="b(bottom-left, m)" style={{ listStyleType: "disc" }}>
        <li>
          <p data-h2-margin="b(all, none)">
            {intl.formatMessage({
              defaultMessage: "Noise in the workplace",
            })}
          </p>
        </li>
        <li>
          <p data-h2-margin="b(all, none)">
            {intl.formatMessage({
              defaultMessage: "Example barrier #2",
            })}
          </p>
        </li>
      </ul>
    </section>
  );
};
