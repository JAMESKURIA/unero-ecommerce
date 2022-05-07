import { data } from "../../../data";

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  const filtered = data.filter((d) => d.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: "Oops! Article not found" });
  }
}
