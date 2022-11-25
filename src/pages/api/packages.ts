import { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const id = req.body;

    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    console.log(docSnap.data());

    res.send(docSnap.data());
  }
};
