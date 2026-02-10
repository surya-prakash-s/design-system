# Agent Knowledge Base: Salesforce Lightning Design System (SLDS)

This file provides essential information for AI agents working on this repository.

## Core Identity
- **Name**: Salesforce Lightning Design System (SLDS).
- **Purpose**: A CSS/Sass framework for building Salesforce-styled UIs.
- **Architecture**: Blueprint-based. Each component is a "blueprint" consisting of HTML (React examples) and CSS (SCSS).

## Technical Stack
- **Styling**: Sass (SCSS) with BEM naming convention and `slds-` prefix.
- **Examples**: React (`.jsx`) files located within component variant folders.
- **Build System**: Gulp (`babel-node ./node_modules/gulp/bin/gulp.js`).
- **Documentation/Preview**: Storybook (starts on port 9002).
- **Testing**: Jest for unit/snapshot tests, Ava for a11y tests.

## Key Concepts for Agents

### 1. Annotation System
The build system relies on custom annotations in SCSS block comments. **Do not remove or ignore these.**
- `@base <name>`: Initializes a component.
- `@variant`: Marks a variant of the component.
- `@selector <css-selector>`: Associates a selector with metadata.
- `@restrict <parent-selectors>`: Enforces where a class can be used.
- `@modifier`: Marks a modifier class.

Example:
```scss
/**
 * @name base
 * @selector .slds-button
 * @restrict button, a, span
 * @variant
 */
.slds-button { ... }
```

### 2. Design Tokens
Always use design tokens for colors, spacing, fonts, etc.
- Tokens are defined in `design-tokens/**/*.yml`.
- They are available in SCSS as variables (e.g., `$color-background-button-default`).

### 3. Adding a New Component
Follow these steps:
1. Create directory: `ui/components/<name>`.
2. Create `_doc.scss`: Define `@base` and component metadata.
3. Create variant folder: `ui/components/<name>/base`.
4. Create `base/_index.scss`: Define `@variant` and styles.
5. Create `base/example.jsx`: Export React elements for the component.
6. Import in `ui/components/_index.scss`: `@import '<name>/base/index';`.

## Common Commands
- **Start Dev Environment**: `npm start`
- **Build Distribution**: `npm run build-dist`
- **Run Tests**: `npm test`
- **Linting**: `npm run gulp -- lint`
- **Check PR Readiness**: `npm run pr-checks`

## Navigation Shortcuts
- **Component Source**: `ui/components/`
- **Design Tokens**: `design-tokens/`
- **Developer Guidelines**: `guidelines/`
- **Build Scripts**: `scripts/`

## Troubleshooting Tips
- If styles don't appear in Storybook, ensure the new SCSS file is imported in `ui/components/_index.scss`.
- If annotation metadata is updated, you may need to restart the Storybook server.
- Use `npm run gulp -- clean` if build artifacts are in an inconsistent state.
