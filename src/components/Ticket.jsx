import React from "react";
import "../index.css";

function Ticket() {
  const numbers = Array.from(Array(42), (_, index) => index + 1);
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
                  className="rounded cursor-pointer flex justify-center items-center w-8 h-8 border-2 border-[#F3D55B]"
                  key={number}
                >
                  <p className="text-black dark:text-zinc-50">{number}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card cardRight"></div>
   
      </div>
    </div>
  );
}

export default Ticket;
