import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/movie-stack_logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  return (
    <div className="flex md:justify-start md:flex-row items-center bg-[#060D17] max-w-screen px-16 overflow-x-hidden justify-start flex-col">
      <Link to="/" className="hidden md:block">
        <img className="h-30 w-30 p-2 cursor-pointer" src={logo} alt="logo" />
      </Link>
      <ul className="flex items-center justify-start">
        <Link to="/">
          <li className="py-4 px-16 mx-0 md:mx-8 text-[#7B7E82]  hover:text-white cursor-pointer ease-in-out duration-300">
            Home
          </li>
        </Link>
        <Link to="/Discover">
          <li className="py-4 px-16  mx-0 md:mx-8 text-[#7B7E82] hover:text-white cursor-pointer ease-in-out duration-300">
            Dicover
          </li>
        </Link>
      </ul>
      <div className="flex justify-start items-center py-2 px-4 rounded bg-[#10161D]  grow-[2]">
        <Link to="/movie-search">
          <AiOutlineSearch className="bg-[#10161D] text-[#7B7E82] h-6 w-6 cursor-pointer" onClick={localStorage.setItem('searchParam', searchPrompt)} />
        </Link>
        <input
          placeholder="Search..."
          className="bg-[#10161D] text-[#7B7E82]  grow-[2] px-2"
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
