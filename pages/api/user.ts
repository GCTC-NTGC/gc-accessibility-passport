import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export type User = {
  isSignedIn: boolean;
  name: string;
  isManager: boolean;
};

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(
  req: NextApiRequest,
  res: NextApiResponse<User>,
): Promise<void> {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isSignedIn: true,
    });
  } else {
    res.json({
      isSignedIn: false,
      name: "",
      isManager: false,
    });
  }
}
