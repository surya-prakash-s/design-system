// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from '../index';

describe('TrialBar Header', () => {
  it('renders default props correctly', () => {
    const testRenderer = TestRenderer.create(<Header />);
    const testInstance = testRenderer.root;
    const buttons = testInstance.findAllByType('button');
    expect(buttons[0].children[0]).toEqual('Take the salesforce tour');
    expect(buttons[1].children[1]).toEqual('Choose your tour');
    const box = testInstance.findByProps({
      className: 'slds-box slds-box_xx-small slds-theme_default'
    });
    expect(box.children[0]).toEqual('30');
  });

  it('sets aria-expanded to false when tourMenuOpen is falsy or omitted', () => {
    const testRenderer = TestRenderer.create(<Header />);
    const testInstance = testRenderer.root;
    const buttons = testInstance.findAllByType('button');
    expect(buttons[1].props['aria-expanded']).toEqual('false');
  });

  it('sets aria-expanded to true when tourMenuOpen is true', () => {
    const testRenderer = TestRenderer.create(<Header tourMenuOpen />);
    const testInstance = testRenderer.root;
    const buttons = testInstance.findAllByType('button');
    expect(buttons[1].props['aria-expanded']).toEqual('true');
  });

  it('renders custom tourButtonText, tourSelectText, and daysLeft', () => {
    const testRenderer = TestRenderer.create(
      <Header
        daysLeft={14}
        tourButtonText="Start Guided Tour"
        tourSelectText="Select Product Tour"
      />
    );
    const testInstance = testRenderer.root;
    const buttons = testInstance.findAllByType('button');
    expect(buttons[0].children[0]).toEqual('Start Guided Tour');
    expect(buttons[1].children[1]).toEqual('Select Product Tour');
    const box = testInstance.findByProps({
      className: 'slds-box slds-box_xx-small slds-theme_default'
    });
    expect(box.children[0]).toEqual('14');
  });

  it('sets type="button" on all button elements', () => {
    const testRenderer = TestRenderer.create(<Header />);
    const testInstance = testRenderer.root;
    const buttons = testInstance.findAllByType('button');
    buttons.forEach(button => {
      expect(button.props.type).toEqual('button');
    });
  });
});
