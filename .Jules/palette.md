## 2025-05-20 - Breadcrumbs aria-current="page" Support
**Learning:** Screen readers require `aria-current="page"` on the current breadcrumb link within a navigation trail to announce the user's active location in a hierarchy (WCAG 2.1 compliance).
**Action:** When creating breadcrumb components, ensure the active link receives `aria-current="page"` (via `isCurrent` or explicit `aria-current` prop) so screen readers accurately communicate navigation context.
