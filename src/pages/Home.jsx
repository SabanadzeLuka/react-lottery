import Switcher from "../components/Switcher";

function Home() {
  return (
    <div>
      <Switcher />
      <div className="h-screen dark:bg-zinc-800 bg-zinc-50 duration-300 transition dark:text-zinc-50 bg-center bg-cover bg-no-repeat bg-[url(../src/assests/hero-light.png)] dark:bg-none">
        <div className="grid grid-cols-3 gap-4 top-14 relative  px-20 py-20">
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-5xl tracking-tight">
              Welcome to the <br />
              <span className="text-pink-500">Gateway of Dreams</span>
            </h1>
            <p className="pt-6 leading-8 tracking-tight text-gray-700 dark:text-gray-300">
              🤞 Step into a world of limitless possibilities, where your dreams
              are just a ticket away. Who knows? The next jackpot winner could
              be YOU!
            </p>
          </div>
          <div className="col-span-2 flex justify-center">hello</div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
}

export default Home;
