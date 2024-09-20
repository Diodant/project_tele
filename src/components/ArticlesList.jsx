import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 
import HeaderImage from './HeaderImage';
import imageUrl from '../img/site-bg.jpg';

const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <>
        <HeaderImage imageUrl={imageUrl} altText="Жюри Национальной телевизионной премии 'Телетриумф'">
      <h1>Национальная телевизионная премия "Телетриумф"</h1>
    </HeaderImage>
    <div className="articles-page">
    <h2 className="page-title">Новости</h2>
      <div className="articles-container">
        {articlesData.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-image-container">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-date-badge">{article.date}</div>
            </div>
            <div className="article-content">
              <div className="article-info">
                <div className='article-category-cont'>
                <h3 className="article-category">
                  <i className="bi bi-bookmarks icon"></i> 
                  {article.category}
                </h3>
                </div>
                <h2 className="article-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
                <div className="article-text">{article.text}</div>
            
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArticlesList;
