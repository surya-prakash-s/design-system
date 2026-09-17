## 2025-05-18 - CardHeader Icon Assistive Text & Title Customization
**Learning:** Defaulting card icon assistive text and title attributes to the raw internal symbol name (e.g. `account`) produces non-descriptive screen reader text and tooltips when cards represent contextual entities or collections.
**Action:** Always allow components rendering standard or utility icons to accept explicit `iconAssistiveText` and `iconTitle` props with fallback to `symbol` to support flexible accessibility labels.
