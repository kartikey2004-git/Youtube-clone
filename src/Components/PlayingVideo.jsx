/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utilis/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import SuggestedVideo from "./SuggestedVideo";
import SideBar from "./SideBar";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  return (
    <div className="flex flex-col md:flex-row mt-16 md:mt-20">
      <SideBar />
      <div className="w-full md:ml-64">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-2 sm:px-4 py-2 sm:py-3 lg:py-6">
            <div className="h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] -mx-2 sm:-mx-4 lg:mx-0">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                height="100%"
                width="100%"
                controls
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
            <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar[0]?.url}
                      alt="Channel Avatar"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex flex-col">
                    <div className="text-md font-semibold flex items-center">
                      {video?.author?.title}
                      {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                    </div>
                    <div className="text-sm">
                      {video?.author?.stats?.subscribersText}
                    </div>
                  </div>
                  <span className="w-fit text-center bg-red-500 px-3 py-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200">
                    Subscribe
                  </span>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="flex items-center justify-center h-11 px-4 sm:px-6 rounded-3xl bg-white/[0.15]">
                  <AiOutlineLike className="text-xl mr-2" />
                  {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                </div>
                <div className="flex items-center justify-center h-11 px-4 sm:px-6 rounded-3xl bg-white/[0.15]">
                  {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                </div>
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-gray-100 rounded-xl mt-4 text-sm">
              {video?.description}
            </div>
            <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-lg sm:text-xl">
              {video?.stats?.comments} <p>Comments</p>
            </div>
          </div>
          <div className="flex flex-col px-2 sm:px-4 py-4 sm:py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
            {relatedVideo?.contents?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SuggestedVideo key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;

// ek baar puri api sahi se padh lunga
