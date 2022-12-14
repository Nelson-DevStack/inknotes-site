import React from 'react';

type SubheadingProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
};

const Subheading = ({ className, children }: SubheadingProps) => {
  return (
    <h1 className={`text-2xl font-text font-medium text-gray-900 ${className}`}>
      {children}
    </h1>
  );
};

Subheading.defaultProps = {
  className: '  ',
};
export default Subheading;
