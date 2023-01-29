import React, { useState } from 'react';

function ImagePreview() {
  const [showImage, setShowImage] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  function handleClick() {
    setImageUrl('./oleo1.png');
    setShowImage(true);
  }
  
  function handleClose(){
    setShowImage(false);
  }

  return (
    <div>
      <button onClick={handleClick}> </button>
      {showImage && <img src={imageUrl} alt="Preview" style={{width: '200px', height: '200px'}}  onClick={handleClose}/>}
    </div>
  );
}

export default ImagePreview;
