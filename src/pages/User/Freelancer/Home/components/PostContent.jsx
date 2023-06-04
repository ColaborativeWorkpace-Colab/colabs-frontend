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
import repostImg from "../../../../../assets/images/repost.png";
import sendImg from "../../../../../assets/images/send.png";
import daniImg from "../../../../../assets/images/dani.jpeg";
import axios from "axios";
import AddPostModal from "./AddPostModal";

const PostContent = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const getSamplePost = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getSamplePost();
  }, []);

  let posts = [1, 2, 3, 4, 5, 6];
  return (
    <div className="main-content md:w-3/4 lg:w-1/2">
      <div className="post-content flex flex-col justify-center bg-white shadow-sm rounded-lg shadow-gray-300 w-full">
        <div className="flex flex-shrink items-center gap-4 px-5 py-2">
          <div className="profile-image flex items-center align-center">
            <img
              src={profileImg}
              alt="profile-image"
              className="cursor-pointer w-[60px] rounded-[30px] h-[60px] border-2 border-slate-300 p-0.5"
            />
          </div>

          <input
            onClick={() => {
              console.log("vissibleded");
              setModalVisible(!modalVisible);
              console.log("vissibleded");
            }}
            className="hover:bg-gray-300 cursor-pointer grow rounded-[40px] border-2 border-slate-400 px-[20px] h-[50px]"
            placeholder="Start a post"
            disabled
          />
        </div>
        <div className="flex justify-between items-center gap-4 p-2">
          <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={photoImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">Photos</p>
          </div>
          <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={videoImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">video</p>
          </div>
          <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={audioImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">audio</p>
          </div>
          <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={contentImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">create content</p>
          </div>
        </div>
      </div>
      <div className="my-3 flex gap-2 justify-between items-center gap-3">
        <div className="grow bg-slate-400 h-[2px]"></div>
        <div>Sort by: recent</div>
      </div>
      {posts.map((value, key) => (
        <div className="p-3 flex my-[30px] flex-col post-item bg-white shadow-sm rounded-lg shadow-gray-300">
          <div className="poster-profile flex items-center gap-2">
            <img
              src={daniImg}
              alt=""
              className="w-[40px] h-[40px] rounded-[20px] cursor-pointer"
            />
            <div className="grow flex justify-between">
              <div className="cursor-pointer flex flex-col gap-0.4">
                <p className="text-md text-slate-900">kebede Demmelash</p>
                <p className="text-sm text-slate-600">
                  Always Problem and Anxiety Developer
                </p>
              </div>
              <button className="cursor-pointer text-purple-900 font-bold">
                <span>+</span> Follow
              </button>
            </div>
          </div>

          <div className="mt-3 mb-2">
            <p className="text-slate-800">
              Anxiety is a normal reaction to stress and can be beneficial in
              some situations. It can alert us to dangers and help us prepare
              and pay attention. Anxiety disorders differ from normal feelings
              of nervousness or anxiousness and involve excessive fear or
              anxiety.
            </p>
          </div>
          <img
            src={samplepostimage}
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
              <p className="text-md text-slate-800">Like</p>
            </div>
            <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
              <img
                src={commentImg}
                alt="profile-image"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <p className="text-md text-slate-800">Comment</p>
            </div>
            <div className="flex gap-2 rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
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
            </div>
          </div>
        </div>
      ))}
      <AddPostModal modalVisible={modalVisible} />
    </div>
  );
};

export default PostContent;
