/* eslint-env jest */
import React from 'react';
import {
  Section,
  SectionTitle,
  SectionTitleAction,
  SectionContent
} from '../base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Expandable Section', () => {
  it('renders an open section', () =>
    matchesMarkup(
      <Section className="slds-is-open">
        <SectionTitle>
          <SectionTitleAction referenceId="expando-01" isOpen>
            Section Title
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent referenceId="expando-01" isOpen>
          <p>Section Content</p>
        </SectionContent>
      </Section>
    ));

  it('renders a closed section', () =>
    matchesMarkup(
      <Section>
        <SectionTitle>
          <SectionTitleAction referenceId="expando-02">
            Section Title
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent referenceId="expando-02">
          <p>Section Content</p>
        </SectionContent>
      </Section>
    ));

  it('renders SectionTitleAction with explicit title', () =>
    matchesMarkup(
      <SectionTitleAction referenceId="expando-03" title="Custom Title">
        <span>Complex Node</span>
      </SectionTitleAction>
    ));
});
