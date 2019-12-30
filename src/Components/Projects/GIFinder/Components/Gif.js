import React from 'react';

const Gif = (image) => {
  return (
    <div className="gif-item">
      <img src={image.gif.images.downsized.url} onClick={()=> window.open(image.gif.images.downsized.url, "_blank")} alt="GIF"/>
    </div>
  )
};

export default Gif;