## 2025-02-18 - Dynamically label Pill remove button
**Learning:** To ensure robust screen-reader accessibility (WCAG 2.1) in lists of Pill components, action elements such as close/remove buttons should dynamically include the pill's custom label in their 'title' and 'assistiveText' properties (e.g., 'Remove [Pill Label]') instead of defaulting to a static fallback like 'Remove'.
**Action:** When designing dismissible / removable inline components (like Pills or Tags), dynamically append or prepend the label of the item to the action button's assistive text/aria-label.
