// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Crumb = ({
  children,
  className,
  hasMenu,
  href = '#',
  isCurrent,
  'aria-current': ariaCurrent,
  onClick = e => e.preventDefault(),
  kxScopeBreadcrumbsItem,
  kxTypeUnderline,
  ...props
}) => {
  const pointerRef = { current: { offsetX: '50%', offsetY: '50%' } };
  const breadCrumbRef = useRef();
  const requestRef = { current: null };
  const previousTimeRef = { current: null };

  const setCoordProps = element => {
    const { offsetX } = pointerRef.current;
    element.style.setProperty(
      '--slds-kx-breadcrumbs-pointer-position-x',
      `${offsetX}px`
    );
  };

  const handleMove = ({ offsetX, offsetY }) => {
    pointerRef.current = { offsetX, offsetY };
  };

  const handleEnter = () => {
    requestRef.current = window.requestAnimationFrame(timestamp => {
      animate(timestamp, breadCrumbRef.current);
    });
    breadCrumbRef.current.addEventListener('mousemove', handleMove);
  };

  const handleLeave = () => {
    window.cancelAnimationFrame(requestRef.current);
    breadCrumbRef.current.removeEventListener('mousemove', handleMove);
  };

  const animate = (timestamp, element) => {
    if (previousTimeRef.current !== undefined) setCoordProps(element);
    previousTimeRef.current = timestamp;
    requestRef.current = window.requestAnimationFrame(timestamp => {
      animate(timestamp, element);
    });
  };

  return (
    <li
      className={classNames('slds-breadcrumb__item', className)}
      {...kxTypeUnderline && {
        'kx-type': 'underline'
      }}
      {...kxScopeBreadcrumbsItem && { 'kx-scope': 'breadcrumbs-item' }}
    >
      {hasMenu ? (
        children
      ) : (
        <a
          ref={breadCrumbRef}
          href={href}
          onClick={onClick}
          aria-current={ariaCurrent || (isCurrent ? 'page' : undefined)}
          {...kxScopeBreadcrumbsItem &&
            kxTypeUnderline && {
              onMouseEnter: handleEnter,
              onMouseLeave: handleLeave
            }}
          {...props}
        >
          {children}
        </a>
      )}
    </li>
  );
};

const BreadCrumbs = ({
  children,
  kxScopeBreadcrumbsItem,
  kxTypeUnderline,
  listClassNames
}) => {
  const kineticsChildren = crumbs =>
    React.Children.map(crumbs, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          kxScopeBreadcrumbsItem,
          kxTypeUnderline
        });
      }
      return child;
    });

  return (
    <nav role="navigation" aria-label="Breadcrumbs">
      <ol
        className={classNames(
          'slds-breadcrumb slds-list_horizontal slds-wrap',
          listClassNames
        )}
      >
        {kxScopeBreadcrumbsItem ? kineticsChildren(children) : children}
      </ol>
    </nav>
  );
};

Crumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasMenu: PropTypes.bool,
  href: PropTypes.string,
  isCurrent: PropTypes.bool,
  'aria-current': PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.func,
  kxScopeBreadcrumbsItem: PropTypes.bool,
  kxTypeUnderline: PropTypes.bool
};

BreadCrumbs.propTypes = {
  children: PropTypes.node,
  kxScopeBreadcrumbsItem: PropTypes.bool,
  kxTypeUnderline: PropTypes.bool,
  listClassNames: PropTypes.string
};

BreadCrumbs.Crumb = Crumb;

export default BreadCrumbs;
