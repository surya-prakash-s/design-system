## 2025-05-18 - Dynamic Notification Close Button Context
**Learning:** Generic "Close" strings on alert and toast close buttons lack specific context when multiple notifications are rendered on a page, causing screen reader users to hear ambiguous controls.
**Action:** Default close button labels dynamically based on notification type (e.g., `Close ${type} alert` or `Close ${type} toast`) and expose a `closeButtonAssistiveText` prop for custom overrides.
