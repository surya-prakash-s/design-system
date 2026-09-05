## 2025-05-18 - Breadcrumb Navigation Current Page Accessibility
**Learning:** Screen readers require `aria-current="page"` on active breadcrumb links to announce the current location in navigation hierarchies.
**Action:** Ensure breadcrumb item components accept `isCurrent` or `aria-current` props and pass `aria-current="page"` to the inner link element.
