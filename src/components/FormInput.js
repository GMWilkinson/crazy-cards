import React from 'react';

function FormInput({ labelName, type, handleChange }) {
  return(
    <div className="field">
      <label htmlFor={labelName}>{labelName[0].toUpperCase() + labelName.substr(1, labelName.length - 1)}</label>
      <input name={labelName} type={type} onChange={handleChange}/>
    </div>
  );
}

export default FormInput;