import React, { useState } from "react";

const ProjectDetailRightSide = () => {
  const [commit, setCommit] = useState(true);
  const [push, setPush] = useState(false);
  const handleCommit = () => {
    setCommit(!commit);
    setPush(!push);
  };
  const handlePush = () => {
    setCommit(true);
    setPush(false);
  };
  return (
    <div className="w-1/4 p-2 flex flex-col items-center gap-2 ">
      <textarea
        type="text"
        placeholder="Commit message"
        className="rounded-md focus:border-purple-50 border-purple-50"
      />
      {commit == true ? (
        <button
          onClick={handleCommit}
          className="bg-purple-500 hover:bg-purple-700 w-full rounded-md text-white text-lg text-semibold py-2"
        >
          Commit
        </button>
      ) : (
        <button
          onClick={handlePush}
          className="bg-purple-500 hover:bg-purple-700 w-full rounded-md text-white text-lg text-semibold py-2"
        >
          Push
        </button>
      )}
    </div>
  );
};

export default ProjectDetailRightSide;
