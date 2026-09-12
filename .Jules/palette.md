## 2026-03-31 - Feed Comment & Post Action Accessibility
**Learning:** Generic action overflow buttons in list/feed items (such as post and comment headers) lack context for screen readers when using static "More Options" labels, leading to ambiguity when multiple items exist on a page.
**Action:** Dynamically derive `assistiveText` and `title` attributes on action overflow buttons from the author's name or item type (e.g. `More Options for [userName]'s post`), allowing explicit overrides via props while providing sensible contextual defaults.
