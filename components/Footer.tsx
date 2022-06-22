import * as React from "react";
import { useIntl } from "react-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FunctionComponent = () => {
  const intl = useIntl();
  const links = [
    {
      route: "mailto:talent.cloud-nuage.de.talents@tbs-sct.gc.ca",
      title: intl.formatMessage({
        defaultMessage: "Submit feedback to GC Talent Cloud via email.",
        description: "Title for the feedback link in the Footer.",
      }),
      label: intl.formatMessage({
        defaultMessage: "Feedback",
        description: "Label for the feedback link in the Footer.",
      }),
    },
    {
      route: `/${intl.locale}/terms-and-conditions`,
      title: intl.formatMessage({
        defaultMessage: "View our terms and conditions.",
        description: "Title for the terms and conditions link in the Footer.",
      }),
      label: intl.formatMessage({
        defaultMessage: "Terms & Conditions",
        description: "Label for the terms and conditions link in the Footer.",
      }),
    },
    {
      route: `/${intl.locale}/privacy-notice`,
      title: intl.formatMessage({
        defaultMessage: "View our privacy policy.",
        description: "Title for the privacy link in the Footer.",
      }),
      label: intl.formatMessage({
        defaultMessage: "Privacy Policy",
        description: "Label for the privacy link in the Footer.",
      }),
    },
    {
      route: `https://www.canada.ca/${intl.locale}.html`,
      title: intl.formatMessage({
        defaultMessage: "Visit Canada.ca",
        description: "Title for the Canada link in the Footer.",
      }),
      label: intl.formatMessage({
        defaultMessage: "Canada.ca",
        description: "Label for the Canada link in the Footer.",
      }),
    },
  ];
  return (
    <>
      <footer className="footer" style={{ marginTop: "auto" }}>
        <div
          data-h2-border="b(darkblue, top-bottom, solid, s)"
          data-h2-bg-color="b(lightblue)"
          data-h2-text-align="b(center)"
          data-h2-padding="b(all, s)"
        >
          <Link href="#">
            <a>
              {intl.formatMessage({
                defaultMessage: "Read our Accessibility Statement",
              })}
            </a>
          </Link>
        </div>
        <div
          data-h2-bg-color="b(lightgray[.6])"
          data-h2-flex-grid="b(middle, contained, flush, xl)"
        >
          <div
            data-h2-flex-item="b(1of1) m(1of2)"
            data-h2-padding="b(left, xl)"
            data-h2-text-align="b(center) m(left)"
          >
            <nav>
              <ul
                style={{ gap: "1rem" }}
                className="reset-ul"
                data-h2-display="b(flex)"
                data-h2-flex-wrap="b(wrap)"
                data-h2-justify-content="b(center) m(flex-start)"
                data-h2-margin="b(bottom, xs)"
              >
                {links.map(({ route, title, label }) => (
                  <li
                    key={label}
                    data-h2-display="b(inline-block)"
                    data-h2-margin="b(top-bottom, none)"
                  >
                    {/* These links must use real anchor links, not the history api, as they may direct to outside of this app. */}
                    <Link href={`${route}`}>
                      <a title={title}>{label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p
              data-h2-font-size="b(caption)"
              data-h2-font-color="b([dark]gray)"
              data-h2-margin="b(bottom, none) b(top, m)"
            >
              {intl.formatMessage(
                {
                  defaultMessage: "Date Modified: {modifiedDate}",
                  description:
                    "Header for the sites last date modification found in the footer.",
                },
                {
                  modifiedDate: new Date(process.env.BUILD_DATE ?? "2022-03-01")
                    .toISOString()
                    .slice(0, 10),
                },
              )}
            </p>
          </div>
          <div
            data-h2-flex-item="b(1of1) m(1of2)"
            data-h2-padding="b(right, xl)"
            data-h2-text-align="b(center) m(right)"
            data-h2-position="b(relative)"
          >
            <Link href={`https://www.canada.ca/${intl.locale}.html`}>
              <a
                title={intl.formatMessage({
                  defaultMessage: "Visit Canada.ca",
                  description: "Title for the Canada logo in the Footer.",
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo_canada.png"
                  alt={intl.formatMessage({
                    defaultMessage: "Symbol of the Government of Canada",
                    description: "Alt text for the Canada logo in the Footer.",
                  })}
                  width="250"
                  height="70"
                />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
