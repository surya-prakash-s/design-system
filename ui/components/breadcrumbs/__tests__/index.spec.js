// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import BreadCrumbs from '../index.react';
import { BreadcrumbsBase, BreadcrumbsWithOverflow } from '../base/example';

const { Crumb } = BreadCrumbs;
const { matchesMarkup } = createHelpers(__dirname);

it('renders a base breadcrumb', () => matchesMarkup(<BreadcrumbsBase />));

it('renders a overflow menu as the first breadcrumb', () =>
  matchesMarkup(<BreadcrumbsWithOverflow />));

it('renders a breadcrumb with isCurrent', () =>
  matchesMarkup(
    <BreadCrumbs>
      <Crumb>Parent Entity</Crumb>
      <Crumb isCurrent>Current Page</Crumb>
    </BreadCrumbs>
  ));

it('renders a breadcrumb with custom aria-current', () =>
  matchesMarkup(
    <BreadCrumbs>
      <Crumb>Parent Entity</Crumb>
      <Crumb aria-current="location">Current Location</Crumb>
    </BreadCrumbs>
  ));
