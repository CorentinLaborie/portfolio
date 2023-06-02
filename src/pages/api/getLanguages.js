// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import executeQuery from "@/lib/db";

export default async function handler(req, res) {
  try {
    console.log("req BODY", req.body)
    const result = await executeQuery({
      query: 'SELECT * FROM language',
      values: [],
  });
  console.log( "ttt",result );
  res.status(200).json({ languages: result })
} catch ( error ) {
  res.status(400).json({ languages: error })
}
}
