## 2025-02-23 - TrialBar Dropdown Trigger Accessibility
**Learning:** Interactive dropdown trigger buttons that include `aria-haspopup="true"` must also dynamically reflect `aria-expanded="true"` or `"false"` to inform assistive technology when the menu is open versus closed. Additionally, action buttons in header bars must explicitly set `type="button"` to avoid inadvertent form submissions.
**Action:** Always pair `aria-haspopup` triggers with dynamic `aria-expanded` attributes and explicit `type="button"` declarations across header and menu components.
