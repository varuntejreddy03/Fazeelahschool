# FAZEELAH ENGLISH MEDIUM SCHOOL — Full Website Redesign Prompt
## For AI Coding Agents (Cursor / Claude Code / Codex)

---

## PROJECT OVERVIEW

Build a **complete, production-grade, fully responsive website** for **FAZEELAH ENGLISH MEDIUM SCHOOL** using **Vite + React 18 + Tailwind CSS v3 + Framer Motion**. This is a full rebuild from scratch — replacing their current outdated GoDaddy Airo site with a modern, premium, editorial-quality school website.

The site must feel **premium, trustworthy, and aspirational** — like a top-tier private school website — while remaining warm and community-oriented. Think clean editorial layouts, rich typography, layered depth, and smooth motion. Not corporate, not playful — **refined academic excellence**.

---

## TECH STACK (STRICT)

```
Frontend:     Vite + React 18
Styling:      Tailwind CSS v3 (with custom config)
Animation:    Framer Motion v11
Routing:      React Router v6 (HashRouter for static deploy)
Icons:        Lucide React
Forms:        React Hook Form
Fonts:        Google Fonts (via @import in index.css)
              - Display: "Playfair Display" (headings)
              - Body: "DM Sans" (body text, UI)
              - Accent: "Cormorant Garamond" (large quotes, hero sub-text)
Deployment:   Static (Vercel / Netlify ready)
```

No backend required. All contact buttons link to WhatsApp or mailto.

---

## COLOR PALETTE & DESIGN SYSTEM

Define these in `tailwind.config.js` under `theme.extend.colors`:

```js
colors: {
  brand: {
    navy:    '#0D1B2A',   // primary dark — navbar, footers, dark sections
    blue:    '#1A3A5C',   // secondary — card headers, accents
    sky:     '#2D7DD2',   // interactive — buttons, links, highlights
    gold:    '#C9A84C',   // premium accent — borders, dividers, icons
    cream:   '#F7F3ED',   // warm off-white — page backgrounds
    white:   '#FFFFFF',
    muted:   '#6B7A8D',   // body text on light
    light:   '#E8EFF7',   // light section backgrounds
  }
}
```

**Typography Scale in tailwind.config.js:**
- `font-display` → Playfair Display
- `font-body` → DM Sans
- `font-serif` → Cormorant Garamond

**Design Rules:**
- Sections alternate between `bg-white`, `bg-brand-cream`, `bg-brand-navy`
- All section headings use `font-display` with `text-brand-navy` (on light) or `text-white` (on dark)
- Gold accent line (horizontal `<hr>` or `border-brand-gold`) used as section dividers
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills/badges
- Box shadows: `shadow-xl` with a slight blue tint — `shadow-brand-sky/10`
- Generous whitespace — large padding (`py-24`, `px-6` up to `px-20` on xl)

---

## PROJECT STRUCTURE

