import { cookies } from "next/headers";

export default async function getUsers() {
  const res = await fetch("http://localhost:4000", {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  return res.json();
}
