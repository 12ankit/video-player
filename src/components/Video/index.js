import React from "react";

const Video = ({ videoProps, src = [] }) => (
  <video {...videoProps}>
    {src.map(source => (
      <source {...source} />
    ))}
  </video>
);

export default Video;
