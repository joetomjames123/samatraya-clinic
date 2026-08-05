import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const FRAMES = Array.from(
  { length: 240 },
  (_, i) => `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.png`
);
const FRAME_W = 1920;
const FRAME_H = 1080;

export function ScrollFrames() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIndexRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = FRAMES.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    imagesRef.current = imgs;

    // Wait for the first frame to be drawable, then mark ready
    const first = imgs[0];
    const onFirst = () => { if (!cancelled) setReady(true); };
    if (first.complete && first.naturalWidth > 0) onFirst();
    else first.addEventListener("load", onFirst, { once: true });

    return () => { cancelled = true; };
  }, []);

  // Size canvas to its container with DPR
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      currentIndexRef.current = -1; // force redraw
      draw();
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [ready]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const progress = scrollYProgress.get();
    const idx = Math.min(FRAMES.length - 1, Math.max(0, Math.round(progress * (FRAMES.length - 1))));
    if (idx === currentIndexRef.current) return;
    let img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // fall back to nearest loaded frame
      for (let d = 1; d < FRAMES.length; d++) {
        const a = imagesRef.current[Math.max(0, idx - d)];
        const b = imagesRef.current[Math.min(FRAMES.length - 1, idx + d)];
        if (a && a.complete && a.naturalWidth > 0) { img = a; break; }
        if (b && b.complete && b.naturalWidth > 0) { img = b; break; }
      }
      if (!img || !img.complete || img.naturalWidth === 0) return;
    }
    currentIndexRef.current = idx;

    // Fit image inside canvas using "contain" so the centered logo stays centered
    const cw = canvas.width;
    const ch = canvas.height;
    const ir = FRAME_W / FRAME_H;
    const cr = cw / ch;
    let dw, dh, dx, dy;
    if (cr > ir) {
      dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2;
    } else {
      dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2;
    }
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#efe8d7";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        draw();
      });
    };
    const unsub = scrollYProgress.on("change", onScroll);
    onScroll();
    return () => {
      unsub();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress, ready]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-cream">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          aria-label="Samatraya scrolling brand animation"
        />
        {/* subtle scroll cue */}
        <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-forest-deep/55">
          Scroll
        </div>
      </div>
    </div>
  );
}
