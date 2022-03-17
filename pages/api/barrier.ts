import { NextApiRequest, NextApiResponse } from "next";

export type Barrier = {
  id: string;
  title: string;
  updates: number;
};

const barriers: Barrier[] = [
  {
    id: "1",
    title: "Taking notes in meetings",
    updates: 3,
  },
  {
    id: "1",
    title: "Hearing people approach my workstation",
    updates: 0,
  },
  {
    id: "1",
    title: "Artificial light sensitivity",
    updates: 0,
  },
];

export default async function barrierRoute(
  req: NextApiRequest,
  res: NextApiResponse<Barrier[]>,
): Promise<void> {
  res.status(200).json(barriers);
}
