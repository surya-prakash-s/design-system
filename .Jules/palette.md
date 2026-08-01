## 2026-03-03 - Contextual Pill Close Button Accessibility
**Learning:** Screen reader users experience fatigue and confusion when navigating multiple elements with generic, identical action names like "Remove". Providing a high-context string combining the action and the item's label (e.g., "Remove Salesforce") drastically improves screen-reader clarity and usability.
**Action:** Always map the parent container or sibling label of any deletable/removable items dynamically to the action element's "title" and "assistiveText" props rather than using static fallback descriptions.
