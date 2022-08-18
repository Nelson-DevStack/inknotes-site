import React from 'react';

type HeadingProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
};

const Heading = ({ className, children }: HeadingProps) => {
  return <h1 className={`text-3xl font-heading ${className}`}>{children}</h1>;
};

Heading.defaultProps = {
  className: '  ',
};
export default Heading;
