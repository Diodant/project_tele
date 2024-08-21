import React from 'react';
import photo1 from '../img/bb49941e67d76d1735f66a3753ee222a.jpeg';

const photos = [
  { id: 1, src: photo1, alt: 'Фото 1' },
  { id: 2, src: photo1, alt: 'Фото 2' },
  { id: 3, src: photo1, alt: 'Фото 3' },
  { id: 4, src: photo1, alt: 'Фото 4' },
  { id: 5, src: photo1, alt: 'Фото 5' },
  { id: 6, src: photo1, alt: 'Фото 6' },
  // Добавьте больше фото по необходимости
];

const PhotoGalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1 className="title">Фотогалерея</h1>
      <div className="gallery-grid">
        {photos.map(photo => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalleryPage;
