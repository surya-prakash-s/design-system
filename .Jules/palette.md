# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-02-17 - Dynamic Labels for List/Grid Actions (Pill Removal)
**Learning:** Hardcoded text such as "Remove" on repetitive action elements (like close buttons inside lists of Pill components) can cause poor screen-reader experiences because the screen reader will announce "Remove" multiple times without context on what is being removed. Including the element's custom label dynamically in the 'title' and 'assistiveText' properties (e.g., 'Remove [Pill Label]') significantly enhances WCAG 2.1 accessibility.
**Action:** When designing lists, tags, or pills with remove actions, always ensure the action button's aria-label, assistiveText, or title dynamically incorporates the item's custom label/identity to provide necessary context for screen-reader users.