```
fazeelah-school/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── (placeholder images — use Unsplash URLs inline)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── StatBadge.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── AnnouncementBanner.jsx
│   │       ├── OverviewGrid.jsx
│   │       ├── FacilitiesStrip.jsx
│   │       └── NewsletterSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Vision.jsx
│   │   ├── Mission.jsx
│   │   └── ContactUs.jsx
│   ├── data/
│   │   └── schoolData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## SCHOOL DATA FILE — `src/data/schoolData.js`

Export a single object with all content:

```js
export const school = {
  name: "FAZEELAH ENGLISH MEDIUM SCHOOL",
  shortName: "Fazeelah School",
  tagline: "Education With Values",
  subTagline: "More than Just Education — Value Based Learning",
  address: "Bathalpalli Road, Nagalur Village, Dharmavaram 515671, Sri Sathya Sai District, Andhra Pradesh",
  phone: ["70753-55455", "75077-44544"],
  whatsapp: "917075355455",
  email: {
    general: "fazeelahschool@gmail.com",
    admissions: "Admissions@fazeelah.com",
    principal: "principal@fazeelah.com",
    admin: "admin@fazeelah.com",
  },
  website: "www.Fazeelah.com",
  hours: {
    weekdays: "09:00 AM – 05:00 PM",
    saturday: "09:00 AM – 05:00 PM",
    sunday: "Closed",
    note: "2nd Sunday is Visiting Day for Parents (Day Stay Allowed)",
  },
  admissions: {
    year: "2026 – 2027",
    open: true,
    cta: "Message us on WhatsApp to apply",
  },
  stats: [
    { label: "Acre Campus", value: "2" },
    { label: "Certified Faculty", value: "50+" },
    { label: "Years of Excellence", value: "10+" },
    { label: "Students Enrolled", value: "500+" },
  ],
  facilities: [
    { icon: "Monitor", label: "Digital Panel Boards" },
    { icon: "BookOpen", label: "Excellent Curriculum" },
    { icon: "Wind", label: "Fully Air-Conditioned" },
    { icon: "Shield", label: "24/7 CCTV Surveillance" },
    { icon: "Trophy", label: "Sports Arena" },
    { icon: "Bus", label: "Bus Transportation" },
    { icon: "Home", label: "Hostel for Boys" },
    { icon: "Cpu", label: "Computer Lab" },
  ],
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Vision", path: "/vision" },
    { label: "Mission", path: "/mission" },
    { label: "Contact Us", path: "/contact" },
  ],
  philosophy: "At FAZEELAH ENGLISH MEDIUM SCHOOL, we believe that education is the key to unlocking a world of opportunity. Every student has the potential to achieve greatness, and we are committed to helping them reach their goals and aspirations.",
  faculty: "Our faculty members are dedicated educators deeply committed to their students' success. With years of experience and a passion for teaching, they bring a wealth of knowledge and expertise to the classroom.",
  vision: "To provide a world-class education that empowers students to become leaders and innovators in their communities. We believe in fostering a love of learning and a commitment to excellence in all that we do.",
  mission: "To provide a challenging and supportive learning environment that empowers students to become critical thinkers, lifelong learners, and responsible citizens. We are committed to fostering a love of learning and a desire to make a positive impact on the world.",
  community: "We are proud to be part of a diverse and inclusive community that values collaboration, empathy, and respect.",
};
```

---

## COMPONENT SPECIFICATIONS

### `Navbar.jsx`
- Sticky, transparent on hero → solid `bg-brand-navy` on scroll (use `useScrollPosition` hook)
- Logo: School crest icon (use a shield SVG) + "FAZEELAH" in `font-display text-white` + "English Medium School" in `text-brand-gold text-xs`
- Desktop nav links: `font-body font-medium tracking-wide text-white/80 hover:text-brand-gold` with animated gold underline on hover (Framer Motion `layoutId`)
- Mobile: hamburger icon → full-screen slide-down menu with `bg-brand-navy`
- "Admissions Open" pill badge in top-right — pulsing gold border animation
- Framer Motion: `initial={{ y: -80 }} animate={{ y: 0 }}` on mount

### `Footer.jsx`
- Background: `bg-brand-navy`
- Three columns: School Info, Quick Links, Contact & Hours
- Gold divider line separating footer from the main content
- Social/WhatsApp icon link
- Copyright: `© 2026 FAZEELAH ENGLISH MEDIUM SCHOOL. All Rights Reserved.`
- Small text: Built with ♥ for excellence in education
- Framer Motion fade-in when in view

### `Button.jsx`
Variants: `primary` (solid gold bg, navy text), `outline` (gold border, transparent bg, gold text), `whatsapp` (green bg, white text, WhatsApp icon)

### `SectionHeading.jsx`
Props: `eyebrow` (small gold uppercase label), `title`, `subtitle`, `centered` (bool)
- Eyebrow: `text-brand-gold font-body text-sm uppercase tracking-widest`
- Title: `font-display text-4xl md:text-5xl text-brand-navy` (or white on dark bg)
- Subtitle: `font-body text-brand-muted text-lg`
- Animated gold underline bar below title: `w-16 h-1 bg-brand-gold`

---

## PAGE SPECIFICATIONS

---

### PAGE 1: `Home.jsx`

**Section 1 — Hero**
- Full viewport height (`min-h-screen`)
- Background: Split design — left half `bg-brand-navy` with subtle diagonal lines pattern (CSS `repeating-linear-gradient`), right half reveals a school building image (`https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200` — school/classroom image)
- Large heading: `"FAZEELAH"` in `font-display text-7xl md:text-9xl text-white` with `text-brand-gold` for the letters
- Sub-heading: `"ENGLISH MEDIUM SCHOOL"` in `font-display text-2xl text-white/70 tracking-[0.3em]`
- Tagline: `"Education With Values"` in `font-serif text-xl text-brand-gold italic`
- Location pill: `📍 Dharmavaram, Sri Sathya Sai District, AP`
- Two CTA buttons: `"Apply Now 2026–27"` (primary gold) + `"WhatsApp Us"` (whatsapp green)
- Framer Motion: staggered entrance — heading first, then subheading, then tagline, then buttons
- Scroll indicator: animated chevron-down icon

**Section 2 — Announcement Banner**
- Full-width `bg-brand-gold` strip
- Animated ticker/marquee: `"🎓 ADMISSIONS OPEN FOR 2026–2027 | 📞 Call: 70753-55455 | 🏫 Hostel Facility Available for Boys | 📅 2nd Sunday: Parent Visiting Day"`
- Use CSS `@keyframes marquee` for continuous scroll

**Section 3 — Stats Strip**
- `bg-brand-navy` section, full width
- 4 stat cards in a row (responsive: 2x2 on mobile):
  - `"2 Acres"` — Wide & Secure Campus
  - `"50+"` — Certified Faculty
  - `"500+"` — Students Enrolled
  - `"2026-27"` — Admissions Open
- Each stat: large gold number in `font-display`, label in white body font
- Framer Motion: count-up animation when scrolled into view

**Section 4 — Overview Grid ("Welcome to Fazeelah")**
- `SectionHeading`: eyebrow `"Explore Our School"`, title `"A Place to Learn and Grow"`
- 3-column card grid (1-col mobile, 2-col tablet, 3-col desktop) — styled as elevated white cards with `shadow-xl rounded-2xl`
- **Card 1 — About Us:** Icon: `GraduationCap`. Title: `"About Us"`. Body: "We are dedicated to providing a safe and nurturing environment where students can learn and grow." CTA: "Learn More →" linking to `/about`
- **Card 2 — Our Programs:** Icon: `BookOpen`. Title: `"Our Programs"`. Body: "Comprehensive programs from early childhood education to high school, preparing students for success in school and beyond." CTA: "Explore →" linking to `/vision`
- **Card 3 — Faculty & Staff:** Icon: `Users`. Title: `"Faculty & Staff"`. Body: "Highly qualified and dedicated teachers committed to helping every student achieve their full potential." CTA: "Meet Our Team →" linking to `/about`
- **Card 4 — Admissions:** Icon: `ClipboardList`. Title: `"Admissions 2026–27"`. Body: "We welcome students of all backgrounds. Apply now for the upcoming session — limited seats available." CTA: "Apply Now →" (WhatsApp link)
- **Card 5 — Campus Life:** Icon: `Landmark`. Title: `"Campus Life"`. Body: "From Digital Classrooms to sports arenas and music — there is something for everyone to enjoy." CTA: "See Campus →" linking to `/vision`
- **Card 6 — Contact Us:** Icon: `Phone`. Title: `"Get In Touch"`. Body: "Visit us at Bathalpalli Road, Nagalur Village, Dharmavaram. Open Mon–Sat, 9 AM to 5 PM." CTA: "Contact Us →" linking to `/contact`
- Framer Motion: cards enter with staggered `y: 40 → 0` fade-in on scroll

**Section 5 — Facilities Strip**
- `bg-brand-cream` background
- `SectionHeading`: eyebrow `"Why Choose Us"`, title `"World-Class Facilities"`
- Horizontal scrollable row on mobile, 4-col grid on desktop
- Each facility: icon (Lucide) in `bg-brand-navy` circle + label below
- Subtle hover lift animation

**Section 6 — Admissions CTA Block**
- Split layout: left `bg-brand-navy` with text, right `bg-brand-gold` with contact info
- Left: `"Admissions Open 2026–2027"` heading (white) + body text + WhatsApp CTA button
- Right: Phone numbers, emails displayed cleanly

**Section 7 — Newsletter Subscribe**
- Centered, `bg-brand-light`
- `"Stay Updated"` heading
- Email input + Sign Up button (using React Hook Form, submit shows success toast)

---

### PAGE 2: `AboutUs.jsx`

**Hero Banner**
- `bg-brand-navy` with decorative geometric pattern overlay (CSS)
- Breadcrumb: `Home / About Us`
- Page title: `"Discover Fazeelah School"` in `font-display text-5xl text-white`
- Gold underline bar

**Section — Our Philosophy**
- Two-column layout (text left, image right)
- Image: `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800` (classroom)
- Body: Full philosophy text from schoolData
- Decorative: large gold quotation mark `"` behind the text

