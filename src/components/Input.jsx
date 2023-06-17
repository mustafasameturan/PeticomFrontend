import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'

const Input = (props) => {
  
  const { id, type, name, placeholder, setState, value, onKeyDown, isDisabled } = props;

  return (
    <div className='flex flex-col items-center justify-center'>
        <input
            id={id}
            type={type}
            name={name}
            value={value}
            disabled={isDisabled}
            className="border rounded-full w-80 outline-none pl-5 text-lg h-9"
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onChange={(e) => setState(e.target.value)}
        />
    </div>
  )
}

export default Input;