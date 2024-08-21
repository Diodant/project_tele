import React from 'react';

const HeaderImage = ({ imageUrl, altText, children }) => {
  return (
    <div
      className="header-image-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="header-overlay">
        {children}
      </div>
    </div>
  );
};

export default HeaderImage;