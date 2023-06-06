import React from 'react'

const Button = (props) => {

  const { text, type, action, classnames } = props;

  const classname = typeof classnames === "undefined" ? '' : classnames;

  return (
    <button 
        type={type} 
        onClick={action} 
        className={`bg-white hover:bg-[#F8F6F4] rounded-full w-32 text-lg h-9 ${classname}`}
    >
        {text}
    </button>
  ) 
}

export default Button;