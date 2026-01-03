# Services Page - Required Images

## Images Already Available ✅
The following images are already in `public/services/` folder:
- ✅ `card-3-ai-ml.png` - AI & Machine Learning
- ✅ `card-4-web-mobile-new.png` - Web & App Development
- ✅ `card-2-uiux.png` - UI/UX Designing
- ✅ `card-5-cloud.png` - Cloud & Digital Solutions
- ✅ `card-1-3d-design.png` - 3D Design

## Images Still Needed 📸
Please provide the following images and save them to `public/services/`:

### 1. **VR Hero Image**
- **Filename:** `vr-hero.png`
- **Description:** Person wearing VR headset with futuristic digital elements
- **Size:** Approximately 600x420px
- **Usage:** Hero section right side

### 2. **Graphic Design Image**
- **Filename:** `graphic-design.png`
- **Description:** Designer typography/branding visual
- **Size:** Approximately 600x300px
- **Background:** Light cream/beige (#fef5ee)
- **Usage:** Service 5 - Graphic Design section

### 3. **PR & Marketing Image**
- **Filename:** `pr-marketing.png`
- **Description:** Digital marketing/PR visuals with laptop and icons
- **Size:** Approximately 600x300px
- **Usage:** Service 7 - PR & Digital Marketing section

### 4. **Interior Design Image**
- **Filename:** `interior-design.png`
- **Description:** Interior space visualization or 3D rendering
- **Size:** Approximately 600x300px
- **Usage:** Service 8 - Interior Design & Visualization section

### 5. **Construction Image**
- **Filename:** `construction.png`
- **Description:** Construction/architecture support visuals with helmet and plans
- **Size:** Approximately 600x300px
- **Usage:** Service 9 - Construction & Design Support section

---

## How to Add Images:

1. Save all new images to: `public/services/`
2. Update the code in `app/services/page.tsx` to replace placeholders:

```tsx
// Example: Replace placeholder with actual image
<div style={{ borderRadius: '16px', overflow: 'hidden', height: '300px', background: '#f5f5f5' }}>
    <img
        src="/services/vr-hero.png"  // Update this path
        alt="VR Hero"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
</div>
```

3. Find these placeholders in the code:
   - Line ~95: VR Hero Image placeholder
   - Line ~250: Graphic Design Image placeholder
   - Line ~310: PR & Marketing Image placeholder
   - Line ~340: Interior Design Image placeholder
   - Line ~370: Construction Image placeholder

---

## Image Requirements:
- **Format:** PNG or WebP
- **Quality:** High resolution for crisp display
- **Aspect Ratio:** Maintain 2:1 or similar for consistency
- **File Size:** Optimize for web (under 500KB each)

Once you provide these images, nenu code lo integrate chesta! 🎨✨
