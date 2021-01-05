import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	// need to iterate over the videos map
	// then need to assign the function to a const
	// should be descriptive of what is happening

	const renderedList = videos.map((video) => {
		return <VideoItem key={video.id.videoId} />;
	});

	return <div>{renderedList}</div>;
};

export default VideoList;
