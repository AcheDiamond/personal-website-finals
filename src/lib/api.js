async function parseJsonSafe(r) {
  const text = await r.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {

    return { _nonJson: true, raw: text };
  }
}

export async function getComments() {
  const r = await fetch("/api/comments-get");
  const j = await parseJsonSafe(r);

  if (!r.ok) {
    const msg = j?.error || (j?._nonJson ? `Non-JSON response: ${String(j.raw).slice(0, 120)}` : null) || "Failed to fetch comments";
    throw new Error(msg);
  }

  if (!j || !j.data) return [];
  return j.data;
}

export async function postComment(payload) {
  const r = await fetch("/api/comments-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const j = await parseJsonSafe(r);

  if (!r.ok) {
    const msg = j?.error || (j?._nonJson ? `Non-JSON response: ${String(j.raw).slice(0, 120)}` : null) || "Failed to post comment";
    throw new Error(msg);
  }

  return j?.data;
}