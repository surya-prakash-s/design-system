/* eslint-env jest */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Tile, TileMedia } from '../base/example';
import ButtonIcon from '../../button-icons/';

describe('Tile', () => {
  it('renders default tile without actions', () => {
    const testRenderer = TestRenderer.create(<Tile title="Salesforce UX" />);
    expect(testRenderer.root.findAllByType(ButtonIcon).length).toBe(0);
  });

  it('renders tile actions with contextual assistiveText and title when title is provided', () => {
    const testRenderer = TestRenderer.create(<Tile title="Salesforce UX" actions />);
    const buttonIcon = testRenderer.root.findByType(ButtonIcon);
    expect(buttonIcon.props.assistiveText).toBe('More options for Salesforce UX');
    expect(buttonIcon.props.title).toBe('More options for Salesforce UX');
  });

  it('renders tile actions with default assistiveText and title when title is omitted', () => {
    const testRenderer = TestRenderer.create(<Tile actions />);
    const buttonIcon = testRenderer.root.findByType(ButtonIcon);
    expect(buttonIcon.props.assistiveText).toBe('More options');
    expect(buttonIcon.props.title).toBe('More options');
  });

  it('allows explicit actionAssistiveText and actionTitle overrides on Tile', () => {
    const testRenderer = TestRenderer.create(
      <Tile
        title="Salesforce UX"
        actions
        actionAssistiveText="Custom action accessibility text"
        actionTitle="Custom action title"
      />
    );
    const buttonIcon = testRenderer.root.findByType(ButtonIcon);
    expect(buttonIcon.props.assistiveText).toBe('Custom action accessibility text');
    expect(buttonIcon.props.title).toBe('Custom action title');
  });
});

describe('TileMedia', () => {
  it('renders default tile media without actions', () => {
    const testRenderer = TestRenderer.create(<TileMedia title="Lexee L. Jackson" />);
    expect(testRenderer.root.findAllByType(ButtonIcon).length).toBe(0);
  });

  it('renders tile media actions with contextual assistiveText and title when title is provided', () => {
    const testRenderer = TestRenderer.create(<TileMedia title="Lexee L. Jackson" actions />);
    const buttonIcon = testRenderer.root.findByType(ButtonIcon);
    expect(buttonIcon.props.assistiveText).toBe('More options for Lexee L. Jackson');
    expect(buttonIcon.props.title).toBe('More options for Lexee L. Jackson');
  });

  it('renders tile media actions with default assistiveText and title when title is omitted', () => {
    const testRenderer = TestRenderer.create(<TileMedia actions />);
    const buttonIcon = testRenderer.root.findByType(ButtonIcon);
    expect(buttonIcon.props.assistiveText).toBe('More options');
    expect(buttonIcon.props.title).toBe('More options');
  });

  it('allows explicit actionAssistiveText and actionTitle overrides on TileMedia', () => {
    const testRenderer = TestRenderer.create(
      <TileMedia
        title="Lexee L. Jackson"
        actions
        actionAssistiveText="Custom media action accessibility text"
        actionTitle="Custom media action title"
      />
    );
    const buttonIcon = testRenderer.root.findByType(ButtonIcon);
    expect(buttonIcon.props.assistiveText).toBe('Custom media action accessibility text');
    expect(buttonIcon.props.title).toBe('Custom media action title');
  });
});
