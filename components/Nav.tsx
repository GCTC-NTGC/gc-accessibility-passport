import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";

const Nav: React.FunctionComponent = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <nav
      data-h2-display="b(flex)"
      data-h2-flex-direction="b(column)"
      data-h2-justify-content="b(space-between)"
      data-h2-position="b(relative)"
      data-h2-font-color="b(white)"
      style={{ minHeight: "20rem" }}
    >
      <Image src="/waves.jpg" layout="fill" />
      <ul
        data-h2-display="b(flex)"
        data-h2-justify-content="b(center) s(space-between)"
        data-h2-flex-wrap="b(wrap)"
      >
        <div
          data-h2-display="b(flex)"
          data-h2-justify-content="b(center) s(space-between)"
          data-h2-flex-wrap="b(wrap)"
          style={{ zIndex: 10 }}
        >
          <li data-h2-margin="b(all, m)">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li data-h2-margin="b(all, m)">
            <Link href="/">
              <a>My Dashboard</a>
            </Link>
          </li>
          <li data-h2-margin="b(all, m)">
            <Link href="/">
              <a>Help and Resources</a>
            </Link>
          </li>
        </div>
        {user?.isLoggedIn === true && (
          <li data-h2-margin="b(all, m)" style={{ zIndex: 10 }}>
            {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
            <a
              href="/api/logout"
              onClick={async (e) => {
                e.preventDefault();
                mutateUser(
                  await fetchJson("/api/logout", { method: "POST" }),
                  false,
                );
                router.push("/login");
              }}
            >
              Logout
            </a>
          </li>
        )}
        {user?.isLoggedIn === false && (
          <li data-h2-margin="b(all, m)" style={{ zIndex: 10 }}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}
      </ul>
      <h1
        data-h2-position="b(relative)"
        data-h2-font-color="b(white)"
        data-h2-font-weight="b(700)"
        data-h2-margin="b(right-left, m)"
      >
        Welcome back, Jake
      </h1>
    </nav>
  );
};

export default Nav;
