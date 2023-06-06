import React from 'react'

const Input = (props) => {
  
  const { id, type, name, placeholder, setState } = props;

  return (
    <div className='flex flex-col items-center justify-center'>
        <input
            id={id}
            type={type}
            name={name}
            className="border rounded-full w-80 outline-none pl-5 text-lg h-9"
            placeholder={placeholder}
            onChange={(e) => setState(e.target.value)}
        />
    </div>
  )
}

export default Input;