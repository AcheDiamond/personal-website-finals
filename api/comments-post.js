if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  return res.status(500).json({ error: "Missing Supabase environment variables" });
}
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const name = (body?.name || "").trim();
    const comment = (body?.comment || "").trim();

    if (!name || !comment) return res.status(400).json({ error: "name and comment are required" });
    if (name.length > 40) return res.status(400).json({ error: "name too long (max 40)" });
    if (comment.length > 300) return res.status(400).json({ error: "comment too long (max 300)" });

    const { data, error } = await supabase
      .from("comments")
      .insert([{ name, comment }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ data: data?.[0] });
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }
}