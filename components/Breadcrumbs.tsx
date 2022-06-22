import React, { Fragment } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export interface BreadcrumbsProps {
  links: { title: string; href?: string; icon?: JSX.Element }[];
}

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({ links }) => {
  const { pathname } = useRouter();
  const activeLink: {
    "data-h2-font-weight": string;
    "aria-current": "page";
  } = {
    "data-h2-font-weight": "b(600)",
    "aria-current": "page",
  };
  if (links.length) {
    return (
      <div
        data-h2-display="b(flex)"
        data-h2-padding="b(all, m) s(right-left, xl)"
        data-h2-bg-color="b(lightblue)"
      >
        {links.map((link, index) => (
          <Fragment key={link.title}>
            {index > 0 && (
              <span
                data-h2-padding="b(right-left, xs)"
                data-h2-display="b(flex)"
                data-h2-align-items="b(center)"
              >
                <ChevronRightIcon style={{ width: "1.4rem" }} />
              </span>
            )}
            {link.href ? (
              <Link
                data-h2-display="b(flex)"
                data-h2-align-items="b(center)"
                key={link.title}
                href={link.href}
              >
                <a {...(pathname === "/" && activeLink)}>
                  {link.icon || ""} {link.title}
                </a>
              </Link>
            ) : (
              <span
                data-h2-display="b(flex)"
                data-h2-align-items="b(center)"
                data-h2-font-weight="b(700)"
                key={link.title}
              >
                {link.icon || ""} {link.title}
              </span>
            )}
          </Fragment>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Breadcrumbs;
