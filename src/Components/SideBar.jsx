import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden fixed top-20 left-0">
        <div className="flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
          <hr />
          {sidebarItems2.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
          <hr />
          {sidebarItems3.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
          <hr />
          {sidebarItems4.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center h-16">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;