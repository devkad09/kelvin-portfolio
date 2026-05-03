import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    // Immediately show all elements — no scroll animation
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("visible");
    });
  }, []);
}
