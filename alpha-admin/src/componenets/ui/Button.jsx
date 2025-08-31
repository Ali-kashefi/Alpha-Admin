import React from "react";

function Button({children, className,onClick}) {
  return <div onClick={onClick} className={className}>{children}</div>;
}

export default Button;
