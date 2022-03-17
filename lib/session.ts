// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from "iron-session";
import type { Barrier } from "../pages/api/barrier";
import type { User } from "../pages/api/user";

console.log(process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD); // TODO: Read up on env vars in nextjs to fix this undefined issue.

export const sessionOptions: IronSessionOptions = {
  password: "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8",
  cookieName: "iron-session/examples/next.js",
  cookieOptions: {
    secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: User;
    barriers?: Barrier[];
  }
}
