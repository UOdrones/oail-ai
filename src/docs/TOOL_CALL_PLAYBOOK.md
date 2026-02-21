# Tool Call Playbook for Video Generation & Optimization

This playbook contains the exact prompts and ffmpeg commands required to optimize and generate the video assets for the OAIL hero section.

---

### Tool Call 1: Video Generation (Sora / Runway)
**Prompt to feed into the generation engine:**
> "12–18s seamless loop, dark premium industrial-tech, calm center for logo overlay, no text, no logos, minimal motion noise."

---

### Tool Call 2: Video Optimization & Formatting (FFMPEG)
**Run these exact commands in your terminal once you have your `hero_master_1080p.mp4` file placed in the public directory.**

**1. Generate optimized MP4 fallback:**
```bash
ffmpeg -i hero_master_1080p.mp4 -c:v libx264 -profile:v high -level 4.1 -pix_fmt yuv420p -crf 22 -preset slow -movflags +faststart -an public/hero-bg.mp4
```

**2. Generate optimized WebM (Primary modern format for transparency/quality/compression):**
```bash
ffmpeg -i hero_master_1080p.mp4 -c:v libvpx-vp9 -b:v 0 -crf 33 -pix_fmt yuv420p -row-mt 1 -speed 2 -an public/hero-bg.webm
```

**3. Generate Poster Image (Static Fallback frame):**
*Note: Grabs the frame at exactly 1 second (frame 60 assuming 60fps) to avoid black fade-ins.*
```bash
ffmpeg -i hero_master_1080p.mp4 -vf "select=eq(n\,60)" -vframes 1 public/hero-bg-poster.jpg
```

---

### Tool Call 3: Performance Verification (Lighthouse)
**Instructions for testing locally:**
1. Start the production build: `npm run build && npm run preview`
2. Open Chrome DevTools > Lighthouse.
3. Run a performance audit for Mobile and Desktop.
4. **Acceptance Criteria Check:**
   - LCP < 2.5s on desktop
   - LCP < 3.5s on mobile
   - Test by enabling "Emulate CSS prefers-reduced-motion" in the Rendering tab of DevTools to ensure the Canvas route drawing stops and the video halts autoplay.
