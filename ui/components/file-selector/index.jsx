// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import SvgIcon from '../../shared/svg-icon/';

const FileSelector = props => {
  const primaryLabelId = uniqueId('file-selector-primary-label-');
  const secondaryLabelId = uniqueId('file-selector-secondary-label-');
  const fileUploadInputId = uniqueId('file-upload-input-');
  const errorId = uniqueId('error-');

  const label = props.label || 'Attachment';
  const errorMessage = props.errorMessage || 'File type not supported';
  const isInvalid = props.error || props.dragoverError;

  return (
    <div
      className={classNames(
        'slds-form-element',
        {
          'slds-has-error': props.error
        }
      )}
      role="group"
      aria-labelledby={primaryLabelId}
    >
      <span className="slds-form-element__label" id={primaryLabelId}>
        {label}
      </span>
      <div className="slds-form-element__control">
        <div className={classNames('slds-file-selector', {
          'slds-file-selector_files': props.files,
          'slds-file-selector_images': props.images
        })}>
          <div
            className={classNames(
              'slds-file-selector__dropzone',
              {
                'slds-has-drag-over': props.dragover
              }
            )}
          >
            <input
              className="slds-file-selector__input slds-assistive-text"
              accept={props.accept || 'image/png'}
              type="file"
              id={fileUploadInputId}
              disabled={props.disabled || props.dragoverError}
              aria-invalid={isInvalid ? 'true' : undefined}
              aria-describedby={props.error ? errorId : props['aria-describedby'] || null}
            />
            <label
              className="slds-file-selector__body"
              htmlFor={fileUploadInputId}
              id={secondaryLabelId}
            >
              <span className="slds-file-selector__button slds-button slds-button_neutral">
                <SvgIcon
                  className="slds-button__icon slds-button__icon_left"
                  sprite="utility"
                  symbol="upload"
                />Upload {props.files ? 'Files' : 'Image'}
              </span>
              <span className="slds-file-selector__text slds-medium-show">
                or Drop {props.files ? 'Files' : 'Image'}
              </span>
            </label>
          </div>
        </div>
      </div>
      {props.error && (
        <div className="slds-form-element__help" id={errorId}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

FileSelector.propTypes = {
  accept: PropTypes.string,
  'aria-describedby': PropTypes.string,
  disabled: PropTypes.bool,
  dragover: PropTypes.bool,
  dragoverError: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.node,
  files: PropTypes.bool,
  images: PropTypes.bool,
  label: PropTypes.node
};

export default FileSelector;
