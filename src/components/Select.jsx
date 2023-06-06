import React from 'react'

const Select = (props) => {

    const { id, reference, selectedData, setSelectedData, isDisabled, classnames, options } = props;
    const classname = typeof classnames === "undefined" ? '' : classnames;

    return (
      <>
        <select
          id={id}
          ref={reference}
          value={selectedData}
          disabled={isDisabled}
          className={`${classname}`}
          onChange={(e) => {
            setSelectedData(parseInt(e.target.value))
          }}
        >
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.id} onChange={() => setSelectedData(option.id)}>
                {option.name}
              </option>
            ))}
        </select>
      </>
    );
  };
  

export default Select;