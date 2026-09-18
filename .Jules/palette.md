## 2025-05-18 - ProgressRing Accessibility and Placeholder Cleanup
**Learning:** Progress components with `role="progressbar"` should omit hardcoded fallback string placeholders (e.g. `{{Placeholder for description of progress ring}}`) and omit `aria-label` when `aria-labelledby` is supplied to prevent screen reader label conflicts.
**Action:** Always check that `aria-labelledby` suppresses `aria-label` and that fallback aria attributes derive from contextual title or assistiveText props rather than static placeholder text.
