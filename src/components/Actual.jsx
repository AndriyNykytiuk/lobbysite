import React, { useEffect, useMemo, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbx2bnT5V5vvCnt6pCgLFzasZWyEwCj1OM5m0xSLrLu1j8Hrv0jXj-Tng3EVU0TtPQlP/exec"; 
const PAGE_SIZE = 3;

export default function App() {
  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <NewsShowcase />
    </div>
  );
}

function NewsShowcase() {
  const [page, setPage] = useState(1);
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(API_URL, { cache: "no-store" });
        const contentType = res.headers.get("content-type") || "";

        if (!contentType.includes("application/json")) {
          const text = await res.text();
          throw new Error("API не повернув JSON:\n" + text.slice(0, 300));
        }

        const data = await res.json();
        if (!alive) return;

        setAll(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!alive) return;
        setAll([]);
        setError(e?.message || "Помилка завантаження");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  const news = useMemo(() => {
    return all
      .filter((x) => String(x?.type || "").trim().toLowerCase() === "news")
      .filter((x) => String(x?.title || "").trim())
      .filter((x) => String(x?.date || "").trim())
      .filter((x) => String(x?.url || "").trim())
      .map((x) => ({
        ...x,
        image: String(x?.image || "").trim() || "https://picsum.photos/1200/600",
      }))
      .sort((a, b) => String(b.date).localeCompare(String(a.date))); 
  }, [all]);

  const totalPages = Math.max(1, Math.ceil(news.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (pageSafe - 1) * PAGE_SIZE;
    return news.slice(start, start + PAGE_SIZE);
  }, [news, pageSafe]);

   
  const featured = pageItems[0];

  if (loading) return <div>Loading…</div>;

  if (error) {
    return (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <b>Помилка:</b>
        {"\n"}
        {error}
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div style={{ opacity: 0.7 }}>
        Немає новин. Перевір у Sheet: type=news, published=TRUE, title/date/url/image.
      </div>
    );
  }

  return (
    <section style={{ display: "grid", gap: 16 }}>
      {/* HERO */}
      {featured && (
        <a
          href={featured.url}
          style={{
            position: "relative",
            height: 340,
            borderRadius: 28,
            overflow: "hidden",
            textDecoration: "none",
            color: "white",
            background: "#ddd",
          }}
        >
          <img
            src={featured.image}
            alt={featured.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div style={{ position: "absolute", left: 28, bottom: 24, maxWidth: 780 }}>
            <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.05 }}>
              {featured.title}
            </div>
            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.85 }}>
              {featured.date}
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: 22,
              bottom: 22,
              width: 54,
              height: 54,
              borderRadius: 999,
              display: "grid",
              placeItems: "center",
              background: "rgba(255,255,255,0.9)",
              color: "#000",
              fontSize: 22,
            }}
          >
            →
          </div>
        </a>
      )}

      {/* 3 CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {pageItems.map((x) => (
          <a
            key={x.id || `${x.date}-${x.title}`}
            href={x.url}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                height: 210,
                background: "#eee",
              }}
            >
              <img
                src={x.image}
                alt={x.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ marginTop: 12, fontWeight: 900, fontSize: 18, lineHeight: 1.15 }}>
              {x.title}
            </div>
            <div style={{ marginTop: 6, fontSize: 12, opacity: 0.6 }}>{x.date}</div>
          </a>
        ))}
      </div>

      {/* PAGINATION */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {Array.from({ length: totalPages }).map((_, i) => {
          const n = i + 1;
          const active = n === pageSafe;
          return (
            <button
              key={n}
              onClick={() => setPage(n)}
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.25)",
                background: active ? "rgba(0,0,0,0.1)" : "transparent",
                cursor: "pointer",
              }}
              aria-current={active ? "page" : undefined}
            >
              {n}
            </button>
          );
        })}
      </div>
    </section>
  );
}
