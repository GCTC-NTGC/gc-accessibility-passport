import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { PaperClipIcon } from "@heroicons/react/solid";

export const BarrierCard: React.FunctionComponent<{
  title: string;
  documentName: string;
  actionLinks: string[];
}> = ({ title, documentName, actionLinks }) => {
  const intl = useIntl();

  return (
    <section
      data-h2-border="b(darkgray, left, solid, m)"
      data-h2-margin="b(top, s)"
      data-h2-shadow="b(m)"
      data-h2-padding="b(all, m)"
    >
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(space-between)"
        data-h2-margin="b(bottom, s)"
      >
        <p
          data-h2-font-size="b(h5)"
          data-h2-margin="b(all, none) b(right, m)"
          data-h2-font-style="b(underline)"
        >
          {title}
        </p>
        <div>
          {actionLinks &&
            actionLinks.map((element) => {
              return (
                <Link href="#" key={""}>
                  <a data-h2-margin="b(right, s)">
                    {intl.formatMessage(
                      {
                        defaultMessage: "{element}",
                      },
                      { element },
                    )}
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
      <div
        data-h2-display="b(flex)"
        data-h2-justify-content="b(space-between)"
        data-h2-align-items="b(center)"
        data-h2-bg-color="b(lightblue)"
      >
        <p data-h2-margin="b(left, s) b(right, m)">
          {intl.formatMessage({
            defaultMessage:
              "This solution is awaiting confirmation from your manager.",
          })}
        </p>
        <p data-h2-margin="b(right, s)">
          <Link href="#">
            <a>
              {intl.formatMessage({
                defaultMessage: "Review",
              })}
            </a>
          </Link>
        </p>
      </div>
      <p data-h2-margin="b(bottom, none)">
        {intl.formatMessage({
          defaultMessage:
            "This solution applies to me in following situations:",
        })}
      </p>
      <ul data-h2-margin="b(bottom-left, m)" style={{ listStyleType: "disc" }}>
        <li>
          <p data-h2-margin="b(all, none)">
            {intl.formatMessage({
              defaultMessage: "Office Workplace",
            })}
          </p>
        </li>
        <li>
          <p data-h2-margin="b(all, none)">
            {intl.formatMessage({
              defaultMessage: "Remote Workplace",
            })}
          </p>
        </li>
      </ul>
      <div>
        <p>
          {intl.formatMessage(
            {
              defaultMessage:
                "{title} is particularly helpful for me because...",
            },
            { title },
          )}
        </p>
        <div data-h2-display="b(flex)">
          <span data-h2-margin="b(right, xs)" data-h2-display="b(flex)">
            <PaperClipIcon style={{ width: "1.2rem" }} />
          </span>
          <Link data-h2-margin="b(left, s)" href="#">
            <a>{documentName}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
