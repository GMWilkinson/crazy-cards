import React from 'react';

function FormSelect({ labelName, options, handleChange }) {
  return(
    <div className="field">
        <label htmlFor={labelName}>{labelName[0].toUpperCase() + labelName.substr(1, labelName.length - 1)}</label>
        <select id={labelName} required name={labelName} onChange={handleChange}>
            <option className="placeholder-option">Select an option..</option>
            {options.map(
                (item, i) =>
                <option key={i} value={item}>{item}</option>
            )}
        </select>
    </div>
  );
}

export default FormSelect;