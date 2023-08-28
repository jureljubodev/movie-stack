import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-screen h-screen bg-[#060D17]">
        <h1 className="text-[#C69B00] sm:text-6xl text-4xl text-center	 font-bold uppercase w-3/5">
          Your Ultimate Movie Streaming Destination
        </h1>
        <Link to="/Discover">
          <button className="fill-btn py-4 px-32 rounded-md mt-8 bg-[#10161D] border-2 border-transparent text-white hover:text-[#C69B00] hover:bg-transparent hover:border-2 hover:border-[#C69B00] ease-in-out duration-300">
            Discover
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
