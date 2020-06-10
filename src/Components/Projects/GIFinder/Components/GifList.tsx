import React from 'react';
import Gif from './Gif';

// stateless functional component
const GifList = (props: any) => {
  const gifItems = props.gifs.map((image: any) => {
    return <Gif key={image.id} gif={image} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;