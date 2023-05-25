import React from "react";

const InputList = ({ label, placeholder, value }) => {
  return (
    <div className="grid grid-cols-7 items-center space-y-3">
      <p className="text-right mr-3 text-white font-medium col-span-2">
        {label} :
      </p>
      <input
        className="px-5 py-2 rounded-md col-span-5"
        type="text"
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
};

export default InputList;
