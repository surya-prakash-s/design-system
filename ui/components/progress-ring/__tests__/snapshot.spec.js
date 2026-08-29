// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import ProgressRing from '../';

const { matchesMarkup } = createHelpers(__dirname);

describe('Progress Ring', () => {
  it('renders a partially drained ring', () =>
    matchesMarkup(<ProgressRing percent={20} />));
  it('renders a partially filled ring', () =>
    matchesMarkup(<ProgressRing percent={20} isFilling />));
  it('renders a partially filled ring with warning', () =>
    matchesMarkup(<ProgressRing percent={20} isFilling isWarning />));
  it('renders a partially draiend ring with error', () =>
    matchesMarkup(<ProgressRing percent={20} isExpired />));
  it('renders a complete ring', () =>
    matchesMarkup(<ProgressRing percent={100} isComplete />));
  it('renders an empty ring', () =>
    matchesMarkup(<ProgressRing percent={0} isFilling />));
  it('renders a filling active step ring', () =>
    matchesMarkup(<ProgressRing percent={20} isActiveStep isFilling />));
  it('renders with aria-labelledby and no fallback aria-label', () =>
    matchesMarkup(
      <ProgressRing percent={20} aria-labelledby="custom-label-id" />
    ));
  it('renders with title as aria-label fallback', () =>
    matchesMarkup(<ProgressRing percent={20} title="Step 2 of 5" />));
  it('renders with assistiveText as aria-label fallback', () =>
    matchesMarkup(<ProgressRing percent={20} assistiveText="Step 3 of 5" />));
});
