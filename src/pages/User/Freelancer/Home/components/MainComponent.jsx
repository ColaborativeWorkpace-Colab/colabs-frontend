import React, { useEffect, useState } from "react";
import "./style.css";
import profileImg from "../../../../../assets/images/profile.jpg";
import photoImg from "../../../../../assets/images/photo.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
import samplepostimage from "../../../../../assets/images/samplepostimage.jpeg";
import likeImg from "../../../../../assets/images/like.png";
import videoImg from "../../../../../assets/images/video.png";
import commentImg from "../../../../../assets/images/comment.png";
import daniImg from "../../../../../assets/images/dani.jpeg";
import axios from "axios";
import AddPostMOdal from "./AddPostModal";
import { BaseURL } from "../../../../../services/constants/Constants";

const MainComponent = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getSamplePost = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(BaseURL + "social");
      setPosts(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSamplePost();
  }, []);
  return (
    <div className="main-content w-1/2">
      <div className="post-content bg-white shadow-sm rounded-lg shadow-gray-300 w-full">
        <div className="flex justify-center items-center gap-4 px-5 py-2">
          <AddPostMOdal
            buttonText={
              <input
                className="hover:bg-gray-300 cursor-pointer w-[450px] grow rounded-[40px] border-2 border-slate-400 px-[20px] h-[50px]"
                placeholder="Start a post"
                disabled
              />
            }
          />
        </div>
        <div className="flex justify-between items-center gap-4 p-2">
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={photoImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">Photos</p>
              </div>
            }
          />

          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={videoImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">video</p>
              </div>
            }
          />
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={audioImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">audio</p>
              </div>
            }
          />
          <AddPostMOdal
            buttonText={
              <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
                <img
                  src={contentImg}
                  alt="profile-image"
                  className="cursor-pointer w-[20px] h-[20px]"
                />
                <p className="text-md text-slate-800">create content</p>
              </div>
            }
          />
        </div>
      </div>
      <div className="my-3 flex gap-2 justify-between items-center gap-3">
        <div className="grow bg-slate-400 h-[2px]"></div>
        <div>Sort by: recent</div>
      </div>
      {posts.map((post, id) => (
        <div className="mb-4 p-3 flex gap-2 flex-col post-item bg-white shadow-sm rounded-lg shadow-gray-300">
          <div className="poster-profile flex items-center gap-2">
            <img
              src={post.user.imageUrl || daniImg}
              alt=""
              className="w-[40px] h-[40px] rounded-[20px] cursor-pointer"
            />
            <div className="grow flex justify-between">
              <div className="cursor-pointer flex flex-col gap-0.4">
                <p className="text-md text-slate-900 capitalize">
                  {post.user.firstName + " " + post.user.lastName}
                </p>
                <p className="text-sm text-slate-600">
                  {post.user.bio || "User has no bio"}
                </p>
              </div>
              <button className="cursor-pointer text-purple-900 font-bold">
                <span>+</span> Follow
              </button>
            </div>
          </div>
          <div className="mt-3 mb-2">
            {post.tags.map((tag) => (
              <span className="pl-0 px-2 py-1 text-sm text-slate-800 mr-1">
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-3 mb-2">
            <p className="text-sm text-slate-800">{post.textContent}</p>
          </div>
          <img
            src={post.imageContent || samplepostimage}
            alt="post image"
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between items-center gap-4 p-2">
            <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
              <img
                src={likeImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              {post.likes.length > 0 && (
                <p className="text-md text-slate-800">
                  kal and {post.likes.length - 1} others
                </p>
              )}
            </div>
            <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
              <img
                src={commentImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <p className="text-md text-slate-800">Comment</p>
            </div>
            {/* <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
              <img
                src={repostImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <p className="text-md text-slate-800">Repost</p>
            </div>
            <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
              <img
                src={sendImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <p className="text-md text-slate-800">Send</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainComponent;
