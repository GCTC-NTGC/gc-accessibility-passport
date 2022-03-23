import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import useUser from "../lib/useUser";
import Button from "./Button";
import Nav from "./Nav";

interface Header {
  title?: string;
  editButton?: { title: string; link: string };
  center?: boolean;
}

const Header: React.FunctionComponent<Header> = ({
  title,
  editButton,
  center,
}) => {
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
          data-h2-position="b(relative)"
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
            <Image
              src="/logo_goc_colour.svg"
              // layout="fill"
              alt={intl.formatMessage({
                defaultMessage: "Canada's Logo.",
                description: "Alt text for the Canada logo in the Header.",
              })}
              width="300"
              height="30"
            />
            {/* <img
              style={{ width: "20rem" }}
              src={"logo_goc_colour.svg"}
              alt={intl.formatMessage({
                defaultMessage: "Canada's Logo.",
                description: "Alt text for the Canada logo in the Header.",
              })}
            /> */}
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
          alt=""
        />
        <Nav />
        {user?.isLoggedIn && pathname !== "/" ? (
          <div
            data-h2-position="b(relative)"
            data-h2-padding="b(all, m) s(right-left, xl)"
            data-h2-display="b(flex)"
            // data-h2-justify-content="b(space-between)"
            {...(center
              ? { "data-h2-justify-content": "b(center)" }
              : { "data-h2-justify-content": "b(space-between)" })}
            data-h2-align-items="b(center)"
            data-h2-margin="b(top, xl)"
          >
            <h1
              data-h2-margin="b(all, none) b(left, m)"
              data-h2-font-weight="b(600)"
            >
              {title}
            </h1>
            {editButton && (
              <Link href={editButton.link} key={editButton.title}>
                <a title={editButton.title}>
                  <Button
                    color="blue"
                    mode="outline"
                    data-h2-padding="b(top-bottom, s) b(right-left, m)"
                  >
                    {editButton.title}
                  </Button>
                </a>
              </Link>
            )}
          </div>
        ) : (
          <>
            {pathname === ("/login" || "/register") ? (
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
                    <Link href="/login">
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
