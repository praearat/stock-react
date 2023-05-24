import React from "react";

const Registration = () => {
  return (
    <div className="md:max-w-2xl lg:max-w-4xl mx-auto my-12">
      {/* HEADLINE */}
      <h1 className="text-center text-white text-4xl font-extrabold uppercase">
        Register
      </h1>

      {/* FROM */}
      <div className="grid grid-cols-6 m-6 items-center space-y-3">
        <p className="text-right mr-5 text-white font-medium col-span-2">
          First Name :
        </p>
        <input
          className="px-5 py-2 rounded-md col-span-4"
          type="text"
          placeholder="First Name"
        />
        <p className="text-right mr-5 text-white font-medium col-span-2">
          Last Name :
        </p>
        <input
          className="px-5 py-2 rounded-md col-span-4"
          type="text"
          placeholder="Last Name"
        />
        <p className="text-right mr-5 text-white font-medium col-span-2">
          Phone No :
        </p>
        <input
          className="px-5 py-2 rounded-md col-span-4"
          type="text"
          placeholder="Phone Number"
        />
        <p className="text-right mr-5 text-white font-medium col-span-2">
          Email :
        </p>
        <input
          className="px-5 py-2 rounded-md col-span-4"
          type="text"
          placeholder="Email Address"
        />
        <p className="text-right mr-5 text-white font-medium col-span-2">
          Ref :
        </p>
        <input
          className="px-5 py-2 rounded-md col-span-4"
          type="text"
          placeholder="Reference"
        />
      </div>
    </div>
  );
};

export default Registration;
