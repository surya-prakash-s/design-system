## 2025-03-03 - Dynamic Screen Reader Context on Pill Close Actions
**Learning:** For WCAG 2.1 Compliance, lists of interactive pill components with separate dismiss/remove buttons must explicitly context-identify which item is being deleted (e.g., "Remove [Pill Label]") instead of hardcoding a generic label like "Remove" which triggers screen-reader ambiguity when multiple items are list-rendered.
**Action:** Always dynamically propagate parent or sibling label values to assistiveText/title attributes of associated action icon buttons in collections/lists of components.
