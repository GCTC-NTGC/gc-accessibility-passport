import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";

interface LinksProps {
  links?: { title: string; link: string }[];
}

const Links: React.FunctionComponent<LinksProps> = ({ links }) => {
  const intl = useIntl();
  const resources = [
    {
      title: intl.formatMessage({ defaultMessage: "Example Resource #1" }),
      link: "/",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example Resource #2" }),
      link: "/",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example Resource #3" }),
      link: "/",
    },
    {
      title: intl.formatMessage({ defaultMessage: "Example Resource #4" }),
      link: "/",
    },
  ];

  return (
    <ul
      data-h2-padding="b(left, m)"
      data-h2-margin="b(bottom, m)"
      style={{ listStyleType: "disc" }}
    >
      {links
        ? links.map(({ title, link }) => (
            <li key={title}>
              <Link href={link}>
                <a title={title} data-h2-font-size="b(caption)">
                  {title}
                </a>
              </Link>
            </li>
          ))
        : resources.map(({ title, link }) => (
            <li key={title}>
              <Link href={link}>
                <a title={title} data-h2-font-size="b(caption)">
                  {title}
                </a>
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default Links;
