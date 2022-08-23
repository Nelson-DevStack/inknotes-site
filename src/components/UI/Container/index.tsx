import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
};

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`container md:max-w-lg lg:max-w-7xl mx-auto w-full h-full px-8 ${className}`}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: `  `,
};

export default Container;
