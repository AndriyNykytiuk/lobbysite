import React, { useEffect, useMemo, useState } from "react";
import Arrow from '../pict/arrow.svg'
import Event from './Actual.jsx'
import '../css/calendar.css'
const API_URL =
  "https://script.google.com/macros/s/AKfycbx2bnT5V5vvCnt6pCgLFzasZWyEwCj1OM5m0xSLrLu1j8Hrv0jXj-Tng3EVU0TtPQlP/exec";
const PAGE_SIZE = 3;

function parseLocalDate(yyyyMmDd) {
  const [y, m, d] = String(yyyyMmDd).split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0);
}

function EventsCalendar() {
  const [tab, setTab] = useState("future"); // future | past
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

        // інколи Apps Script може віддати HTML, тоді покажемо текст
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          const text = await res.text();
          throw new Error(
            "API не повернув JSON. Відповідь:\n" + text.slice(0, 400)
          );
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



  const events = useMemo(() => {
    return all
      .filter((x) => String(x?.type || "").trim().toLowerCase() === "event")
      .filter((x) => String(x?.title || "").trim())
      .filter((x) => String(x?.date || "").trim())
      .filter((x) => String(x?.url || "").trim())
      .map((x) => ({ ...x, _d: parseLocalDate(String(x.date).slice(0, 10)) }));
  }, [all]);


  const today0 = useMemo(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
  }, []);

  const filtered = useMemo(() => {
    const isFuture = (d) => d >= today0;

    const list =
      tab === "future"
        ? events.filter((e) => isFuture(e._d)).sort((a, b) => a._d - b._d)
        : events.filter((e) => !isFuture(e._d)).sort((a, b) => b._d - a._d);

    return list;
  }, [events, tab, today0]);

  useEffect(() => {
    setPage(1);
  }, [tab]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (pageSafe - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, pageSafe]);

  if (loading) return <div style={{ padding: 24 }}>Loading…</div>;

  if (error) {
    return (
      <div style={{ padding: 24, whiteSpace: "pre-wrap" }}>
        <b>Помилка:</b>
        {"\n"}
        {error}
        {"\n\n"}
        <div style={{ opacity: 0.7 }}>
          Перевір: Deploy → Web app → “Who has access: Anyone”, і що API відкривається
          в браузері та показує JSON.
        </div>
      </div>
    );
  }

  return (
    <section >
      <h2 className='calendar__title'>Календар подій</h2>

      <div className="calendar__container">
        <div className="calendar__btns">
          <button className="calendar__tab-btn" onClick={() => setTab("future")} disabled={tab === "future"}>
            Майбутні події
          </button>
          <button className="calendar__tab-btn" onClick={() => setTab("past")} disabled={tab === "past"}>
            Минулі події
          </button>
        </div>

        <div className='calendar__events'>
          {pageItems.map((e) => (
            <a
              key={e.id || `${e.date}-${e.title}`}
              href={e.url}
              className="calendar__link"

            >
              <div>
                <div className="calendar__event-title">{e.title}</div>
                <div className="calendar__event-date">{e.date}</div>
              </div>

              <div className="calendar__arrow-btn">
                →
              </div>
            </a>
          ))}

          {filtered.length === 0 && (
            <div className="calendar__empty-message">
              Немає подій. Перевір у Sheet: <b>type=event</b>, <b>published=TRUE</b>,
              дата у форматі <b>YYYY-MM-DD</b>.
            </div>
          )}
        </div>
        <button className='police-btn'><img src={Arrow} alt="" /> </button>
      </div>

      {/*<div className="calendar__pagination">
        {Array.from({ length: totalPages }).map((_, i) => {
          const n = i + 1;
          return (
            <button
              key={n}
              onClick={() => setPage(n)}
              disabled={n === pageSafe}
              className="calendar__page-btn"
            >
              {n}
            </button>
          );
        })}
      </div>*/}
    
    </section>
  );
}

// ✅ Оце головне: Vite очікує default export з App.jsx
export default function App() {
  return <EventsCalendar />;
}
