// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ProgressBar = props => {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    assistiveText,
    className,
    hasCircularEnds,
    isSuccess,
    isVertical,
    title,
    value = 0
  } = props;

  const progressBarStyle = isVertical
    ? { height: `${value}%` }
    : { width: `${value}%` };

  const computedAriaLabel =
    ariaLabel ||
    title ||
    (!ariaLabelledby ? '{{Placeholder for description of progress bar}}' : undefined);

  return (
    <div
      className={classNames(
        'slds-progress-bar',
        { 'slds-progress-bar_vertical': isVertical },
        { 'slds-progress-bar_circular': hasCircularEnds },
        className
      )}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      aria-labelledby={ariaLabelledby}
      aria-label={computedAriaLabel}
      role="progressbar"
    >
      <span
        className={classNames('slds-progress-bar__value', {
          'slds-progress-bar__value_success': isSuccess
        })}
        style={progressBarStyle}
      >
        <span className="slds-assistive-text">
          {assistiveText || `Progress: ${value}%`}
        </span>
      </span>
    </div>
  );
};

ProgressBar.propTypes = {
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  assistiveText: PropTypes.node,
  className: PropTypes.string,
  hasCircularEnds: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isVertical: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

ProgressBar.defaultProps = {
  value: 0
};
