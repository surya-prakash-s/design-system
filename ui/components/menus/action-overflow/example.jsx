// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../button-icons/';
import { Trigger, Menu, MenuList, MenuItem } from '../dropdown/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////
export const Context = props => (
  <div className="demo-only" style={{ height: '165px' }}>
    {props.children}
  </div>
);

export const ActionOverflow = props => {
  const { position, dropdownIsOpen, assistiveText, title } = props;
  const overflowLabel = assistiveText || title || 'Show More';
  const triggerIcon = (
    <ButtonIcon
      className="slds-button_icon-border-filled slds-button_icon-x-small"
      symbol="down"
      assistiveText={overflowLabel}
      aria-haspopup="true"
      title={title || overflowLabel}
    />
  );
  return (
    <Trigger isOpen={dropdownIsOpen} triggerIcon={triggerIcon}>
      <Menu
        className={classNames(
          'slds-dropdown_actions',
          `slds-dropdown_${position}`
        )}
      >
        <MenuList>
          <MenuItem tabIndex="0">Action One</MenuItem>
          <MenuItem>Action Two</MenuItem>
          <MenuItem>Action Three</MenuItem>
        </MenuList>
      </Menu>
    </Trigger>
  );
};

ActionOverflow.defaultProps = {
  dropdownIsOpen: true,
  position: 'left'
};

ActionOverflow.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  dropdownIsOpen: PropTypes.bool,
  assistiveText: PropTypes.string,
  title: PropTypes.string
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ActionOverflow />;
