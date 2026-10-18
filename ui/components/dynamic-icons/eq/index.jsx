import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let EqIcon = props => {
  const { assistiveText, title, className, ...rest } = props;
  const label = title || assistiveText;
  const srText = assistiveText || title;

  return (
    <div
      {...rest}
      className={classNames('slds-icon-eq slds-is-animated', className)}
      title={label}
    >
      <div className="slds-icon-eq__bar" />
      <div className="slds-icon-eq__bar" />
      <div className="slds-icon-eq__bar" />
      {srText && <span className="slds-assistive-text">{srText}</span>}
    </div>
  );
};

EqIcon.propTypes = {
  assistiveText: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};

export default EqIcon;