**Section — Our Faculty**
- Two-column layout (image left, text right) — mirrors above
- Image: `https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800`
- Body: Faculty text from schoolData
- Feature bullets: "Experienced Educators", "Passionate About Teaching", "Student-First Approach"

**Section — Our Values (3 Cards)**
- Cards: `"Integrity"`, `"Excellence"`, `"Community"` — each with a Lucide icon, title, short description

**Bottom CTA**
- `bg-brand-gold` strip: `"Value Based Learning at Fazeelah"` + Apply Now button

---

### PAGE 3: `Vision.jsx`

**Hero Banner** — same structure as About, title: `"Our Vision & Community"`

**Section — Our Vision**
- Two-column layout
- Left: Large image (student thinking — `https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800`)
- Right: Eyebrow `"Our Vision"`, text from schoolData.vision, bold pull-quote: `"We Teach Beyond Books — We Prepare Students For The Real World"` in `font-serif text-2xl text-brand-navy italic`

**Section — Why Choose Us**
- `bg-brand-navy` section
- `SectionHeading` (white): eyebrow `"What Sets Us Apart"`, title `"Why Choose Fazeelah"`
- 2-column list on desktop, 1-column on mobile
- Each item: gold checkmark icon + label + short description
  1. Excellent Curriculum
  2. Digital Panel Boards in every classroom
  3. Certified & Experienced Teachers
  4. Bus Transportation Facility
  5. Fully Air-Conditioned Classrooms
  6. Sports Arena with Qualified Coaches
  7. Hostel Facility for Boys
  8. 24/7 CCTV Surveillance for Safety
