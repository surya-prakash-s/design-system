## 2025-05-20 - ProgressRing Accessibility Improvements
**Learning:** Adding `aria-labelledby` without disabling default `aria-label` fallback text results in `aria-label` overriding `aria-labelledby` in screen readers per ARIA specifications.
**Action:** When a component supports `aria-labelledby`, omit fallback `aria-label` strings unless `aria-label`, `title`, or `assistiveText` is explicitly provided.
