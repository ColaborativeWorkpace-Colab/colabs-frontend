import React from "react";
import loaderVid from "../../assets/images/COLABS.mp4";
const Loading = () => {
	return (
		<div role="status" className="flex items-center justify-center">
			<video
				className="w-[150px] sm:w-[400px] text-center"
				src={loaderVid}
			></video>{" "}
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Loading;
