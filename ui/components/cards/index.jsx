// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StandardIcon } from '../icons/standard/example';
import classNames from 'classnames';

/**
 * Card Header
 */
export const CardHeader = props => {
  const { className, title, href, symbol, action, iconAssistiveText, iconTitle } = props;

  return (
    <div className={classNames('slds-card__header slds-grid', className)}>
      <header className="slds-media slds-media_center slds-has-flexi-truncate">
        {symbol && (
          <div className="slds-media__figure">
            <StandardIcon
              className="slds-icon_small"
              symbol={symbol}
              assistiveText={iconAssistiveText !== undefined ? iconAssistiveText : symbol}
              title={iconTitle !== undefined ? iconTitle : symbol}
            />
          </div>
        )}
        <div className="slds-media__body">
          <h2 className="slds-card__header-title">
            {href ? (
              <a
                href="#"
                className="slds-card__header-link slds-truncate"
                title={title}
                onClick={e => e.preventDefault()}
              >
                <span>{title}</span>
              </a>
            ) : (
              <span className="slds-truncate" title={title}>
                <span className="slds-text-heading_small">{title}</span>
              </span>
            )}
          </h2>
        </div>
        {action && <div className="slds-no-flex">{action}</div>}
      </header>
    </div>
  );
};

/**
 * Card Body
 */
export const CardBody = props => {
  const { className, hasPadding } = props;

  return (
    <div
      className={classNames(
        'slds-card__body',
        hasPadding && 'slds-card__body_inner',
        className
      )}
    >
      {props.children}
    </div>
  );
};

/**
 * Card Footer
 */
export const CardFooter = props => {
  const { className, linkTabIndex } = props;

  return (
    <footer className={classNames('slds-card__footer', className)}>
      {props.children && (
        <a
          className="slds-card__footer-action"
          href="#"
          tabIndex={linkTabIndex}
          onClick={e => e.preventDefault()}
        >
          {props.children}
        </a>
      )}
    </footer>
  );
};

class Card extends Component {
  render() {
    const { className, children, hasCardBoundary } = this.props;

    return (
      <article
        className={classNames(
          'slds-card',
          hasCardBoundary && 'slds-card_boundary',
          className
        )}
      >
        {children}
      </article>
    );
  }
}

CardHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  href: PropTypes.string,
  symbol: PropTypes.string,
  action: PropTypes.node,
  iconAssistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasPadding: PropTypes.bool
};

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  linkTabIndex: PropTypes.string
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasCardBoundary: PropTypes.bool
};

export default Card;
