import Link from "next/link";
import * as React from "react";
import { colorMap } from "./Button";

interface NewButtonProps {
  href: string;
  title: string;
}

const NewButton: React.FunctionComponent<NewButtonProps> = ({
  href,
  title,
}) => {
  return (
    <Link href={href}>
      <a
        {...colorMap["lightblue"]["solid"]}
        data-h2-padding="b(top-bottom, s) b(right-left, l)"
        data-h2-font-style="b(underline)"
        data-h2-border="b(darkblue, all, dashed, s)"
        data-h2-radius="b(s)"
        data-h2-font-size="b(caption) m(normal)"
        data-h2-text-align="b(center)"
      >
        {title}
      </a>
    </Link>
  );
};

export default NewButton;
