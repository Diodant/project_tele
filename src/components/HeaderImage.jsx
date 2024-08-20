import React from 'react';

const HeaderImage = ({ imageUrl, altText }) => {
  return (
    <div className="header-image-container">
      <img src={imageUrl} alt={altText} className="header-image" />
    </div>
  );
};

export default HeaderImage;
