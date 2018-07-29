import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className || null;
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

ActiveLink.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  activeClassName: PropTypes.string,
};

ActiveLink.defaultProps = {
  href: null,
  activeClassName: null,
};

export default withRouter(ActiveLink);
