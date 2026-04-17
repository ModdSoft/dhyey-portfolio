import { useEffect, useRef } from "react";

export default function useSectionAnalytics() {
  const timers = useRef({});
  const data = useRef({});

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            timers.current[id] = Date.now();
            if (!data.current[id]) {
              data.current[id] = { views: 0, totalTime: 0 };
            }
            data.current[id].views += 1;
            if (window.gtag) {
              window.gtag("event", "section_view", { section_id: id });
            }
          } else if (timers.current[id]) {
            const elapsed = Date.now() - timers.current[id];
            data.current[id].totalTime += elapsed;
            delete timers.current[id];
            if (window.gtag) {
              window.gtag("event", "section_leave", {
                section_id: id,
                time_spent_ms: elapsed,
              });
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((s) => observer.observe(s));

    window.__portfolioAnalytics = () => {
      const result = {};
      Object.keys(data.current).forEach((id) => {
        const d = data.current[id];
        const current = timers.current[id]
          ? Date.now() - timers.current[id]
          : 0;
        const total = d.totalTime + current;
        result[id] = {
          views: d.views,
          avgTimeSeconds: Math.round(total / d.views / 1000),
          totalTimeSeconds: Math.round(total / 1000),
        };
      });
      console.table(result);
      return result;
    };

    return () => observer.disconnect();
  }, []);
}
