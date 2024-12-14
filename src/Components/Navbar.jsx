import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import model from "../../public/model.png"


function Navbar() {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className=" flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>


      <div className=" flex w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border -[1px] rounded-l-full border-gray-400">
          <input type="text" placeholder="Search" className="outline-none " />
        </div>
        <button className="px-4 py-2 border-[1px] rounded-r-full bg-gray-100 border-gray-400">
          <CiSearch size={"24px"}/>
        </button>
        <IoMdMic size={"42px"} className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"/>
      </div>



      <div className="flex space-x-5 items-center ">
      <RiVideoAddLine  className="text-2xl"/>
      <AiOutlineBell className="text-2xl"/>
      <Avatar src={model} size="32" round={true}alt=""/>
      </div>
    </div>
  );
}

export default Navbar;