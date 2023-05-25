import React, { useEffect, useState } from "react";
import InputList from "../components/InputList";
import { BsLink45Deg } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

const Registration = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    ref: "",
  });
  const [urlCopied, setUrlCopied] = useState(false);

  ////////// GET URL PARAMETERS //////////
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setInputData({
      firstName: urlParams.get("firstName") ? urlParams.get("firstName") : "",
      lastName: urlParams.get("lastName") ? urlParams.get("lastName") : "",
      phoneNo: urlParams.get("phoneNo") ? urlParams.get("phoneNo") : "",
      email: urlParams.get("email") ? urlParams.get("email") : "",
      ref: urlParams.get("ref") ? urlParams.get("ref") : "",
    });
  }, []);

  ////////// HANDLE CHANGE INPUT //////////
  const handleChangeInput = (event) => {
    //SET DATA
    setInputData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

    //GET CURRENT URL PARAMS AND SET THE CHANGED ONE
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(event.target.name, event.target.value);

    //CREATE NEW URL AND PUSH
    const newUrl = `${window.location.origin}${
      window.location.pathname
    }?${urlParams.toString()}`;
    window.history.pushState({}, "", newUrl);
    // console.log("window.location.origin =", window.location.origin);
    // console.log("window.location.pathname =", window.location.pathname);
  };

  ////////// HANDLE COPY URL //////////
  const handleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setUrlCopied(true);
    setTimeout(() => {
      setUrlCopied(false);
    }, 2000);
  };

  console.log("inputData =", inputData);

  return (
    <div className="min-h-screen max-w-2xl mx-auto my-12">
      {/* HEADLINE */}
      <h1 className="mb-6 text-center text-white text-4xl font-extrabold uppercase">
        Register
      </h1>

      {/* FROM */}
      <div className="m-4">
        <InputList
          name="firstName"
          label="First Name"
          placeholder="Input first name"
          value={inputData.firstName}
          handleChange={handleChangeInput}
        />
        <InputList
          name="lastName"
          label="Last Name"
          placeholder="Input last name"
          value={inputData.lastName}
          handleChange={handleChangeInput}
        />
        <InputList
          name="phoneNo"
          label="Phone No"
          placeholder="Input phone number"
          value={inputData.phoneNo}
          handleChange={handleChangeInput}
        />
        <InputList
          name="email"
          label="Email"
          placeholder="Input email address"
          value={inputData.email}
          handleChange={handleChangeInput}
        />
        <InputList
          name="ref"
          label="Ref"
          placeholder="Input reference"
          value={inputData.ref}
          handleChange={handleChangeInput}
        />
      </div>

      {/* COPY URL BUTTON */}
      <div className="flex flex-col items-center mt-6">
        <button
          className="flex justify-center items-center w-[200px] bg-[#727b81] px-6 py-2 rounded-full border-2 border-white text-white font-semibold shadow-md hover:shadow-lg hover:bg-[#929a9f] focus:bg-[#a8b0b5]"
          onClick={handleCopyURL}
        >
          <BsLink45Deg className="mr-1 text-2xl" />
          Copy URL
        </button>
        {urlCopied && (
          <p className="mt-2 flex items-center text-white">
            <BsCheckLg className="mr-1" />
            URL Copied!
          </p>
        )}
      </div>
    </div>
  );
};

export default Registration;
