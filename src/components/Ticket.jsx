import "../index.css";
import { useSelector } from "react-redux";
import useAddNumber from "./useAddNumber";

function Ticket() {
  const numbers = Array.from(Array(42), (_, index) => index + 1);
  const numbersArray = useSelector((state) => state.numbers.numbers);

  console.log(numbersArray);
  const addNumber = useAddNumber();

  return (
    <div className="flex justify-center">
      <div className="cardWrap">
        <div className="card cardLeft">
          <h1>
            Purchase a <span>Ticket</span>
          </h1>

          <div className="title">
            <h2>Choose Numbers</h2>
            <div className="grid grid-cols-8 gap-3 mt-3">
              {numbers.map((number) => (
                <div
                  onClick={() => {
                    if (
                      numbersArray.length < 6 &&
                      !numbersArray.includes(number)
                    ) {
                      addNumber(number);
                    }
                  }}
                  className={`rounded cursor-pointer flex justify-center items-center w-8 h-8 border-2 border-[#F3D55B] ${
                    numbersArray.includes(number) ? "bg-gray-400" : ""
                  }`}
                  key={number}
                >
                  <p className="text-black ">{number}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card cardRight">
          <button>Hello</button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
