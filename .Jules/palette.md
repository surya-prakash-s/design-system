## 2025-05-18 - FileSelector Accessibility and Customization

**Learning:** In file selector components, omitting `aria-invalid` on file `<input>` elements when error states exist prevents screen reader users from being alerted to validation failures, and hardcoding field labels or error messages restricts consumer customizability.
**Action:** Ensure file upload input controls propagate `aria-invalid="true"` when invalid/errored, allow custom labels and error messages via props, and provide comprehensive `propTypes` definitions.
