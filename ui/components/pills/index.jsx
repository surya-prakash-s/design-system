import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../button-icons/';
import classNames from 'classnames';
import { Tooltip } from '../tooltips/base/example';

export let Pill = props => {
  const removeLabel =
    props.removeButtonAssistiveText ||
    props.removeButtonTitle ||
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
        assistiveText={removeLabel}
        title={props.removeButtonTitle || removeLabel}
      />
    </span>
  );
};

Pill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeButtonAssistiveText: PropTypes.string,
  removeButtonTitle: PropTypes.string
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
      {props.type === 'listbox' && (
        <div className="slds-assistive-text" id={props.id}>
          Press delete or backspace to remove
        </div>
      )}
      {props.children}
    </div>
  );
};

PillContainer.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};

export let ListboxPill = props => {
  const removeLabel =
    props.removeButtonAssistiveText ||
    props.removeButtonTitle ||
    (props.label ? `Remove ${props.label}` : 'Remove');
  const removeTitle = props.removeButtonTitle || removeLabel;
  return (
    <span
      className={classNames('slds-pill', props.className)}
      role={props.role || 'option'}
      tabIndex={props.tabIndex}
      aria-selected={props['aria-selected'] || 'true'}
    >
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
          assistiveText={removeLabel}
          title={removeTitle}
        />
      </span>
    </span>
  );
};

ListboxPill.propTypes = {
  'aria-selected': PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeButtonAssistiveText: PropTypes.string,
  removeButtonTitle: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export let ListboxPills = props => (
  <ul
    className={classNames(
      'slds-listbox slds-listbox_horizontal',
      props.className
    )}
    role={props.role || 'listbox'}
    aria-orientation={props['aria-orientation'] || 'horizontal'}
    aria-label={props['aria-label'] || 'Selected Options:'}
    aria-describedby={props.id}
  >
    {props.children}
  </ul>
);

ListboxPills.propTypes = {
  'aria-label': PropTypes.string,
  'aria-orientation': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string
};

export let ListboxPillsItem = props => (
  <li
    className={classNames('slds-listbox-item', props.className)}
    role={props.role || 'presentation'}
    aria-hidden={props['aria-hidden']}
  >
    {props.children}
  </li>
);

ListboxPillsItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  'aria-hidden': PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export let PillWithTruncation = props => {
  const removeLabel =
    props.removeButtonAssistiveText ||
    props.removeButtonTitle ||
    (props.label ? `Remove ${props.label}` : 'Remove');
  const removeTitle = props.removeButtonTitle || removeLabel;
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
        {props.label || 'Pill label that is longer than the area that contains it'}
      </Tooltip>
      <span
        className="slds-pill__label"
        title={props.label || 'Pill label that is longer than the area that contains it'}
      >
        {props.label || 'Pill label that is longer than the area that contains it'}
      </span>
      <span className="slds-icon_container slds-pill__remove" title={removeTitle}>
        <ButtonIcon
          className="slds-button_icon slds-pill__remove"
          symbol="close"
          assistiveText={removeLabel}
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
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeButtonAssistiveText: PropTypes.string,
  removeButtonTitle: PropTypes.string
};

export let LinkedPillWithTruncation = props => {
  const removeLabel =
    props.removeButtonAssistiveText ||
    props.removeButtonTitle ||
    (props.label ? `Remove ${props.label}` : 'Remove');
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
        {props.label || 'Pill label that is longer than the area that contains it'}
      </Tooltip>
      <a
        href="#"
        className="slds-pill__action"
        title={props.label || 'Full pill label verbiage mirrored here'}
        onClick={e => e.preventDefault()}
      >
        <span className="slds-pill__label">
          {props.label || 'Pill label that is longer than the area that contains it'}
        </span>
      </a>
      <ButtonIcon
        className="slds-button_icon slds-pill__remove"
        symbol="close"
        assistiveText={removeLabel}
        title={props.removeButtonTitle || removeLabel}
      />
    </span>
  );
};

LinkedPillWithTruncation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  removeButtonAssistiveText: PropTypes.string,
  removeButtonTitle: PropTypes.string
};
