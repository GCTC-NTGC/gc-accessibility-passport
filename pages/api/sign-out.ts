import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../pages/api/user";

export default withIronSessionApiRoute(signOutRoute, sessionOptions);

function signOutRoute(req: NextApiRequest, res: NextApiResponse<User>): void {
  req.session.destroy();
  res.json({ isSignedIn: false, name: "", isManager: false });
}
