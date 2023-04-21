import { URL } from "./url";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const res1 = await fetch(`${URL}/v2/auth`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    })
      .then((res) => res.json())
      .catch((er) =>
        res.status(404).json({ message: "Something went wrong", error: er })
      );

    return res.status(200).json(res1);
  } else {
    res.json({ message: "Not found" });
  }
}
