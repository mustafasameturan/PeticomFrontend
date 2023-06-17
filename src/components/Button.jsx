import React from 'react'
import Loading from './Loading';

const Button = (props) => {

  const { text, type, action, classnames, loading, isDisabled } = props;

  const classname = typeof classnames === "undefined" ? '' : classnames;

  return (
    <button 
      type={type} 
      onClick={action}
      disabled={isDisabled} 
      className={`bg-white hover:bg-[#F8F6F4] rounded-full w-32 text-lg h-9 ${classname}`}
    >
      {loading ? (
        <Loading showText="notShow" />
      )  :(
        <p>{text}</p>
      )}
    </button>
  ) 
}

export default Button;