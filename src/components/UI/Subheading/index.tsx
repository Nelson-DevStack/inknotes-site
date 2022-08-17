type SubheadingProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
}

const Subheading = ({ className, children }: SubheadingProps) => {
  return (
    <h1 className={`text-2xl font-text font-semibold text-gray-900 md:text-3xl ${className}`}>{children}</h1>
  )
}

Subheading.defaultProps = {
  className: '  ',
}
export default Subheading;
