## 2026-08-12 - [Pill close button context-specific accessibility labels]
**Learning:** Hardcoded close button labels (like 'Remove') in repeating list elements like Pills degrade screen-reader usability by not providing distinct verbal context of which item is being deleted. By dynamically appending the item's label, the experience becomes much more intuitive for keyboard and screen-reader users.
**Action:** When implementing button icons or controls representing actions on list items or cards, always prioritize dynamic, context-specific labels over static actions.
