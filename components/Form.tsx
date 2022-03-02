import React, { FormEvent } from "react";

interface FormProps {
  errorMessage: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FunctionComponent<FormProps> = ({
  errorMessage,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Type your GitHub username</span>
        <input type="text" name="username" required />
      </label>

      <button type="submit">Login</button>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default Form;
