import React from 'react';
import { Link } from 'gatsby';

export default (props) => {
  const {children, ...restProps} = props;
  const isActive = props.to === window.location.pathname;
  if (isActive) {
    return (
      <span>
        {children}
      </span>
    );
  } else {
    return (
      <Link {...restProps}>
        {children}
      </Link>
    );
  }
};
