## 2025-02-18 - Pill Close Button Dynamic Accessibility Labeling
**Learning:** In list patterns like Pill lists, static close/remove button descriptions (e.g. "Remove") fail screen-reader context when navigating buttons directly. Screen readers need a dynamic label (e.g., "Remove [Pill Name]") to understand exactly which list item will be deleted.
**Action:** Always inject the associated list item's label into the title and assistiveText of any interactive/closing child component within a repeated pattern.
