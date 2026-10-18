/* eslint-env jest */
import React from 'react';

import TypingIcon from '../typing';
import WaffleIcon from '../waffle';
import EqIcon from '../eq';
import Score from '../score';
import Strength from '../strength';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Typing icon', () => {
  it('renders a typing icon', () =>
    matchesMarkup(
      <TypingIcon assistiveText="User typing" title="User typing" />
    ));

  it('renders an animated typing icon', () =>
    matchesMarkup(
      <TypingIcon assistiveText="User typing" isAnimated title="User typing" />
    ));

  it('renders a paused animated typing icon', () =>
    matchesMarkup(
      <TypingIcon
        assistiveText="User typing"
        isAnimated
        isPaused
        title="User typing"
      />
    ));
});

describe('Waffle icon', () => {
  it('renders a default waffle icon with default launcher title', () =>
    matchesMarkup(<WaffleIcon />));

  it('renders a waffle icon with custom title and assistiveText', () =>
    matchesMarkup(
      <WaffleIcon title="App Launcher" assistiveText="App Launcher" />
    ));
});

describe('EQ icon', () => {
  it('renders an EQ icon with custom title and assistiveText', () =>
    matchesMarkup(
      <EqIcon title="Audio equalizer" assistiveText="Audio equalizer" />
    ));
});

describe('Score icon', () => {
  it('renders a Score icon with custom title and assistiveText', () =>
    matchesMarkup(<Score title="Score: 5" assistiveText="Score: 5" />));
});

describe('Strength icon', () => {
  it('renders a Strength icon with custom title and assistiveText', () =>
    matchesMarkup(
      <Strength title="Strength: high" assistiveText="Strength: high" />
    ));
});
