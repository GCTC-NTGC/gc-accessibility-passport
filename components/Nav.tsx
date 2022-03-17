import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useIntl } from "react-intl";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";

const Nav: React.FunctionComponent = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  const intl = useIntl();

  return (
    <nav
      data-h2-position="b(relative)"
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column)"
      data-h2-justify-content="b(space-between)"
      data-h2-margin="b(right-left, xl)"
    >
      <ul
        data-h2-display="b(flex)"
        data-h2-justify-content="b(center) s(space-between)"
        data-h2-flex-wrap="b(wrap)"
      >
        <div
          data-h2-display="b(flex)"
          data-h2-justify-content="b(center) s(space-between)"
          data-h2-flex-wrap="b(wrap)"
        >
          <li data-h2-margin="b(all, m)">
            <Link href="/">
              <a>
                {intl.formatMessage({
                  defaultMessage: "Home",
                  description: "Home nav link.",
                })}
              </a>
            </Link>
          </li>
          {user?.isLoggedIn === true && (
            <>
              <li data-h2-margin="b(all, m)">
                <Link href="/passport">
                  <a>
                    {intl.formatMessage({
                      defaultMessage: "My passport",
                      description: "My passport nav link.",
                    })}
                  </a>
                </Link>
              </li>
              <li data-h2-margin="b(all, m)">
                <Link href="/">
                  <a>
                    {intl.formatMessage({
                      defaultMessage: "Help and Resources",
                      description: "Help and Resources nav link.",
                    })}
                  </a>
                </Link>
              </li>
            </>
          )}
        </div>
        {user?.isLoggedIn === true && (
          <li data-h2-margin="b(all, m)">
            {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
            <a
              href="/api/logout"
              onClick={async (e) => {
                e.preventDefault();
                mutateUser(
                  await fetchJson("/api/logout", { method: "POST" }),
                  false,
                );
                router.push("/");
              }}
            >
              {intl.formatMessage({
                defaultMessage: "Logout",
                description: "Logout nav link.",
              })}
            </a>
          </li>
        )}
        {user?.isLoggedIn === false && (
          <li data-h2-margin="b(all, m)">
            <Link href="/login">
              <a>
                {intl.formatMessage({
                  defaultMessage: "Login",
                  description: "Login nav link.",
                })}
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
