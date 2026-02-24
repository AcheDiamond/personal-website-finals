export async function getComments() {
  const r = await fetch("/api/comments-get");
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || "Failed to fetch comments");
  return j.data;
}

export async function postComment(payload) {
  const r = await fetch("/api/comments-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || "Failed to post comment");
  return j.data;
}