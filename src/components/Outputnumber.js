import React from "react";

function Outputnumber({ name, value }) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="">
        <h2 className="text-white"> {name} </h2>
        <span className="text-[#999]"> /person </span>
      </div>
      <div className="text-[#2eada2] font-bold text-2xl">
        ${isNaN(value) ? 0.0 : value}
      </div>
    </div>
  );
}

export default Outputnumber;
