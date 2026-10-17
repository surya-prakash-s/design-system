// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../button-icons/';
import MediaObject from '../../../utilities/media-objects/index.react';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const image = (
  <a
    className="slds-avatar slds-avatar_circle slds-avatar_medium"
    href="#"
    onClick={e => e.preventDefault()}
  >
    <img
      alt="Person name"
      src="/assets/images/avatar2.jpg"
      title="User avatar"
    />
  </a>
);

export let Publisher = props => {
  const addUserText =
    props.addUserAssistiveText ||
    props.addUserTitle ||
    (typeof props.label === 'string'
      ? `Add user to ${props.label}`
      : 'Add User');
  const attachFileText =
    props.attachFileAssistiveText ||
    props.attachFileTitle ||
    (typeof props.label === 'string'
      ? `Attach a file to ${props.label}`
      : 'Attach a file');

  return (
    <MediaObject figureLeft={image} className="slds-comment slds-hint-parent">
      <div
        className={classNames(
          'slds-publisher slds-publisher_comment',
          props.className
        )}
      >
        <label htmlFor="comment-text-input-01" className="slds-assistive-text">
          {props.label || 'Write a comment'}
        </label>
        <textarea
          id="comment-text-input-01"
          className="slds-publisher__input slds-input_bare slds-text-longform"
          placeholder="Write a comment&hellip;"
        />
        <div className="slds-publisher__actions slds-grid slds-grid_align-spread">
          <ul className="slds-grid">
            <li>
              <ButtonIcon
                className="slds-button_icon-container"
                symbol="adduser"
                assistiveText={addUserText}
                title={addUserText}
              />
            </li>
            <li>
              <ButtonIcon
                className="slds-button_icon-container"
                symbol="attach"
                assistiveText={attachFileText}
                title={attachFileText}
              />
            </li>
          </ul>
          <button className="slds-button slds-button_brand">Comment</button>
        </div>
      </div>
    </MediaObject>
  );
};

Publisher.propTypes = {
  addUserAssistiveText: PropTypes.string,
  addUserTitle: PropTypes.string,
  attachFileAssistiveText: PropTypes.string,
  attachFileTitle: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.node
};

/// ////////////////////////////////////////
// State Constructor(s)
/// ////////////////////////////////////////

// @todo - Need to find imports and delete this part

export let Default = props => <Publisher />;

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Publisher />;

export const examples = [
  {
    id: 'active',
    label: 'Active',
    element: <Publisher className="slds-is-active" />
  },
  {
    id: 'focused',
    label: 'Focused',
    element: <Publisher className="slds-has-focus" />
  }
];
