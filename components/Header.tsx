import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import useUser from "../lib/useUser";
import Nav from "./Nav";

interface Header {
  title?: string;
}

const Header: React.FunctionComponent<Header> = ({ title }) => {
  const { user, mutateUser } = useUser();
  const intl = useIntl();
  const { locale, pathname } = useRouter();
  // TODO: Replace links with button wrapped in anchor tag.
  const homeLinksStyling = {
    "data-h2-margin": "b(all, m)",
    "data-h2-bg-color": "b(lightgray)",
    "data-h2-font-color": "b(black)",
    "data-h2-radius": "b(s)",
    "data-h2-padding": "b(right-left, m) b(top-bottom, xxs)",
    "data-h2-shadow": "b(xl)",
  };
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
      <div data-h2-position="b(relative)" data-h2-font-color="b(white)">
        <Image
          src={`${pathname === "/" ? "/beach.png" : "/waves.jpg"}`}
          layout="fill"
        />
        <Nav />
        {user?.isLoggedIn && pathname !== "/" ? (
          <div
            data-h2-position="b(relative)"
            data-h2-padding="b(all, m) s(left, xl)"
          >
            <h1
              data-h2-margin="b(all, none) b(left, m)"
              data-h2-font-weight="b(600)"
            >
              {title ??
                intl.formatMessage({
                  defaultMessage: "Welcome back, Jake",
                  description: "Heading for rest of pages.",
                })}
            </h1>
          </div>
        ) : (
          <>
            {pathname === ("/login" || "register") ? (
              <div
                data-h2-position="b(relative)"
                data-h2-padding="b(all, m) s(left, xl)"
              >
                <h1
                  data-h2-margin="b(all, m)"
                  data-h2-text-align="b(center)"
                  data-h2-font-weight="b(600)"
                >
                  {title}
                </h1>
              </div>
            ) : (
              <div
                data-h2-position="b(relative)"
                data-h2-padding="b(all, none) s(all, xxl) s(top, m)"
              >
                <h1 data-h2-margin="b(all, m)" data-h2-text-align="b(center)">
                  {intl.formatMessage({
                    defaultMessage: "GC Accessibility Passport",
                    description: "Heading for homepage.",
                  })}
                </h1>
                <p data-h2-text-align="b(center)" data-h2-margin="b(all, m)">
                  {intl.formatMessage({
                    defaultMessage:
                      "Private, secure accessibility documentation",
                    description: "Sub-heading for homepage.",
                  })}
                </p>
                <div
                  data-h2-display="b(flex)"
                  data-h2-justify-content="b(center) s(space-evenly)"
                  data-h2-flex-wrap="b(wrap)"
                  data-h2-margin="b(all, m) s(right-left, xxl)"
                >
                  <div {...homeLinksStyling}>
                    <Link href="/">
                      <a>
                        {intl.formatMessage({
                          defaultMessage: "Get started",
                          description: "Get started button on homepage.",
                        })}
                      </a>
                    </Link>
                  </div>
                  <div {...homeLinksStyling}>
                    <Link href="/">
                      <a>
                        {intl.formatMessage({
                          defaultMessage: "Sign in",
                          description: "Sign in button on homepage.",
                        })}
                      </a>
                    </Link>
                  </div>
                  <div {...homeLinksStyling}>
                    <Link href="/">
                      <a>
                        {intl.formatMessage({
                          defaultMessage: "Contact Us",
                          description: "Contact us button on homepage.",
                        })}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
