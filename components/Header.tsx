import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";

export const Header: React.FunctionComponent = () => {
  const intl = useIntl();
  const { locale, pathname } = useRouter();
  console.log(pathname);
  return (
    <header data-h2-border="b(gray, bottom, solid, s)">
      <div data-h2-flex-grid="b(middle, contained, flush, xl)">
        <div
          data-h2-flex-item="b(1of1) m(1of2)"
          data-h2-text-align="b(center) m(left)"
        >
          <a
            href={`https://www.canada.ca/${locale}.html`}
            title={intl.formatMessage({
              defaultMessage: "Visit Canada.ca",
              description: "Title for the Canada logo in the Header.",
            })}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ width: "20rem" }}
              src={"logo_goc_colour.svg"}
              alt={intl.formatMessage({
                defaultMessage: "Canada's Logo.",
                description: "Alt text for the Canada logo in the Header.",
              })}
            />
          </a>
        </div>
        <div
          data-h2-flex-item="b(1of1) m(1of2)"
          data-h2-text-align="b(center) m(right)"
        >
          <Link href={`/${pathname}`} locale={locale === "en" ? "fr" : "en"}>
            {locale === "en" ? "English" : "Français"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
