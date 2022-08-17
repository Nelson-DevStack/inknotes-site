type TextProps = {
  className?: string;
  children: React.ReactNode | JSX.Element;
}

const Text = ({ className, children }: TextProps) => {
  return (
    <p className={`text-lg font-text text-gray-900 ${className}`}>
      {children}
    </p>
  )
}

Text.defaultProps = {
  className: '  ',
}

export default Text;
