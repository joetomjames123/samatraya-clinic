# Implementation Plan

## Objective
Replace the hero video with a scroll-driven frame-by-frame animation, restyle the hero and intro sections to match the site's cream theme, and update the doctor's photo with the newly uploaded image.

---

## 1. Scroll-Driven Frame Animation (Hero)

**Problem:** The current hero uses a looping video with autoplay. The user wants a scroll-scrubbed animation that advances on scroll down and reverses on scroll up.

**Solution:**
- Extract 64 evenly-spaced frames from the uploaded video (`Separate_leaves_display_text_202606181047.mp4`) — the video is already in the correct chronological order, so this avoids the unreliable PDF reordering problem.
- Crop the bottom-right Gemini watermark from every frame. The video is 1280×720; cropping 128px from the right edge and 80px from the bottom yields a clean 1152×640 image while preserving the exact 16:9 aspect ratio.
- Compress each frame as a quality-80 JPEG and upload via `lovable-assets` to the CDN.
- Build a `ScrollFrames` component:
  - Renders a full-viewport sticky canvas (`position: sticky; top: 0; height: 100vh`) inside a tall scroll container (`~250vh`) so the user has ample scroll distance to scrub through all 64 frames.
  - Uses `framer-motion` `useScroll` + `useTransform` to map scroll progress (0 → 1) to a frame index (0 → 63).
  - Draws the active frame onto a `<canvas>` element via `drawImage` inside a `requestAnimationFrame` loop.
  - Preloads all 64 frames on mount; shows a subtle cream placeholder until the first batch loads.
  - Scrolling back naturally rewinds because the frame index is a pure function of scroll position.
- The hero text, CTA buttons, and dosha strip sit **below** the sticky animation stage so they read as normal page content once the scroll animation completes.

## 2. Restyle Hero + Intro to Match the Site Theme

**Current state:** Hero uses a dark `bg-forest-deep` background with cream text. The rest of the site (Intro, Treatments, Why, Testimonials) uses a light `bg-cream` background with `text-forest-deep` text.

**Changes:**
- **Hero section:** Switch background to `bg-cream`, all text to `text-forest-deep`, accent italic to `text-clay`/`text-gold`. The sticky canvas stage gets a thin `border-forest-deep/10` frame for visual containment.
- **Dosha strip:** Switch from dark transparent to `bg-cream` with `border-forest-deep/15` dividers. Update text colors to forest/moss.
- **Intro section:** Already uses `bg-cream`, so no background change needed. Verify it reads as one continuous scene with the updated hero.
- **Nav:** The nav already switches from transparent to `bg-cream/85` on scroll — this will now blend seamlessly with the cream hero.

## 3. Update Doctor Photo

- Replace `src/assets/doctor.jpg` with the uploaded image (`user-uploads://image.png` / `WhatsApp_Image_2026-06-18_at_1.33.16_PM.jpeg`).
- Upload via `lovable-assets` and update the import in `src/components/site/Doctor.tsx`.

## 4. Manifest + Asset Management

- After uploading the 64 processed frames, write a single `src/assets/scroll-frames.manifest.json` containing the ordered array of CDN URLs. The component imports this manifest to know which images to preload.
- Delete the old `src/assets/hero-leaves.mp4.asset.json` and any unused video imports.

## 5. Verification

- Build the project and visually verify in the preview:
  - The animation scrubs forward on scroll and reverses on scroll-up.
  - No Gemini watermark is visible on any frame.
  - The hero and intro share one cohesive cream/forest palette.
  - The new doctor photo renders correctly in the profile section.
  - Mobile: the sticky canvas stage is one viewport tall, text remains readable, and scroll performance is smooth.

---

## Technical Details (for build reference)

- **Frame processing pipeline:** ffmpeg extraction → PIL crop (0,0,1152,640) → JPEG quality 80 → `lovable-assets create --file`.
- **Canvas drawing:** `ctx.drawImage(img, 0, 0, canvas.width, canvas.height)` with `imageSmoothingEnabled = true`.
- **Scroll mapping:** `useScroll({ target: containerRef, offset: ["start start", "end start"] })` maps 0→1 across the full height of the tall container.
- **Frame index:** `Math.min(63, Math.max(0, Math.round(scrollProgress * 63)))`.
- **Preload:** `Promise.all(frames.map(f => new Promise((res, rej) => { const img = new Image(); img.onload = res; img.onerror = rej; img.src = f.url; })))`.
- **Mobile DPR cap:** Canvas backing store is capped at `Math.min(window.devicePixelRatio, 2)` to avoid excessive memory on high-DPI phones.