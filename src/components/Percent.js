import React from "react";

function Percent({ ammount, tipSetter }) {
  return (
    <div className="">
      <button
        className="focus:bg-[#9fe8df] p-3 text-white bg-[#00474b] font-bold w-full text-center rounded-lg hover:bg-[#9fe8df] transition-all duration-200"
        onClick={() => {
          tipSetter(ammount);
        }}
      >
        {ammount}%
      </button>
    </div>
  );
}

export default Percent;
