import React from 'react';
import photo1 from '../img/photo/photo1.webp';
import photo2 from '../img/photo/photo2.webp';
import photo3 from '../img/photo/photo3.webp';
import photo4 from '../img/photo/photo4.webp';
import photo5 from '../img/photo/photo5.webp';
import photo6 from '../img/photo/photo6.webp';
import photo7 from '../img/photo/photo7.webp';
import photo8 from '../img/photo/photo8.webp';
import photo9 from '../img/photo/photo9.webp';
import photo10 from '../img/photo/photo10.webp';
import photo11 from '../img/photo/photo11.webp';
import photo12 from '../img/photo/photo12.webp';
import photo13 from '../img/photo/photo13.jpg';
import photo14 from '../img/photo/photo14.jpg';
import photo15 from '../img/photo/photo15.jpg';
import photo16 from '../img/photo/photo16.jpg';
import photo17 from '../img/photo/photo17.jpg';
import photo18 from '../img/photo/photo18.jpg';
import photo19 from '../img/photo/photo19.jpg';
import photo20 from '../img/photo/photo20.jpg';
import photo21 from '../img/photo/photo21.jpg';
import photo22 from '../img/photo/photo22.jpg';
import photo23 from '../img/photo/photo23.jpg';
import photo24 from '../img/photo/photo24.jpg';

const photos = [
  { id: 1, src: photo1, alt: 'Фото 1' },
  { id: 2, src: photo2, alt: 'Фото 2' },
  { id: 3, src: photo3, alt: 'Фото 3' },
  { id: 4, src: photo4, alt: 'Фото 4' },
  { id: 5, src: photo5, alt: 'Фото 5' },
  { id: 6, src: photo6, alt: 'Фото 6' },
  { id: 7, src: photo7, alt: 'Фото 7' },
  { id: 8, src: photo8, alt: 'Фото 8' },
  { id: 9, src: photo9, alt: 'Фото 9' },
  { id: 10, src: photo10, alt: 'Фото 10' },
  { id: 11, src: photo11, alt: 'Фото 11' },
  { id: 12, src: photo12, alt: 'Фото 12' },
  { id: 13, src: photo13, alt: 'Фото 13' },
  { id: 14, src: photo14, alt: 'Фото 14' },
  { id: 15, src: photo15, alt: 'Фото 15' },
  { id: 16, src: photo16, alt: 'Фото 16' },
  { id: 17, src: photo17, alt: 'Фото 17' },
  { id: 18, src: photo18, alt: 'Фото 18' },
  { id: 19, src: photo19, alt: 'Фото 19' },
  { id: 20, src: photo20, alt: 'Фото 20' },
  { id: 21, src: photo21, alt: 'Фото 21' },
  { id: 22, src: photo22, alt: 'Фото 22' },
  { id: 23, src: photo23, alt: 'Фото 23' },
  { id: 24, src: photo24, alt: 'Фото 24' },
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
