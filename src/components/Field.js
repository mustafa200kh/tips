import React, { useRef } from "react";

function Field({ fieldName, logo, handler, fieldVal }) {
  let inputRef = useRef();
  let errRef = useRef();

  // Check if the inputed number is 0 to give error messsage
  let inputValidtor = () => {
    if (inputRef.current.value == 0) {
      errRef.current.classList.remove("hidden");
      inputRef.current.classList.remove("border-[transperent]");
      inputRef.current.classList.add("border-red-700");
    } else {
      errRef.current.classList.add("hidden");
      inputRef.current.classList.remove("border-red-700");
      inputRef.current.classList.add("border-[transperent]");
    }
  };
  return (
    <div className="field">
      <div className="flex justify-between">
        <label className="text-[#555]">{fieldName}</label>
        <label ref={errRef} className="text-red-700 hidden">
          Can't be zero{" "}
        </label>
      </div>
      <div className="relative">
        <img
          className="absolute top-1/2 translate-y-[-50%] left-[10px] p-1"
          src={logo}
          alt="f-logo"
        />
        <input
          ref={inputRef}
          className="font-bold text-[#174344] text-end w-full outline-none bg-[#f3f8fb] border-solid border-[transperent] hover:border-[#5aaba2] focus:border-[#5aaba2] border-[1px] p-1 rounded-md transition-all duration-200"
          type="number"
          defaultValue={fieldVal}
          onChange={(e) => {
            handler(e.target.value);
            inputValidtor();
          }}
        />
      </div>
    </div>
  );
}

export default Field;
