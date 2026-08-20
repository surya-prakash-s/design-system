## 2025-02-23 - Breadcrumb Current Page Accessibility

**Learning:** Breadcrumb trail items require programmatic identification of the active/current page (`aria-current="page"`) to ensure screen reader users can distinguish the active page from parent links (WCAG 2.1 SC 1.3.1).
**Action:** Always provide an `isCurrent` prop or `aria-current` attribute on breadcrumb link components.
