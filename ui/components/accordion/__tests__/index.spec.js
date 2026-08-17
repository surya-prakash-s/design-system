/* eslint-env jest */
import React from 'react';
import Accordion, { AccordionSection } from '../';
import Card from '../../cards/';
import { ActionOverflow } from '../../menus/action-overflow/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a base accordion', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-01"
      >
        Accordion details - A
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-02"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-03"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));

it('renders an accordion with section one open', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-01"
      >
        Accordion details - A
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-02"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-03"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));

it('renders an accordion with section two open', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-01"
      >
        Accordion details - A
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-02"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-03"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));

it('renders an accordion with section three open', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-01"
      >
        Accordion details - A
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-02"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-03"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));

it('renders an accordion with multiple sections open', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-01"
      >
        Accordion details - A
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-02"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-03"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));

it('renders a styled accordion', () =>
  matchesMarkup(
    <Card>
      <Accordion>
        <AccordionSection
          summary="Accordion summary"
          isOpen
          referenceId="referenceId-01"
        >
          Accordion details - A
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId="referenceId-02"
        >
          Accordion details - B
        </AccordionSection>
        <AccordionSection
          summary="Accordion summary"
          referenceId="referenceId-03"
        >
          Accordion details - C
        </AccordionSection>
      </Accordion>
    </Card>
  ));

it('renders a nested accordion', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        isOpen
        referenceId="referenceId-01"
      >
        <Accordion>
          <AccordionSection
            summary="Nested accordion summary"
            isOpen
            referenceId="referenceId-02"
          >
            Accordion details - A
          </AccordionSection>
          <AccordionSection
            summary="Nested accordion summary"
            referenceId="referenceId-03"
          >
            Accordion details - B
          </AccordionSection>
        </Accordion>
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-04"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        referenceId="referenceId-05"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));

it('renders an accordion with action overflow', () =>
  matchesMarkup(
    <Accordion>
      <AccordionSection
        summary="Accordion summary"
        actionMenu={
          <ActionOverflow position="right" dropdownIsOpen={false} />
        }
        isOpen
        referenceId="referenceId-01"
      >
        Accordion details - A
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        actionMenu={
          <ActionOverflow position="right" dropdownIsOpen={false} />
        }
        referenceId="referenceId-02"
      >
        Accordion details - B
      </AccordionSection>
      <AccordionSection
        summary="Accordion summary"
        actionMenu={
          <ActionOverflow position="right" dropdownIsOpen={false} />
        }
        referenceId="referenceId-03"
      >
        Accordion details - C
      </AccordionSection>
    </Accordion>
  ));
