/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';

import ButtonIcon from '../';
import { ButtonIconStateful } from '../stateful/example';

const { matchesMarkup } = createHelpers(__dirname);

// Bare
describe('bare button icon', () => {
  it('renders a button icon', () => matchesMarkup(<ButtonIcon assistiveText="Settings" title="Settings" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled assistiveText="Settings" title="Settings" />));
});

// Container
describe('button icon with container', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon size="medium" assistiveText="Settings" title="Settings" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled size="medium" assistiveText="Settings" title="Settings" />));
});

// Bordered Container
describe('button icon with bordered transparent container', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="transparent" assistiveText="Settings" title="Settings" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="transparent" assistiveText="Settings" title="Settings" />));
});

// Bordered Container Filled
describe('button icon with bordered filled container', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="neutral" assistiveText="Settings" title="Settings" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="neutral" assistiveText="Settings" title="Settings" />));
});

// Brand
describe('brand button icon', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="brand" assistiveText="Settings" title="Settings" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="brand" assistiveText="Settings" title="Settings" />));
});

// Inverse
describe('button icon on inversed background', () => {
  it('renders a button icon', () =>
    matchesMarkup(<ButtonIcon theme="inverse" assistiveText="Settings" title="Settings" />));

  it('renders a disabled button icon', () =>
    matchesMarkup(<ButtonIcon disabled theme="inverse" assistiveText="Settings" title="Settings" />));
});

// Dropdown
describe('button menu icon for dropdowns', () => {
  it('renders a button menu icon', () =>
    matchesMarkup(<ButtonIcon hasDropdown theme="neutral" assistiveText="Settings" title="Settings" />));

  it('renders a button menu icon on inversed background', () =>
    matchesMarkup(
      <ButtonIcon
        className="slds-button_icon-inverse"
        hasDropdown
        theme="transparent"
        assistiveText="Settings"
        title="Settings"
      />
    ));
});

// Stateful
describe('stateful button icon', () => {
  it('renders the stateful button icon', () =>
    matchesMarkup(
      <ButtonIconStateful
        aria-pressed="false"
        assistiveText="Like"
        symbol="like"
        theme="neutral"
        title="Like"
      />
    ));

  it('renders a selected stateful button icon', () => {
    matchesMarkup(
      <ButtonIconStateful
        title="Like"
        symbol="like"
        theme="neutral"
        assistiveText="Like"
        aria-pressed="true"
        selected
      />
    );
  });

  it('renders a disabled stateful button icon', () => {
    matchesMarkup(
      <ButtonIconStateful
        title="Pin"
        symbol="pin"
        theme="neutral"
        assistiveText="Pin"
        aria-pressed="true"
        disabled
      />
    );
  });

  it('renders a selected disabled stateful button icon', () => {
    matchesMarkup(
      <ButtonIconStateful
        title="Pin"
        symbol="pinned"
        theme="neutral"
        assistiveText="Pin"
        aria-pressed="true"
        selected
        disabled
      />
    );
  });
});
