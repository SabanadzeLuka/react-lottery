import Switcher from "../components/Switcher";
import Herologo from "../assets/herologo.png";
import Ticket from "../components/Ticket";

function Home() {
  return (
    <div>
      <Switcher />
      <div className=" dark:bg-zinc-900 bg-zinc-50 duration-300 transition dark:text-zinc-50 bg-center bg-cover bg-no-repeat  dark:bg-none">
        <div className="grid grid-cols-3 gap-4 top-14 relative  px-20 py-20">
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-5xl tracking-tight">
              Welcome to the <br />
              <span className="text-[#F3D55B]">Gateway of Dreams</span>
            </h1>
            <p className="pt-6 leading-8 tracking-tight text-gray-700 dark:text-gray-300">
              🤞 Step into a world of limitless possibilities, where your dreams
              are just a ticket away. Who knows? The next jackpot winner could
              be YOU!
            </p>
            <button className="bg-[#F3D55B]  hover:bg-[#e3c756] mt-6 w-44 h-12 dark:text-white font-medium rounded-md">
              Start playing now
            </button>
          </div>
          <div className="col-span-2 flex justify-end pr-20">
            <img src={Herologo} width="50%" height="50%" alt="" />
          </div>
        </div>
        <div>
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default Home;
