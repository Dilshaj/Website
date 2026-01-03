# 📸 Image Setup Guide

This guide shows you which images you need to add to make the website pixel-perfect.

---

## 📁 CURRENT IMAGE STRUCTURE

Your `/public/img/` directory already has:
- ✅ `hero/` - Hero section images
- ✅ `team/` - Team member photos
- ✅ `services/` - Service images
- ✅ `drlogo.png` - Company logo
- ✅ Other existing folders

---

## 🆕 NEW IMAGE FOLDERS TO CREATE

Create these new folders in `/public/img/`:

```
/public/img/
├── about/          ← NEW (for About Us page)
├── careers/        ← NEW (for Careers page)
└── projects/       ← NEW (for Projects page)
```

---

## 🖼️ IMAGES NEEDED BY PAGE

### 📄 ABOUT US PAGE (`/about-us`)

**Folder**: `/public/img/about/`

```
/public/img/about/
├── team-meeting.jpg       - Team collaboration photo
├── workspace.jpg          - Creative workspace photo
├── chart.png             - Revenue growth chart graphic
├── innovation.png        - Innovation icon/graphic
└── (optional) member1-5.jpg - Can reuse from /img/team/
```

**Image Specifications**:
- `team-meeting.jpg`: 800x600px, team in meeting room
- `workspace.jpg`: 800x600px, modern office workspace
- `chart.png`: 300x300px, upward trending chart
- `innovation.png`: 300x300px, innovation icon

---

### ⚙️ SERVICES PAGE (`/services`)

**Folder**: `/public/img/services/`

```
/public/img/services/
├── ai-ml.jpg              - AI/Machine Learning visual
├── web-app.jpg            - Web/App development screenshot
├── uiux.jpg               - UI/UX design mockup
├── cloud.jpg              - Cloud computing graphic
├── graphic.jpg            - Graphic design samples
├── 3d-design.jpg          - 3D model visualization
├── ar-spatial.jpg         - AR/VR technology
├── interior.jpg           - Interior design render
└── construction.jpg       - Construction/architecture
```

**Image Specifications**:
- All images: 1200x800px minimum
- High quality, professional photos
- Should represent each service visually
- Can use stock photos from Unsplash, Pexels, etc.

**Alternative**: You already have `/public/img/services/` with 8 items!  
Check if these can be reused or need updating.

---

### 🚀 PROJECTS PAGE (`/projects`)

**Folder**: `/public/img/projects/`

```
/public/img/projects/
└── eduprova.jpg           - EduProva app screenshot/mockup
```

**Image Specifications**:
- `eduprova.jpg`: 1200x800px
- App mockup or product visualization
- Can be a phone mockup with app interface

**Alternative**: Use a placeholder gradient with icons (already implemented in code)

---

### 💼 CAREERS PAGE (`/careers`)

**Folder**: `/public/img/careers/`

```
/public/img/careers/
├── team-hero.jpg          - Team photo for hero section
├── culture1.jpg           - Workplace culture photo 1
├── culture2.jpg           - Workplace culture photo 2
├── culture3.jpg           - Workplace culture photo 3
├── culture4.jpg           - Workplace culture photo 4
├── culture5.jpg           - Workplace culture photo 5
└── culture6.jpg           - Workplace culture photo 6
```

**Image Specifications**:
- `team-hero.jpg`: 1000x800px, professional team photo
- `culture1-6.jpg`: 600x600px each (square), workplace scenes
- Show: collaboration, creativity, fun, innovation, teamwork, growth

---

## 🎨 OPTIONAL: PLACEHOLDER IMAGES

If you don't have images ready, you can use:

### 1. **Unsplash Source** (free, no attribution)
Replace image paths in code with:
```jsx
src="https://source.unsplash.com/800x600/?technology"
src="https://source.unsplash.com/800x600/?team,office"
src="https://source.unsplash.com/800x600/?design"
```

### 2. **Placeholder.com**
```jsx
src="https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Your+Service"
```

