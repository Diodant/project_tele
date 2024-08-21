import React, { useState } from 'react';
import winnersData from './winData.js';
import HeaderImage from './HeaderImage';
import imageUrl from '../img/site-bg.jpg';

const Winners = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <HeaderImage imageUrl={imageUrl} altText="Описание изображения">
        <h1>Национальная телевизионная премия "Телетриумф"</h1>
      </HeaderImage>
      <div className="winners-page">
        <h1 className="page-title">Номинации и победители</h1>
        <h2 className="selected-year"> {selectedYear}</h2>
        <div className="year-selector">
          {Object.keys(winnersData).map((year) => (
            <button
              key={year}
              className={`year-button ${year === selectedYear ? 'active' : ''}`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="winners-grid">
          {winnersData[selectedYear].map((winner, index) => (
            <div key={index} className="winner-card">
              <h2 className="winner-category">{winner.category}</h2>
              <p className="winner-name">{winner.winner}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Winners;
