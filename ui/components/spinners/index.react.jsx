// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = props => {
  const {
    assistiveText,
    className,
    containerClassName,
    children,
    ...rest
  } = props;

  return (
    <div className={classNames('slds-spinner_container', containerClassName)}>
      <div
        role="status"
        className={classNames('slds-spinner', className)}
        {...rest}
      >
        <span className="slds-assistive-text">{assistiveText}</span>
        <div className="slds-spinner__dot-a" />
        <div className="slds-spinner__dot-b" />
      </div>
      {children}
    </div>
  );
};

Spinner.propTypes = {
  assistiveText: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.node
};

Spinner.defaultProps = {
  assistiveText: 'Loading'
};

export default Spinner;
