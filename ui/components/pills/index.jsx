import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icons/';
import { Tooltip } from '../tooltips/base/example';

export let Pill = props => {
  const removeTitle =
    props.removeTitle ||
    (props.label ? `Remove ${props.label}` : 'Remove');
  const removeAssistiveText =
    props.removeAssistiveText ||
    (props.label ? `Remove ${props.label}` : 'Remove');

  return (
    <span className={classNames('slds-pill slds-pill_link', props.className)}>
      {props.children}
      <a
        href="#"
        className="slds-pill__action"
        title={props.label || 'Full pill label verbiage mirrored here'}
        onClick={e => e.preventDefault()}
      >
        <span className="slds-pill__label">{props.label || 'Pill Label'}</span>
      </a>
      <ButtonIcon
        className="slds-button_icon slds-pill__remove"
        symbol="close"
        assistiveText={removeAssistiveText}
        title={removeTitle}
      />
    </span>
  );
};

Pill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeAssistiveText: PropTypes.string,
  removeTitle: PropTypes.string
};

export let PillContainer = props => {
  return (
    <div
      className={classNames({
        'slds-pill_container': props.variant !== 'listbox-group',
        'slds-listbox_selection-group': props.variant === 'listbox-group',
        'slds-pill_container_bare': props.variant === 'container-bare'
      })}
    >
      {props.children}
    </div>
  );
};

PillContainer.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
};

export let ListboxPill = props => {
  const removeTitle =
    props.removeTitle ||
    (props.label ? `Remove ${props.label}` : 'Remove');
  const removeAssistiveText =
    props.removeAssistiveText ||
    (props.label ? `Remove ${props.label}` : 'Remove');

  return (
    <span className={classNames('slds-pill', props.className)}>
      {props.children}
      <span
        className="slds-pill__label"
        title={props.label || 'Full pill label verbiage mirrored here'}
      >
        {props.label || 'Pill Label'}
      </span>
      <span className="slds-icon_container slds-pill__remove" title={removeTitle}>
        <ButtonIcon
          className="slds-button_icon slds-pill__remove"
          symbol="close"
          assistiveText={removeAssistiveText}
          title={removeTitle}
        />
      </span>
    </span>
  );
};

ListboxPill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeAssistiveText: PropTypes.string,
  removeTitle: PropTypes.string
};

export let ListboxPills = props => (
  <ul
    className={classNames(
      'slds-listbox slds-listbox_horizontal',
      props.className
    )}
    aria-label="Selected Options:"
    aria-describedby={props.id}
  >
    {props.children}
  </ul>
);

ListboxPills.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string
};

export let ListboxPillsItem = props => (
  <li
    className={classNames('slds-listbox-item', props.className)}
    aria-hidden={props['aria-hidden']}
  >
    {props.children}
  </li>
);

ListboxPillsItem.propTypes = {
  'aria-hidden': PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string
};

export let PillWithTruncation = props => {
  const labelText =
    props.label ||
    'Pill label that is longer than the area that contains it';
  const removeTitle = props.removeTitle || `Remove ${labelText}`;
  const removeAssistiveText =
    props.removeAssistiveText || `Remove ${labelText}`;

  return (
    <span
      className={classNames('slds-pill', props.className)}
      tabIndex={props.tabIndex}
      aria-selected="true"
    >
      {props.children}
      <Tooltip
        className="slds-nubbin_bottom-left"
        id="help"
        style={{
          position: 'absolute',
          top: '-45px',
          left: '-2px'
        }}
      >
        {labelText}
      </Tooltip>
      <span className="slds-pill__label" title={labelText}>
        {labelText}
      </span>
      <span className="slds-icon_container slds-pill__remove" title={removeTitle}>
        <ButtonIcon
          className="slds-button_icon slds-pill__remove"
          symbol="close"
          assistiveText={removeAssistiveText}
          title={removeTitle}
        />
      </span>
    </span>
  );
};

PillWithTruncation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeAssistiveText: PropTypes.string,
  removeTitle: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export let LinkedPillWithTruncation = props => {
  const labelText =
    props.label ||
    'Pill label that is longer than the area that contains it';
  const removeTitle = props.removeTitle || `Remove ${labelText}`;
  const removeAssistiveText =
    props.removeAssistiveText || `Remove ${labelText}`;

  return (
    <span className={classNames('slds-pill slds-pill_link', props.className)}>
      {props.children}
      <Tooltip
        className="slds-nubbin_bottom-left"
        id="help"
        style={{
          position: 'absolute',
          top: '-45px',
          left: '-2px'
        }}
      >
        {labelText}
      </Tooltip>
      <a
        href="#"
        className="slds-pill__action"
        title={props.label || 'Full pill label verbiage mirrored here'}
        onClick={e => e.preventDefault()}
      >
        <span className="slds-pill__label">{labelText}</span>
      </a>
      <ButtonIcon
        className="slds-button_icon slds-pill__remove"
        symbol="close"
        assistiveText={removeAssistiveText}
        title={removeTitle}
      />
    </span>
  );
};

LinkedPillWithTruncation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeAssistiveText: PropTypes.string,
  removeTitle: PropTypes.string
};
