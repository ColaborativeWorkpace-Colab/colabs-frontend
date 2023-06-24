import React, { useEffect, useState } from "react";
import { LeftSide, RightSide } from "./SideComponents";
import PostDetail from "./PostDetail";
import FreelancerHeader from "../../Header/Header";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  const params = useParams();
  const [postId, setpostId] = useState(null);
  useEffect(() => {
    setpostId(params.postId);
    console.log(postId);
  }, []);
  return (
    <div className="w-full h-full mt-[50px] px-[50px] py-8">
      <FreelancerHeader selectedNav={1} />
      <div className="md:flex gap-5 justify-between">
        <LeftSide />
        <PostDetail postId={postId} />
        <RightSide />
      </div>
    </div>
  );
};

export default PostDetailPage;
