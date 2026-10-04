## 2025-02-23 - Docked Utility Bar Panel Header Action Labels
**Learning:** Docked utility panels contain minimize/close header action buttons that default to generic "Close Panel" descriptions. When multiple utility bar panels exist (e.g. Call, Notes, History), screen reader users lack context on which panel will be closed.
**Action:** Dynamically derive header action button assistiveText and title props from the panel's header title (e.g., "Close Call"), with support for explicit overrides.
