/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  console.log(video);

  return (
    <div className="w-full">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative aspect-video rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo & title */}
          <div className="flex mt-3 space-x-3">
            <div className="flex items-start">
              <div className="flex h-10 w-10 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-1 text-[13px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[13px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[13px] mt-1">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
