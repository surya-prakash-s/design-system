import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StandardIcon } from '../icons/standard/example';

export const Avatar = props => {
  const {
    children,
    className,
    isGrouped,
    isInverse,
    isPrimary,
    ariaHidden
  } = props;
  return (
    <span
      aria-hidden={ariaHidden}
      className={classNames('slds-avatar', className, {
        'slds-avatar-grouped': isGrouped,
        'slds-avatar-grouped__primary': isGrouped && isPrimary,
        'slds-avatar-grouped__secondary': isGrouped && !isPrimary,
        'slds-avatar-grouped_inverse': isGrouped && isInverse
      })}
    >
      {children}
    </span>
  );
};

Avatar.propTypes = {
  ariaHidden: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isGrouped: PropTypes.bool,
  isInverse: PropTypes.bool,
  isPrimary: PropTypes.bool
};

export const AvatarIcon = props => (
  <StandardIcon
    assistiveText={props.assistiveText}
    className={props.className}
    isGrouped={props.isGrouped}
    symbol={props.symbol}
    title={props.title}
  />
);

AvatarIcon.propTypes = {
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  isGrouped: PropTypes.bool,
  symbol: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export const AvatarInitials = props => {
  const { initials, title, iconClassName, isGrouped, isInverse } = props;
  return (
    <abbr
      className={classNames('slds-avatar__initials', {
        [iconClassName]: iconClassName,
        'slds-avatar__initials_inverse': isInverse && !iconClassName,
        'slds-avatar-grouped__initials': isGrouped
      })}
      title={title}
    >
      {initials}
    </abbr>
  );
};

AvatarInitials.propTypes = {
  title: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  isGrouped: PropTypes.bool,
  isInverse: PropTypes.bool
};
