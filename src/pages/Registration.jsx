import React, { useEffect, useState } from "react";
import InputList from "../components/InputList";

const Registration = () => {
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setInputData({
      firstName: urlParams.get("firstName"),
      lastName: urlParams.get("lastName"),
      phoneNo: urlParams.get("phoneNo"),
      email: urlParams.get("email"),
      ref: urlParams.get("ref"),
    });
  }, []);

  console.log("inputData =", inputData);

  return (
    <div className="min-h-screen md:max-w-2xl lg:max-w-4xl mx-auto my-12">
      {/* HEADLINE */}
      <h1 className="mb-6 text-center text-white text-4xl font-extrabold uppercase">
        Register
      </h1>

      {/* FROM */}
      <div className="m-4">
        <InputList
          label="First Name"
          placeholder="Input first name"
          value={inputData.firstName}
        />
        <InputList
          label="Last Name"
          placeholder="Input last name"
          value={inputData.lastName}
        />
        <InputList
          label="Phone No"
          placeholder="Input phone number"
          value={inputData.phoneNo}
        />
        <InputList
          label="Email"
          placeholder="Input email address"
          value={inputData.email}
        />
        <InputList
          label="Ref"
          placeholder="Input reference"
          value={inputData.ref}
        />
      </div>
    </div>
  );
};

export default Registration;
