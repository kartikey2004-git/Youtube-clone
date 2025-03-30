import  { useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import logo from "../../public/logo.png"
import profile from "../../public/profile.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
      setShowMobileSearch(false);
    }
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-2 sm:px-6 py-2">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-20 sm:w-28 cursor-pointer" />
      </div>
      
      {/* Search bar - hidden on mobile */}
      <div className="hidden sm:flex w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      {/* Mobile search */}
      <div className="sm:hidden">
        {showMobileSearch ? (
          <div className="fixed top-0 left-0 w-full bg-white p-2 flex items-center space-x-2">
            <div className="flex-1 px-4 py-2 border-[1px] border-gray-400 rounded-full">
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                autoFocus
              />
            </div>
            <IoMdClose 
              size={"24px"} 
              className="cursor-pointer"
              onClick={() => {
                setShowMobileSearch(false);
                setSearchQuery("");
              }}
            />
          </div>
        ) : (
          <CiSearch 
            size={"24px"} 
            className="cursor-pointer"
            onClick={() => setShowMobileSearch(true)}
          />
        )}
      </div>

      <div className="flex space-x-3 sm:space-x-5 items-center">
        <RiVideoAddLine className="text-xl sm:text-2xl" />
        <AiOutlineBell className="text-xl sm:text-2xl" />
        <Avatar src={profile} size="28" round={true} className="sm:hidden" />
        <Avatar src={profile} size="32" round={true} className="hidden sm:block" />
      </div>
    </div>
  );
}

export default Navbar;