import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let Strength = props => {
  const { assistiveText, title, className, ...rest } = props;
  const label = title || assistiveText;
  const srText = assistiveText || title;

  return (
    <span
      {...rest}
      title={label}
      className={classNames('slds-icon-strength', className)}
    >
      <svg viewBox="0 0 27 7" aria-hidden="true">
        <circle r="3.025" cx="3.5" cy="3.5" />
        <circle r="3.025" cx="13.5" cy="3.5" />
        <circle r="3.025" cx="23.5" cy="3.5" />
      </svg>
      {srText && <span className="slds-assistive-text">{srText}</span>}
    </span>
  );
};

Strength.propTypes = {
  assistiveText: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Strength;
