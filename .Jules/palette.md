# Palette UX Journal

## 2025-02-18 - Dynamic Pill Remove Accessibility (WCAG 2.1)
**Learning:** In list views of Pill components, close/remove buttons with static assistive text like 'Remove' are ambiguous to screen readers. Including the specific pill's custom label (e.g., 'Remove [Pill Label]') provides the necessary context to satisfy accessibility requirements.
**Action:** Always dynamically propagate the component's label/value into assistive text and descriptive titles of actionable icons.
