import { useEffect, useState } from "react";
import "./App.css";
// assets
import dolarIcon from "./assets/icon-dollar.svg";
import personIcon from "./assets/icon-person.svg";
// components
import Field from "./components/Field";
import Outputnumber from "./components/Outputnumber";
import Percent from "./components/Percent";

function App() {
  let [tip, setTip] = useState(0);
  let [bill, setBill] = useState(0);
  let [people, setPeople] = useState(0);
  let [tipAmmount, setTipAmmount] = useState(0);

  // when the value of (number of people or tip or bill) change i need to re-render
  useEffect(() => {
    excute();
  }, [people, tip, bill]);
  let excute = () => {
    let tipValue = parseFloat(tip);
    let billValue = parseFloat(bill);
    let peopleValue = parseInt(people);
    if (billValue >= 1)
      if (peopleValue >= 1)
        setTipAmmount((billValue * (tipValue / 100)).toFixed(2));
  };

  return (
    <div className="App relative w-[100%] h-[100vh] bg-[#c5e4e7]">
      <div className="fixed w-full md:w-[55%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <header className="mb-8">
          <h2 className="uppercase tracking-widest font-mono font-bold text-xl text-[#446769] text-center">
            spli
          </h2>
          <h2 className="uppercase tracking-widest font-mono font-bold text-xl text-[#446769] text-center">
            tter
          </h2>
        </header>
        <div className="content flex flex-col md:flex-row justify-between items-stretch rounded-3xl bg-white p-6 gap-4">
          <div className="form basis-[47%]">
            <div className="">
              <Field
                fieldName="Bill"
                logo={dolarIcon}
                handler={setBill}
                feildVal={tip}
              />
              <p className="text-[#555] mt-4 mb-3"> Select tip % </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <Percent ammount={5} tipSetter={setTip} />
                <Percent ammount={10} tipSetter={setTip} />
                <Percent ammount={15} tipSetter={setTip} />
                <Percent ammount={25} tipSetter={setTip} />
                <Percent ammount={50} tipSetter={setTip} />
                <div className="">
                  <input
                    className="font-bold text-[#174344] text-end w-full outline-none bg-[#f3f8fb] focus:border-[#5aaba2] border-solid border-[transperent] hover:border-[#5aaba2] border-[1px] p-3 rounded-xl placeholder:text-center"
                    type="number"
                    placeholder="CUSTOM"
                    onChange={(e) => {
                      setTip(e.target.value);
                    }}
                  />
                </div>
              </div>
              <Field
                fieldName="Number of People"
                logo={personIcon}
                handler={setPeople}
                feildVal={people}
              />
            </div>
          </div>
          <div className="output basis-[47%]">
            <div className="flex flex-col justify-between p-4 rounded-xl bg-[#00474b] h-[100%]">
              <div className="">
                <Outputnumber name="Tip Amount" value={tipAmmount} />
                <Outputnumber
                  name="Total"
                  value={(tipAmmount / parseFloat(people)).toFixed(2)}
                />
              </div>
              <div className="Reset">
                <button
                  onClick={() => {
                    setBill(0);
                    setPeople(0);
                    setTip(0);
                    setTipAmmount(0);
                  }}
                  className="text-center w-full p-3 bg-[#26c2ad] text-[#00474b] rounded-xl hover:bg-[#9fe8df] transition-all duration-200 font-bold"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