### 3. **Keep Gradients** (current implementation)
The code already has gradient backgrounds that look professional!  
You can keep these until you have real images.

---

## ✅ QUICK SETUP STEPS

### Option 1: Use Your Own Images

1. Create folders:
   ```
   /public/img/about/
   /public/img/projects/
   /public/img/careers/
   ```

2. Add your images with the exact filenames listed above

3. Refresh your browser - images will load automatically!

### Option 2: Use Placeholder Service

1. Update image paths in each page file
2. Replace with Unsplash or placeholder URLs
3. No folder creation needed!

### Option 3: Generate with AI

Use AI image generators like:
- **DALL-E**: Generate custom images
- **Midjourney**: Create unique visuals
- **Stable Diffusion**: Professional mockups

---

## 🔧 HOW TO UPDATE IMAGES IN CODE

### Example: Update About Us page images

Open: `app/about-us/page.tsx`

Find this section:
```jsx
<img 
  src="/img/about/team-meeting.jpg"  ← Change this path
  alt="Team Collaboration" 
  className="w-full h-auto object-cover"
/>
```

Replace with your image URL or path.

---

## 📦 TEAM IMAGES

You can reuse existing team images from `/public/img/team/`

Current team images available:
- Check `/public/img/team/` folder
- 6 items already present
- Use these for "Meet Our Team" section

---

## 🎯 PRIORITY IMAGES

### High Priority (visible immediately):
1. ✅ Team hero image (`careers/team-hero.jpg`)
2. ✅ About page photos (`about/team-meeting.jpg`, `about/workspace.jpg`)
3. ✅ Service cards (already have some in `/img/services/`)

### Medium Priority:
1. Culture images for careers page
2. Project screenshots
3. Stats graphics

### Low Priority:
1. Decorative backgrounds
2. Pattern overlays
3. Icon graphics

---

## 🆘 IF IMAGES ARE MISSING

**Don't worry!** The pages will still look great because:
- ✅ All cards have gradient backgrounds
- ✅ Hover effects work without images
- ✅ Layout is intact
- ✅ SVG icons are used for decorative elements

**The broken image icon won't show** if you:
1. Keep the gradient backgrounds (already in code)
2. Remove the `<img>` tags temporarily
3. Use placeholder services

---

## 📝 IMAGE CHECKLIST

Use this to track your image setup:

### About Us Page:
- [ ] `/img/about/team-meeting.jpg`
- [ ] `/img/about/workspace.jpg`
- [ ] `/img/about/chart.png`
- [ ] `/img/about/innovation.png`

### Services Page:
- [ ] `/img/services/ai-ml.jpg`
- [ ] `/img/services/web-app.jpg`
- [ ] `/img/services/uiux.jpg`
- [ ] `/img/services/cloud.jpg`
- [ ] `/img/services/graphic.jpg`
- [ ] `/img/services/3d-design.jpg`
- [ ] `/img/services/ar-spatial.jpg`
- [ ] `/img/services/interior.jpg`
- [ ] `/img/services/construction.jpg`

### Projects Page:
- [ ] `/img/projects/eduprova.jpg`

### Careers Page:
- [ ] `/img/careers/team-hero.jpg`
- [ ] `/img/careers/culture1.jpg`
- [ ] `/img/careers/culture2.jpg`
- [ ] `/img/careers/culture3.jpg`
- [ ] `/img/careers/culture4.jpg`
- [ ] `/img/careers/culture5.jpg`
- [ ] `/img/careers/culture6.jpg`

---

## 💡 RECOMMENDED SOURCES

### Free Stock Photos:
- **Unsplash**: https://unsplash.com (best quality, free)
- **Pexels**: https://pexels.com (also excellent)
- **Pixabay**: https://pixabay.com (good variety)

### Search Terms:
- "modern office team"
- "technology innovation"
- "web development"
- "creative workspace"
- "team collaboration"
- "startup culture"

---

## 🚀 READY TO GO!

Your website is fully functional even without images.  
Add them when you're ready for that final polish!