- Framer Motion: items enter from left with stagger

**Section — Community**
- Two-column layout
- Left: Text — eyebrow `"Our Community"`, title `"Diverse, Inclusive & Collaborative"`, body from schoolData.community
- Right: decorative illustration — CSS geometric art piece (circles and lines in brand colors)

---

### PAGE 4: `Mission.jsx`

**Hero Banner** — title: `"Where Learning Comes First"`

**Section — Our Mission**
- Two-column: image (student working — `https://images.unsplash.com/photo-1588072432836-e10032774350?w=800`) + text
- Body: Full mission text from schoolData
- Three pillars below, in 3 cards:
  - `"Critical Thinkers"` — GraduationCap icon
  - `"Lifelong Learners"` — BookOpen icon
  - `"Responsible Citizens"` — Heart icon

**Section — Our Approach**
- `bg-brand-cream`
- Three-step visual timeline (horizontal on desktop, vertical on mobile):
  1. `"Not Just Books"` — We focus on thinking
  2. `"Real Learning"` — Creativity and real-world skills
  3. `"Beyond Academics"` — Character, community, values
- Each step: number in gold circle + title + body

**Closing CTA**
- `"Ready to Join the Fazeelah Family?"` heading
- Two buttons: `"Apply for Admissions"` + `"Contact Us"`

---

### PAGE 5: `ContactUs.jsx`

**Hero Banner** — title: `"Get In Touch"`, sub: `"We serve with empathy"`

**Section — Contact Cards Grid**
- 3-column on desktop, 1-col on mobile
- **Card 1 — Visit Us:** MapPin icon, full address, "Open Mon–Sat: 9 AM – 5 PM"
- **Card 2 — Call Us:** Phone icon, both phone numbers, "WhatsApp available"
- **Card 3 — Email Us:** Mail icon, all 4 email addresses listed

