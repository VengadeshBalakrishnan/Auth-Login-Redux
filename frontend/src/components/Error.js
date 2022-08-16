const Error = ({ children, ...props }) => {
  return (
    <div
      style={{ color: '#f23838'}}
      {...props}
    >
      {children}
    </div>
  )
}

export default Error;
