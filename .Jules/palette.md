## 2025-05-18 - Dynamic Contextual Labels for Pill Remove Buttons
**Learning:** Icon-only remove buttons in list items or tag pills (such as SLDS Pills) should dynamically include the item's label in their `title` and `assistiveText` attributes (e.g. `Remove Salesforce` rather than `Remove`) to provide clear screen-reader navigation context when multiple pills exist on the page.
**Action:** Always compute contextual `assistiveText` and `title` props from `props.label` or item text for action buttons inside repeated list/tag components.