**Section — Hours Table**
- Clean table: Day | Hours — Mon through Sun
- Highlight today's row with gold background
- Note: `"2nd Sunday is Parent Visiting Day (Day Stay Allowed)"`

**Section — Admissions CTA**
- `bg-brand-navy`
- `"Admissions Open 2026–2027"` with subtitle
- `"Empowering Young Minds"` sub-brand tagline
- Large WhatsApp CTA button + call button
- Small print: All 4 email addresses

**Section — Reach Us**
- Embed Google Maps iframe for "Bathalpalli Road, Nagalur Village, Dharmavaram 515671"
- Map iframe wrapped in `rounded-2xl overflow-hidden shadow-2xl`

**Floating WhatsApp Button**
- Fixed bottom-right corner, always visible
- Green circle with WhatsApp icon (Lucide `MessageCircle` + green bg)
- Pulse animation ring
- Tooltip on hover: `"Chat with us on WhatsApp"`
- Links to: `https://wa.me/917075355455`

---

## GLOBAL ANIMATIONS (Framer Motion)

Create a custom hook `useScrollReveal()` that returns `ref`, `inView`, and preset `variants`:

```js
// variants to use across all sections
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
```

Use `motion.div` with `viewport={{ once: true, amount: 0.2 }}` on all sections.

Page transitions: Wrap `<Routes>` in `<AnimatePresence>`. Each page component wraps its outermost `<main>` in:
```jsx
<motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
```

---

## RESPONSIVE BREAKPOINTS (Tailwind)

- `sm` 640px — small phones
- `md` 768px — tablets
- `lg` 1024px — desktop
- `xl` 1280px — wide desktop

All grids must be mobile-first: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
Section padding: `py-16 md:py-24` | Container: `max-w-7xl mx-auto px-4 md:px-8 xl:px-12`

---

## ADDITIONAL IMPLEMENTATION NOTES

1. **WhatsApp links:** Always use `https://wa.me/917075355455` (with country code 91)
2. **Tel links:** `tel:+917075355455` and `tel:+917507744544`
3. **Mailto links:** Use schoolData emails with `mailto:` prefix
4. **Image placeholders:** All Unsplash images must use `loading="lazy"` and have explicit `width` + `height` or `aspect-ratio` CSS to prevent layout shift
5. **SEO:** Add `<title>` and `<meta name="description">` per page using React Helmet or direct DOM manipulation in `useEffect`
6. **Scroll to top:** On route change, scroll to top — implement in a `<ScrollToTop />` component placed inside Router
7. **Active nav link:** Use React Router `useLocation()` to highlight the current nav item with `text-brand-gold`
8. **`vite.config.js`:** Set `base: './'` for relative asset paths when deploying to subdirectory
9. **`tailwind.config.js`:** Add `fontFamily` for all three fonts, add custom `boxShadow` for branded card shadows
10. **`index.css`:** Import Google Fonts at top:
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,600&display=swap');
    ```
11. **Marquee animation** in `index.css`:
    ```css
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee { animation: marquee 20s linear infinite; }
    ```
12. **Gold divider component:** `<div className="w-16 h-1 bg-brand-gold my-4" />` — used under all section headings

---

## DELIVERABLES CHECKLIST

When complete, the project must have:
- [ ] All 5 pages rendering correctly with React Router
- [ ] Navbar scroll behavior working (transparent → solid)
- [ ] Mobile hamburger menu working
- [ ] Framer Motion animations on scroll for all sections
- [ ] Announcement marquee banner running
- [ ] Floating WhatsApp button on all pages
- [ ] All contact info correctly wired (WhatsApp, tel, mailto)
- [ ] Newsletter form with success feedback (no backend needed — `console.log` + toast)
- [ ] Fully responsive at 375px, 768px, 1280px
- [ ] Google Maps embed on Contact page
- [ ] Stats counter animation
- [ ] Page transitions with AnimatePresence
- [ ] Google Fonts loading correctly
- [ ] All schoolData.js content rendered — no hardcoded text outside of this file

---

*School: FAZEELAH ENGLISH MEDIUM SCHOOL | Dharmavaram, AP | www.Fazeelah.com*
