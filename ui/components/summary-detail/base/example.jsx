// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge } from '../../badges';
import ButtonIcon from '../../button-icons';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const referenceId = 'expando-unique-id';
const loremText =
  'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.';

/* -----------------------------------------------------------------------------
    Public
----------------------------------------------------------------------------- */
export const SummaryDetail = props => (
  <div className={classNames('slds-summary-detail', props.className)}>
    {props.children}
  </div>
);

export const SummaryDetailContent = props => (
  <div
    hidden={!props.isOpen}
    className={classNames('slds-summary-detail__content', props.className)}
    id={props.referenceId}
  >
    {props.children}
  </div>
);

export const SummaryDetailTitle = props => (
  <div className={classNames('slds-summary-detail__title', props.className)}>
    {props.children}
  </div>
);

export const SummaryDetailAction = props => {
  const defaultLabel = props.summaryTitle
    ? `Toggle details for ${props.summaryTitle}`
    : 'Toggle details';
  const title = props.title || defaultLabel;
  const assistiveText = props.assistiveText || defaultLabel;

  return (
    <ButtonIcon
      className={classNames('slds-m-right_x-small', props.className)}
      iconClassName="slds-summary-detail__action-icon"
      symbol="switch"
      title={title}
      assistiveText={assistiveText}
      aria-controls={props.referenceId}
      aria-expanded={props.isOpen ? 'true' : 'false'}
    />
  );
};

SummaryDetailAction.propTypes = {
  className: PropTypes.string,
  referenceId: PropTypes.string,
  isOpen: PropTypes.bool,
  summaryTitle: PropTypes.node,
  title: PropTypes.string,
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export const Context = props => (
  <div className="demo-only" style={{ height: '150px' }}>
    {props.children}
  </div>
);

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <SummaryDetail className="slds-is-open">
        <SummaryDetailAction
          referenceId={referenceId}
          isOpen
          summaryTitle="Summary Title"
        />
        <div>
          <SummaryDetailTitle>
            <h3
              className="slds-text-heading_small slds-truncate"
              title="summary title"
            >
              Summary Title
            </h3>
          </SummaryDetailTitle>
          <SummaryDetailContent referenceId={referenceId} isOpen>
            <p>{loremText}</p>
          </SummaryDetailContent>
        </div>
      </SummaryDetail>
    )
  }
];

export let examples = [
  {
    id: 'closed-with-complex-title',
    label: 'Closed with Complex title',
    element: (
      <SummaryDetail>
        <SummaryDetailAction
          referenceId={referenceId}
          summaryTitle="Summary Title"
        />
        <div>
          <SummaryDetailTitle>
            <div className="slds-grid">
              <h3
                className="slds-text-heading_small slds-truncate slds-p-right_small"
                title="summary title"
              >
                Summary Title
              </h3>
              <Badge> In Progress </Badge>
            </div>
            <p>Additional information about this step</p>
          </SummaryDetailTitle>
          <SummaryDetailContent referenceId={referenceId}>
            <p>{loremText}</p>
          </SummaryDetailContent>
        </div>
      </SummaryDetail>
    )
  },
  {
    id: 'open-with-complex-title',
    label: 'Open with Complex title',
    element: (
      <SummaryDetail className="slds-is-open">
        <SummaryDetailAction
          referenceId={referenceId}
          isOpen
          summaryTitle="Summary Title"
        />
        <div>
          <SummaryDetailTitle>
            <div className="slds-grid">
              <h3
                className="slds-text-heading_small slds-truncate slds-p-right_small"
                title="summary title"
              >
                Summary Title
              </h3>
              <Badge> In Progress </Badge>
            </div>
            <p>Additional information about this step</p>
          </SummaryDetailTitle>
          <SummaryDetailContent referenceId={referenceId} isOpen>
            <p>{loremText}</p>
          </SummaryDetailContent>
        </div>
      </SummaryDetail>
    )
  }
];

export let states = [
  {
    id: 'closed',
    label: 'Closed',
    element: (
      <SummaryDetail>
        <SummaryDetailAction
          referenceId={referenceId}
          summaryTitle="Summary Title"
        />
        <div>
          <SummaryDetailTitle>
            <h3
              className="slds-text-heading_small slds-truncate"
              title="summary title"
            >
              Summary Title
            </h3>
          </SummaryDetailTitle>
          <SummaryDetailContent referenceId={referenceId}>
            <p>{loremText}</p>
          </SummaryDetailContent>
        </div>
      </SummaryDetail>
    )
  }
];
