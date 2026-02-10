# Repository Explanation: Salesforce Lightning Design System (SLDS)

This repository contains the source code for the Salesforce Lightning Design System (SLDS). SLDS is a design system that provides a collection of design patterns, components, and guidelines for building Salesforce applications with a consistent look and feel.

## High-Level Overview

SLDS is primarily a CSS framework built using Sass (SCSS). It also includes design tokens, icons, and a set of React-based examples used for documentation and testing in Storybook.

### Key Technologies
- **Sass (SCSS)**: The primary language for styling.
- **React**: Used for creating component examples and Storybook stories.
- **Gulp**: The build system used for compiling SCSS, generating design tokens, and bundling the library.
- **Storybook**: The development environment and documentation viewer.
- **Jest / Ava**: Testing frameworks used for unit tests and accessibility tests.

---

## Directory Structure

- **`.github/`**: GitHub Actions workflows and issue/PR templates.
- **`.storybook/`**: Configuration for Storybook.
- **`__fixtures__/`**: Data used for testing.
- **`__tests__/`**: Global test suites, including accessibility (a11y) tests.
- **`assets/`**: Static assets like fonts and images.
- **`config/`**: Configuration files for various tools (e.g., Nginx).
- **`design-tokens/`**: Source of truth for design tokens (colors, spacing, etc.), defined in YAML files.
- **`docs/`**: Additional documentation and assets.
- **`guidelines/`**: Comprehensive developer guidelines covering coding standards, accessibility, and component creation.
- **`scripts/`**: Internal scripts for building, compiling, and managing the repository.
- **`styling-hooks/`**: Definitions for CSS Custom Properties (styling hooks).
- **`tools/`**: Internal CLI tools.
- **`ui/`**: The core source code of the design system.
    - **`components/`**: Contains "blueprints" for all UI components (e.g., buttons, cards, modals).
    - **`utilities/`**: Utility classes for common CSS patterns (e.g., margins, padding, visibility).
    - **`core/`**: Core styles and resets.

---

## Component Architecture (Blueprints)

Each component in SLDS is treated as a "blueprint". A blueprint is a specification of a component's HTML and CSS.

### Component Folder Structure
Typically found in `ui/components/<component-name>/`:
- **`_doc.scss`**: Metadata about the component using annotations.
- **`docs.mdx`**: Documentation for the component.
- **`index.stories.js`**: Storybook stories.
- **`<variant>/`**: Folders for different versions of the component (e.g., `base`, `stateful`).
    - **`_index.scss`**: Styles specific to the variant.
    - **`example.jsx`**: React-based HTML examples for the variant.

### Annotation System
SLDS uses a custom annotation system in SCSS comments to define metadata. This metadata is used by the build system to generate documentation and understand component relationships.
- **`@base`**: Defines a new component.
- **`@variant`**: Defines a specific version of a component.
- **`@modifier`**: Defines a CSS class that modifies a component.
- **`@selector`**: The CSS selector for the element.
- **`@restrict`**: Defines where the selector can be applied (parent/element restrictions).

---

## Build System and Scripts

The build system is powered by Gulp. Key tasks include:
- **`npm start`**: Starts the Storybook development environment.
- **`npm run build-dist`**: Compiles the entire system into the `.dist` directory.
- **`npm test`**: Runs the Jest test suite.
- **`npm run gulp -- styles`**: Compiles Sass to CSS.
- **`npm run pr-checks`**: Runs all checks required for a pull request.

For more details, refer to the `README.md` and the files in the `guidelines/` directory.
