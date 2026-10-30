// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import * as PillExamples from '../base/example';
import * as ListboxOfPillOptions from '../listbox-of-pill-options/example';
import {
  Pill,
  ListboxPill,
  PillWithTruncation,
  LinkedPillWithTruncation
} from '../index';

const { matchesMarkup } = createHelpers(__dirname);

describe('Pill', () => {
  it('renders a pill', () => matchesMarkup(PillExamples.default));

  it('renders a pill with an icon', () =>
    matchesMarkup(getDisplayElementById(PillExamples.examples, 'icon')));

  it('renders a pill with an avatar', () =>
    matchesMarkup(getDisplayElementById(PillExamples.examples, 'avatar')));

  it('renders a pill with an error', () =>
    matchesMarkup(getDisplayElementById(PillExamples.states, 'error')));

  it('renders a pill that is truncated', () =>
    matchesMarkup(getDisplayElementById(PillExamples.states, 'truncated')));

  it('renders a pill in a container', () =>
    matchesMarkup(getDisplayElementById(PillExamples.examples, 'container')));

  it('renders a pill in a container - bare (deprecated)', () =>
    matchesMarkup(getDisplayElementById(PillExamples.examples, 'container-bare')));
});

describe('Pill Removal Contextual Labels', () => {
  it('derives contextual remove button assistiveText and title from label', () => {
    const wrapper = mount(<Pill label="Salesforce" />);
    const buttonIcon = wrapper.find('ButtonIcon');
    expect(buttonIcon.prop('assistiveText')).toEqual('Remove Salesforce');
    expect(buttonIcon.prop('title')).toEqual('Remove Salesforce');
  });

  it('supports custom removeButtonAssistiveText and removeButtonTitle on Pill', () => {
    const wrapper = mount(
      <Pill
        label="Salesforce"
        removeButtonAssistiveText="Delete Salesforce item"
        removeButtonTitle="Delete Salesforce item"
      />
    );
    const buttonIcon = wrapper.find('ButtonIcon');
    expect(buttonIcon.prop('assistiveText')).toEqual('Delete Salesforce item');
    expect(buttonIcon.prop('title')).toEqual('Delete Salesforce item');
  });

  it('derives contextual remove button text on ListboxPill', () => {
    const wrapper = mount(<ListboxPill label="Account Acme" />);
    const buttonIcon = wrapper.find('ButtonIcon');
    expect(buttonIcon.prop('assistiveText')).toEqual('Remove Account Acme');
    expect(buttonIcon.prop('title')).toEqual('Remove Account Acme');
  });

  it('derives contextual remove button text on PillWithTruncation and LinkedPillWithTruncation', () => {
    const wrapper1 = mount(<PillWithTruncation label="Opportunity" />);
    expect(wrapper1.find('ButtonIcon').prop('assistiveText')).toEqual(
      'Remove Opportunity'
    );

    const wrapper2 = mount(<LinkedPillWithTruncation label="Contact" />);
    expect(wrapper2.find('ButtonIcon').prop('assistiveText')).toEqual(
      'Remove Contact'
    );
  });
});

describe('Pill - Listbox of Pills', () => {
  it('renders a default listbox of pills', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.default, 'default')));

  it('renders a listbox of pills with an icon', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-with-icon')));

  it('renders a listbox of pills with an avatar', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-with-avatar')));

  it('renders a listbox of pills - bare', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-bare')));

  it('renders a listbox of pills - group', () =>
    matchesMarkup(getDisplayElementById(ListboxOfPillOptions.examples, 'listbox-pill-group')));
});
