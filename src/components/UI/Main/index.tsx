import React from 'react';

type MainProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
};

const Main = ({ className, children }: MainProps) => {
  return (
    <main className={`col-span-12 mt-16 py-6  ${className}`}>{children}</main>
  );
};

Main.defaultProps = {
  className: `  `,
};

export default Main;
