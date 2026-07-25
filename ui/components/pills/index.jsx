import React from 'react';
import ButtonIcon from '../button-icons/';
import classNames from 'classnames';
import { Tooltip } from '../tooltips/base/example';

export let Pill = props => {
  const label = props.label || 'Pill Label';
  return (
    <span className={classNames('slds-pill slds-pill_link', props.className)}>
      {props.children}
      <a
        href="#"
        className="slds-pill__action"
        title={props.label || 'Full pill label verbiage mirrored here'}
        onClick={e => e.preventDefault()}
      >
        <span className="slds-pill__label">{label}</span>
      </a>
      <ButtonIcon
        className="slds-button_icon slds-pill__remove"
        symbol="close"
        assistiveText={`Remove ${label}`}
        title={`Remove ${label}`}
      />
    </span>
  );
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

export let ListboxPill = props => {
  const label = props.label || 'Pill Label';
  return (
    <span
      className={classNames('slds-pill', props.className)}
    >
      {props.children}
      <span
        className="slds-pill__label"
        title={props.label || 'Full pill label verbiage mirrored here'}
      >
        {label}
      </span>
      <span className="slds-icon_container slds-pill__remove" title={`Remove ${label}`}>
        <ButtonIcon
          className="slds-button_icon slds-pill__remove"
          symbol="close"
          assistiveText={`Remove ${label}`}
          title={`Remove ${label}`}
        />
      </span>
    </span>
  );
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

export let ListboxPillsItem = props => (
  <li
    className={classNames('slds-listbox-item', props.className)}
    aria-hidden={props['aria-hidden']}
  >
    {props.children}
  </li>
);

export let PillWithTruncation = props => {
  const label = props.label || 'Pill label that is longer than the area that contains it';
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
        {label}
      </Tooltip>
      <span
        className="slds-pill__label"
        title={label}
      >
        {label}
      </span>
      <span className="slds-icon_container slds-pill__remove" title={`Remove ${label}`}>
        <ButtonIcon
          className="slds-button_icon slds-pill__remove"
          symbol="close"
          assistiveText={`Remove ${label}`}
          title={`Remove ${label}`}
        />
      </span>
    </span>
  );
};

export let LinkedPillWithTruncation = props => {
  const label = props.label || 'Pill label that is longer than the area that contains it';
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
        {label}
      </Tooltip>
      <a
        href="#"
        className="slds-pill__action"
        title={props.label || 'Full pill label verbiage mirrored here'}
        onClick={e => e.preventDefault()}
      >
        <span className="slds-pill__label">
          {label}
        </span>
      </a>
      <ButtonIcon
        className="slds-button_icon slds-pill__remove"
        symbol="close"
        assistiveText={`Remove ${label}`}
        title={`Remove ${label}`}
      />
    </span>
  );
};
