// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { FormElementControl } from '../../form-element/';
import { Fieldset, Legend } from '../../radio-group/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let RadioButtonGroup = props => (
  <div className={classNames('slds-radio_button-group', props.className)}>
    {props.children}
  </div>
);

RadioButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export let RadioButton = props => {
  const exampleId = props.id || uniqueId('example-unique-id-');

  return (
    <span
      className={classNames('slds-button slds-radio_button', props.className)}
    >
      <input
        name={props.name}
        type="radio"
        id={exampleId}
        value={props.id || exampleId}
        disabled={props.disabled}
        aria-describedby={props.errorId || undefined}
        defaultChecked={props.checked}
      />
      <label className="slds-radio_button__label" htmlFor={exampleId}>
        <span className="slds-radio_faux">{props.children}</span>
      </label>
    </span>
  );
};

RadioButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  errorId: PropTypes.string,
  checked: PropTypes.bool
};

const ExampleRadioButtonGroup = ({
  legend,
  modifier,
  disabled,
  required,
  hasError
}) => {
  const exampleName = uniqueId('example-unique-name-');
  const exampleErrorId = uniqueId('error-unique-id-');

  return (
    <Fieldset className={hasError ? 'slds-has-error' : undefined} isRequired={required}>
      <Legend>
        {required && (
          <abbr className="slds-required" title="required" aria-hidden="true">
            *
          </abbr>
        )}
        {!legend && 'Radio Group Label'}
      </Legend>
      <FormElementControl>
        <RadioButtonGroup className={modifier}>
          <RadioButton id="monday" name={exampleName} disabled={disabled} errorId={hasError && exampleErrorId}>
            Mon
          </RadioButton>
          <RadioButton id="tuesday" name={exampleName} disabled={disabled} errorId={hasError && exampleErrorId}>
            Tue
          </RadioButton>
          <RadioButton id="wednesday" name={exampleName} disabled={disabled} errorId={hasError && exampleErrorId}>
            Wed
          </RadioButton>
          <RadioButton id="thursday" name={exampleName} disabled={disabled} errorId={hasError && exampleErrorId}>
            Thu
          </RadioButton>
          <RadioButton id="friday" name={exampleName} disabled={disabled} errorId={hasError && exampleErrorId}>
            Fri
          </RadioButton>
        </RadioButtonGroup>
        {hasError && (
          <div id={exampleErrorId} className="slds-form-element__help">
            This field is required
          </div>
        )}
      </FormElementControl>
    </Fieldset>
  );
};

ExampleRadioButtonGroup.propTypes = {
  legend: PropTypes.string,
  modifier: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  hasError: PropTypes.bool
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <ExampleRadioButtonGroup />;

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: <ExampleRadioButtonGroup disabled />
  },
  {
    id: 'required',
    label: 'Required',
    element: <ExampleRadioButtonGroup required />
  },
  {
    id: 'error',
    label: 'Has error',
    element: <ExampleRadioButtonGroup required hasError />
  }
];
