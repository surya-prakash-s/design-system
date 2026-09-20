## 2025-05-18 - Contextual Assistive Text for List Item Status Indicators
**Learning:** Generic labels like "Completed" on status icons in list items or tiles lack context when announced by screen readers, making it difficult for users to determine which item is completed without navigating away.
**Action:** Always include the item title/label in assistive text and title attributes (e.g., `Completed: ${tile.title}`) when rendering status icons within lists or tile components.
