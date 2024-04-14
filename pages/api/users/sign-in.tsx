import db from "@/libs/server/db";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  console.log(email);
  const user = { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await db.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "hoon",
            ...user,
          },
        },
      },
    },
  });
  console.log(token)
  return res.status(200).end();
}

export default withHandler("POST", handler);
