import Link from "next/link";
import { useIntl } from "react-intl";

export const PassportCard: React.FunctionComponent<{
  title: string;
  link: { title: string; href: string };
}> = ({ title, link }) => {
  const intl = useIntl();

  return (
    <section
      data-h2-border="b(darkgray, left, solid, m)"
      data-h2-margin="b(top, s)"
      data-h2-shadow="b(m)"
      data-h2-padding="b(all, m)"
      data-h2-display="b(block) s(flex)"
      data-h2-justify-content="b(space-between)"
      data-h2-align-items="b(center)"
    >
      <p
        data-h2-font-size="b(h5)"
        data-h2-margin="b(all, none) b(right, m)"
        data-h2-font-weight="b(700)"
      >
        {title}
      </p>
      <p data-h2-margin="b(right, l) b(top-bottom, none)">
        {intl.formatMessage({
          defaultMessage: "2 solutions awaiting action",
        })}
      </p>
      <Link href={link.href}>
        <a data-h2-margin="b(right, s)">{link.title}</a>
      </Link>
    </section>
  );
};
