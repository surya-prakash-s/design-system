import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Avatar, AvatarIcon, AvatarInitials } from '../avatar';

export const AvatarGroupContent = props => {
  const { isPrimary, isInverse, type } = props;
  const getContentType = (type, isPrimary) => {
    switch (type) {
      case 'icon':
        return <AvatarGroupedIcon />;
      case 'user-initials':
        return <AvatarGroupedUserInitials isInverse={isInverse} />;
      case 'image':
      default:
        return <AvatarImage imgType={isPrimary ? '1' : '2'} />;
    }
  };

  return (
    <Fragment>
      <AvatarGrouped isPrimary isInverse={isInverse}>
        {getContentType(type, isPrimary)}
      </AvatarGrouped>
      <AvatarGrouped isInverse={isInverse}>
        {getContentType(type, false)}
      </AvatarGrouped>
    </Fragment>
  );
};

AvatarGroupContent.defaultProps = {
  type: 'image'
};

AvatarGroupContent.propTypes = {
  type: PropTypes.oneOf(['image', 'icon', 'user-initials']),
  isPrimary: PropTypes.bool,
  isInverse: PropTypes.bool
};

export const AvatarGroup = props => (
  <span
    className={classNames('slds-avatar-group', {
      [`slds-avatar-group_${props.size}`]: props.size
    })}
  >
    {props.children}
  </span>
);

AvatarGroup.defaultProps = {
  children: <AvatarGroupContent />
};

AvatarGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large'])
};

export const AvatarGrouped = props => {
  const { children, isPrimary, isInverse } = props;
  return (
    <Avatar isGrouped isPrimary={isPrimary} isInverse={isInverse}>
      {children}
    </Avatar>
  );
};

AvatarGrouped.propTypes = {
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool,
  isInverse: PropTypes.bool
};

export const AvatarImage = props => {
  const { imgType, src, alt, title } = props;
  const defaultText = `Person ${imgType} name`;
  const assistiveText = alt || title || defaultText;
  const imageSrc = src || `/assets/images/avatar${imgType}.jpg`;
  return (
    <img
      alt={assistiveText}
      src={imageSrc}
      title={title || assistiveText}
    />
  );
};

AvatarImage.defaultProps = {
  imgType: '1'
};

AvatarImage.propTypes = {
  alt: PropTypes.string,
  imgType: PropTypes.oneOf(['1', '2']),
  src: PropTypes.string,
  title: PropTypes.string
};

export const AvatarGroupedIcon = props => (
  <AvatarIcon
    symbol={props.symbol || 'user'}
    isGrouped
    assistiveText={props.assistiveText}
    title={props.title}
  />
);

AvatarGroupedIcon.propTypes = {
  assistiveText: PropTypes.string,
  symbol: PropTypes.string,
  title: PropTypes.string
};

export const AvatarGroupedUserInitials = props => (
  <AvatarInitials
    isGrouped
    isInverse={props.isInverse}
    title={props.title || 'Person name'}
    initials={props.initials || 'WW'}
  />
);

AvatarGroupedUserInitials.propTypes = {
  initials: PropTypes.string,
  isInverse: PropTypes.bool,
  title: PropTypes.string
};
