import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return res.status(500).json({ error: "Missing SUPABASE_URL or SUPABASE_ANON_KEY" });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // --- robust body parse (works for Vercel Node runtime) ---
    let body = req.body;

    // Some runtimes pass a string
    if (typeof body === "string") {
      body = body ? JSON.parse(body) : {};
    }

    // Some runtimes pass Buffer/Uint8Array
    if (body && (body instanceof Uint8Array || Buffer.isBuffer(body))) {
      const text = Buffer.from(body).toString("utf8");
      body = text ? JSON.parse(text) : {};
    }

    // Fallback if body is undefined/null
    if (!body || typeof body !== "object") body = {};

    const name = String(body.name || "").trim();
    const message = String(body.comment || body.message || "").trim();

    if (!name || !message) return res.status(400).json({ error: "name and message are required" });
    if (name.length > 40) return res.status(400).json({ error: "name too long (max 40)" });
    if (message.length > 300) return res.status(400).json({ error: "message too long (max 300)" });

    const { data, error } = await supabase
      .from("comments")
      .insert([{ name, message }])
      .select("id,name,message,created_at")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ data });
  } catch (e) {
    // Never crash: always return JSON with the actual error message
    return res.status(500).json({
      error: e?.message || "Server error",
    });
  }
}