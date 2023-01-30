import React, { useState, useEffect } from 'react';

const ImageGrid = () => {
  const [opacity, setOpacity] = useState(1);
  //...

  const closePreview = () => {
    document.getElementById("preview-image").classList.add("fade-out");
    setIsPreviewOpen(false);
    setTimeout(() => {
      setPreviewImage(null);
    }, 500);
  };
  
  const [images, setImages] = useState([
    'oleo1.png',
    'oleo2.png',
    'oleo3.png',
    'oleo4.png',
    'oleo5.png',
    'oleo2.png',
    'oleo7.png',
    'oleo8.png',
  ]);
  const [currentImages, setCurrentImages] = useState(images);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(shuffle(currentImages));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentImages]);

  useEffect(() => {
    if (previewImage) {
      window.addEventListener("scroll", closePreview);
    } else {
      window.removeEventListener("scroll", closePreview);
    }
    return () => window.removeEventListener("scroll", closePreview);
  }, [previewImage]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const openPreview = (image) => {
    setPreviewImage(image);
    setIsPreviewOpen(true);
  };



  return (
    <div className={`bg_oleo ${isPreviewOpen ? 'bg_oleo-open' : ''}`}>
      <div  className='flex justify-center' id='oleo'>
       <h1 className=' sm:text-5xl font-normal text-center pt-16 p-2  '>Pinturas de técnicas mixtas</h1>
      </div>
      <div className='oleo p-6 grid grid-cols-2 justify-center justify-items-center gap-8 md:grid-cols-2'>
        {currentImages.map((image, index) => (
          <img className='max-h-[580px] cursor-pointer' src={image} key={index} onClick={() => openPreview(image)} />
        ))}
        {previewImage && (
          <div className='preview-overlay   ' style={{ opacity: opacity, transition: 'opacity 1s' }}>
            <img id="preview-image" className='preview-image p-6' src={previewImage} onClick={closePreview} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;


