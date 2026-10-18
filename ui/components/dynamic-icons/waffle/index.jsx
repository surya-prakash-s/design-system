import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let WaffleIcon = props => {
  const { assistiveText, title, className, ...rest } = props;
  const label = title || assistiveText || 'Open App Launcher';
  const srText = assistiveText || title || 'Open App Launcher';

  return (
    <button
      {...rest}
      type="button"
      className={classNames(
        'slds-button slds-icon-waffle_container',
        className
      )}
      title={label}
    >
      <span className="slds-icon-waffle">
        <span className="slds-r1" />
        <span className="slds-r2" />
        <span className="slds-r3" />
        <span className="slds-r4" />
        <span className="slds-r5" />
        <span className="slds-r6" />
        <span className="slds-r7" />
        <span className="slds-r8" />
        <span className="slds-r9" />
      </span>
      <span className="slds-assistive-text">{srText}</span>
    </button>
  );
};

WaffleIcon.propTypes = {
  assistiveText: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};

export default WaffleIcon;
