import React, { useState } from "react";
import ReactPlayer from "react-player";
import Input from "../../components/Input";
import IFrameSnippet from "../../components/IFrameSnippet";

const src = "https://vjs.zencdn.net/v/oceans.mp4";

const VideoPlayer = () => {
  const [width, setWidth] = useState(800);
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
      <h3>Native Html Video Player Demo</h3>
      <div className="fields">
        <Input
          className="inputContainer"
          labelClassName="wLabel"
          inputClassName="wInput"
          label="Width"
          type="number"
          name="width"
          value={width}
          onChange={changeHandler}
        />
        <Input
          className="inputContainer"
          labelClassName="hLabel"
          inputClassName="hInput"
          label="Height"
          type="number"
          name="height"
          value={height}
          onChange={changeHandler}
        />
      </div>
      <IFrameSnippet
        src={src}
        className="snippet"
        width={width}
        height={height}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
      />
      <ReactPlayer
        url={src}
        controls
        width={width}
        height={height}
        style={{ margin: " 10px auto", border: "2px solid black", borderRadius: 5}}
      />
    </React.Fragment>
  );
};

export default VideoPlayer;
