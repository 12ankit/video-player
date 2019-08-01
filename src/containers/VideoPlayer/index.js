import React, { useState } from "react";
import Input from "../../components/Input";
import Video from "../../components/Video";
import IFrameSnippet from "../../components/IFrameSnippet";

const src = [
  {
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    type: "video/mp4"
  }
];

const VideoPlayer = () => {
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(506);
  const setters = {
    setWidth,
    setHeight
  };
  const changeHandler = e => {
    const key = e.target.name;
    const value = Number(e.target.value);
    const capitalizedKey = `${key[0].toUpperCase()}${key.substr(
      1,
      key.length
    )}`;
    const setterName = `set${capitalizedKey}`;
    setters[setterName](value);
  };
  return (
    <React.Fragment>
      <div className="fields">
        <Input
          className="input"
          label="Width"
          type="number"
          name="width"
          value={width}
          onChange={changeHandler}
        />
        <Input
          className="input"
          label="Height"
          type="number"
          name="height"
          value={height}
          onChange={changeHandler}
        />
        <IFrameSnippet
          src={src[0].src}
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <Video
        videoProps={{
          style: { margin: " 10px auto" },
          width,
          height,
          controls: true
        }}
        src={src}
      />
    </React.Fragment>
  );
};

export default VideoPlayer;
