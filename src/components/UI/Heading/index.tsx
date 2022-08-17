type HeadingProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className={`text-3xl font-heading`}>{children}</h1>
  )
}


Heading.defaultProps = {
  className: '  ',
}
export default Heading;
