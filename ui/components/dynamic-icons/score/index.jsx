import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Score = props => {
  const { assistiveText, title, className, ...rest } = props;
  const label = title || assistiveText;
  const srText = assistiveText || title;

  return (
    <span
      {...rest}
      className={classNames('slds-icon-score', className)}
      title={label}
    >
      <svg
        viewBox="0 0 5 5"
        className="slds-icon-score__positive"
        aria-hidden="true"
      >
        <circle cx="50%" cy="50%" r="1.875" />
      </svg>
      <svg
        viewBox="0 0 5 5"
        className="slds-icon-score__negative"
        aria-hidden="true"
      >
        <circle cx="50%" cy="50%" r="1.875" />
      </svg>
      {srText && <span className="slds-assistive-text">{srText}</span>}
    </span>
  );
};

Score.propTypes = {
  assistiveText: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Score;
