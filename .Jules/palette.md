## 2025-02-15 - Contextual Header Action Labels in Docked Composer
**Learning:** When multiple panels or composer panels exist, static default labels (like "Minimize window" or "Close") fail WCAG 2.1 contextual clarity for screen reader users and tooltips.
**Action:** Dynamically derive `assistiveText` and `title` from `props.header` (e.g., `Minimize ${headerText}`) while allowing explicit overrides via props.
