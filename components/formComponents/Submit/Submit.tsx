import React from "react";
import { useFormState } from "react-hook-form";
import { Button } from "../../Button";

export const Submit: React.FunctionComponent<{
  text?: string;
  submittedText?: string;
  isSubmittingText?: string;
  color?: "blue" | "lightblue" | "darkblue" | "white";
  mode?: "solid" | "outline" | "inline";
  /** Determines whether the element should be block level and 100% width. */
  block?: boolean;
}> = ({
  text,
  submittedText,
  isSubmittingText,
  color,
  mode,
  block,
  ...rest
}) => {
  const defaultText = "Submit";
  const defaultSubmittedText = "Submitted";
  const defaultIsSubmittingText = "Submitting";

  const { isDirty, isSubmitting, isSubmitted, isValid } = useFormState();
  let currentText = text ?? defaultText;
  if (isSubmitting) {
    currentText = isSubmittingText ?? defaultIsSubmittingText;
  } else if (!isDirty && isSubmitted && isValid) {
    currentText = submittedText ?? defaultSubmittedText;
  }

  return (
    <Button
      color={color || "blue"}
      mode={mode || "solid"}
      type="submit"
      disabled={isSubmitting}
      block={block}
      {...rest}
    >
      {currentText}
    </Button>
  );
};

export default Submit;
