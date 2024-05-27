import { getClient } from "@/lib/server/database";
import { User } from "@/types";
import { KeyLike, jwtVerify } from 'jose'
import { cookies } from "next/headers";

export async function getUser(): Promise<User | null> {
  "use server";

  const token = cookies().get("token")?.value;
  const secret = process.env.JWT_SECRET_KEY as unknown as KeyLike

  if (!token) return null;

  if (!secret) {
    throw new Error("No secret found");
  }

  let decodedToken: User | any | null = null;

  try {
    decodedToken = await jwtVerify(token, secret);
  } catch (error) {
    // console.error("error", error);

    return null;
  }

  const conn = await getClient();

  const [user] = await conn.query("SELECT * FROM users WHERE email = ?", [
    decodedToken.email,
  ]);

  return user;
}
