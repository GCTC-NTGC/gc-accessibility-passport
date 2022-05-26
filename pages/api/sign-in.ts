import type { User } from "./user";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(signInRoute, sessionOptions);

async function signInRoute(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const { name, isManager } = await req.body;

  try {
    const user = { isLoggedIn: true, name, isManager } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
