import React from "react";

const IFrameSnippet = ({
  src,
  width,
  height,
  frameBorder,
  scrolling,
  allowFullScreen,
  className
}) => (
  <textarea
    className={className}
    value={`<iframe src="${src}" width=${width} height=${height} frameborder=${frameBorder} scrolling=${scrolling} allowfullscreen=${allowFullScreen}></iframe>`}
  />
);

export default IFrameSnippet;
