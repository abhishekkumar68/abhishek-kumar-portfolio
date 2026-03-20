import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import CustomCursor from "./components/layout/CustomCursor";

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const isCoarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.12,
      smoothWheel: !isCoarsePointer,
      syncTouch: !!isCoarsePointer,
      autoRaf: true,
    });

    return () => {
      try {
        lenis.destroy();
      } catch {
        // cleanup
      }
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Home />
    </>
  );
}

export default App;
