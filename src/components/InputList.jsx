import React from "react";

const InputList = ({ name, label, placeholder, value, handleChange }) => {
  return (
    <div className="grid grid-cols-7 items-center">
      <p className="text-right my-3 mr-3 text-white font-medium col-span-2">
        {label} :
      </p>
      <input
        className="px-5 py-2 rounded-md col-span-5"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputList;
