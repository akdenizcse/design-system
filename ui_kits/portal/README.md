# Akdeniz portal — UI kit

A high-fidelity, mostly-cosmetic recreation of the Akdeniz University academic portal: the surface students and staff see when they log in to handle courses, grades, transcripts, payments and announcements.

## Files
- `index.html` — interactive demo. Login → Dashboard → Courses → Transcript request flow. Click the side nav to move between screens.
- `portal.css` — all visual styles. Imports `colors_and_type.css` for tokens.
- `Header.jsx` — sticky top app header (lockup, primary nav, search, profile).
- `SideNav.jsx` — grouped left navigation rail.
- `Screens.jsx` — `LoginScreen`, `DashboardScreen`, `CoursesScreen`, `TranscriptScreen`.
- `Components.jsx` — `Button`, `Field`, `Input`, `Select`, `Textarea`, `Badge`, `Card`, `Alert`, `Tabs`.

## Notes & honest disclaimers
- This kit was built **without** access to the live portal's source code or Figma. It applies the brand's typography, color, spacing and iconography rules to a typical Turkish university-portal IA. Where the real system has features we couldn't see (payment widgets, library integrations, e-Devlet hand-off), we left a tasteful stub or omitted them.
- The login screen uses a fictional copy split (`Akdeniz'in Üniversitesi.`) consistent with the brand voice.
- The sun-and-sea SVG mark is a working stand-in (`assets/mark.svg`), not the official PDF logo.
- Icons are Lucide via CDN (see ICONOGRAPHY in the root README).

## What's covered
| Screen | Includes |
|---|---|
| Login   | brand lockup, form, e-Devlet alt action, hero panel with sun motif |
| Dashboard | greeting, KPI cards (term, GPA, finance), upcoming work, announcements |
| Courses | tab-bar, course list with codes, ECTS, slots, status badges |
| Transcript request | document form, success Alert state |

## What's intentionally missing
- Real authentication, real data, library / e-Devlet integrations.
- Mobile breakpoints — kit is desktop-first at 1280px.
- A11y review: focus order is sane, but full WCAG audit is out of scope for the kit.
