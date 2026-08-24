## 2025-05-18 - Breadcrumb Accessibility with aria-current

**Learning:** Breadcrumb components should indicate the active/current item to screen readers using `aria-current="page"` on the link element for WCAG 2.1 compliance.
**Action:** Always expose an `isCurrent` or `aria-current` prop on navigation crumb primitives so current location context is properly announced by assistive technology.
