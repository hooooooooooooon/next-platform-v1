import withHandler from "@/lib/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  console.log(data);
  return res.status(200).end();
}

export default withHandler("POST", handler);
