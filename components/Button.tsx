import React from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** The style type of the element. */
  color: "blue" | "lightblue" | "darkblue" | "white";
  /** The style mode of the element. */
  mode: "solid" | "outline" | "inline";
  /** The type of button. */
  type?: "button" | "submit" | "reset" | undefined;
}

const colorMap: Record<
  "blue" | "lightblue" | "darkblue" | "white",
  Record<"solid" | "outline" | "inline", Record<string, string>>
> = {
  blue: {
    solid: {
      "data-h2-border": "b(blue, all, solid, s)",
      "data-h2-bg-color": "b(blue)",
      "data-h2-font-color": "b(black)",
    },
    outline: {
      "data-h2-border": "b(blue, all, solid, s)",
      "data-h2-bg-color": "b(blue)",
      "data-h2-font-color": "b(black)",
    },
    inline: {
      "data-h2-border": "b(white[0], all, solid, s)",
      "data-h2-bg-color": "b(white[0])",
      "data-h2-font-color": "b(black)",
    },
  },
  lightblue: {
    solid: {
      "data-h2-border": "b(lightblue, all, solid, s)",
      "data-h2-bg-color": "b(lightblue)",
      "data-h2-font-color": "b(black)",
    },
    outline: {
      "data-h2-border": "b(lightblue, all, solid, s)",
      "data-h2-bg-color": "b(lightblue)",
      "data-h2-font-color": "b(black)",
    },
    inline: {
      "data-h2-border": "b(white[0], all, solid, s)",
      "data-h2-bg-color": "b(white[0])",
      "data-h2-font-color": "b(black)",
    },
  },
  darkblue: {
    solid: {
      "data-h2-border": "b(darkblue, all, solid, s)",
      "data-h2-bg-color": "b(darkblue)",
      "data-h2-font-color": "b(black)",
    },
    outline: {
      "data-h2-border": "b(darkblue, all, solid, s)",
      "data-h2-bg-color": "b(darkblue)",
      "data-h2-font-color": "b(black)",
    },
    inline: {
      "data-h2-border": "b(white[0], all, solid, s)",
      "data-h2-bg-color": "b(white[0])",
      "data-h2-font-color": "b(black)",
    },
  },
  white: {
    solid: {
      "data-h2-border": "b(white, all, solid, s)",
      "data-h2-bg-color": "b(white)",
      "data-h2-font-color": "b(black)",
    },
    outline: {
      "data-h2-border": "b(white, all, solid, s)",
      "data-h2-bg-color": "b(white[0])",
      "data-h2-font-color": "b(black)",
    },
    inline: {
      "data-h2-border": "b(white[0], all, solid, s)",
      "data-h2-bg-color": "b(white[0])",
      "data-h2-font-color": "b(black)",
    },
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  color,
  mode,
  ...rest
}): React.ReactElement => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || "button"}
      data-h2-radius="b(s)"
      data-h2-font-size="b(caption) m(normal)"
      {...colorMap[color][mode]}
      style={{
        cursor: "pointer",
        overflowWrap: "break-word",
        width: "100%",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
