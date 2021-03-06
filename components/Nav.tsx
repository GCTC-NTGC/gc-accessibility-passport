import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useIntl } from "react-intl";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";

const Nav: React.FunctionComponent = () => {
  const { user, mutateUser } = useUser();
  const { pathname, push } = useRouter();
  const intl = useIntl();
  const activeLink: {
    "data-h2-font-weight": string;
    "aria-current": "page";
  } = {
    "data-h2-font-weight": "b(600)",
    "aria-current": "page",
  };
  return (
    <nav
      data-h2-position="b(relative)"
      data-h2-display="b(flex)"
      data-h2-justify-content="b(space-between)"
      data-h2-margin="b(right-left, xl)"
    >
      <ul
        data-h2-display="b(flex)"
        data-h2-justify-content="b(center) s(space-between)"
        data-h2-flex-wrap="b(wrap)"
      >
        <li data-h2-margin="b(all, s) b(left, none)">
          <Link href="/">
            <a {...(pathname === "/" && activeLink)}>
              {intl.formatMessage({
                defaultMessage: "Home",
                description: "Home nav link.",
              })}
            </a>
          </Link>
        </li>
        {user?.isSignedIn === true && (
          <>
            <li data-h2-margin="b(all, s)">
              <Link href="/passport">
                <a {...(pathname === "/passport" && activeLink)}>
                  {intl.formatMessage({
                    defaultMessage: "My passport",
                  })}
                </a>
              </Link>
            </li>
            <li data-h2-margin="b(all, s)">
              <Link href="#">
                <a {...(pathname === "/sharing-and-permissions" && activeLink)}>
                  {intl.formatMessage({
                    defaultMessage: "Sharing and permissions",
                  })}
                </a>
              </Link>
            </li>
            <li data-h2-margin="b(all, s)">
              <Link href="#">
                <a {...(pathname === "/resources" && activeLink)}>
                  {intl.formatMessage({
                    defaultMessage: "Resources",
                  })}
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
      <ul data-h2-display="b(flex)">
        {user?.isSignedIn === true && (
          <li data-h2-margin="b(top-bottom, s) b(left, s)">
            {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/api/sign-out"
              onClick={async (e) => {
                e.preventDefault();
                mutateUser(
                  await fetchJson("/api/sign-out", { method: "POST" }),
                  false,
                );
                push("/");
              }}
            >
              {intl.formatMessage({
                defaultMessage: "Sign out",
                description: "Sign out nav link.",
              })}
            </a>
          </li>
        )}
        {user?.isSignedIn === false && (
          <>
            <li data-h2-margin="b(all, s)">
              <Link href="/register">
                <a>
                  {intl.formatMessage({
                    defaultMessage: "Register",
                  })}
                </a>
              </Link>
            </li>
            <li data-h2-margin="b(all, s)">
              <Link href="/sign-in">
                <a>
                  {intl.formatMessage({
                    defaultMessage: "Sign in",
                  })}
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
