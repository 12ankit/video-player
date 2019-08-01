import React from "react";

const IFrameSnippet = ({
  src,
  width,
  height,
  frameBorder,
  scrolling,
  allowFullScreen
}) => (
  <textarea
    value={`<iframe src="${src}" width=${width} height=${height} frameborder=${frameBorder} scrolling=${scrolling} allowfullscreen=${allowFullScreen}></iframe>`}
    style={{
      height: 118,
      background: "#FFFFFF",
      boxShadow: "0 0 12px 8px #B6B6B6 inset",
      color: "#666666",
      fontSize: 12,
      padding: 8,
      letterSpacing: 1,
      resize: "none",
      width: 400
    }}
  />
);

export default IFrameSnippet;
