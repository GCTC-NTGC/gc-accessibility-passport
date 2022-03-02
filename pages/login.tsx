import React, { useState } from "react";
import Form from "../components/Form";
import fetchJson, { FetchError } from "../lib/fetchJson";
import useUser from "../lib/useUser";

const Login: React.FunctionComponent = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="login">
      <Form
        errorMessage={errorMsg}
        onSubmit={async function handleSubmit(event) {
          event.preventDefault();

          const body = {
            username: event.currentTarget.username.value,
          };

          try {
            mutateUser(
              await fetchJson("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              }),
            );
          } catch (error) {
            if (error instanceof FetchError) {
              setErrorMsg(error.data.message);
            } else {
              console.error("An unexpected error happened:", error);
            }
          }
        }}
      />
    </div>
  );
};

export default Login;
