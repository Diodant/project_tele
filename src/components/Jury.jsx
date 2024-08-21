import React, { useState } from 'react';
import HeaderImage from './HeaderImage';
import imageUrl from '../img/site-bg.jpg';
import juryData from './jurData';


const Jury = () => {
    const [selectedYear, setSelectedYear] = useState(2024);
  
    const handleYearChange = (year) => {
      setSelectedYear(year);
    };
  
    return (
      <>
        <HeaderImage imageUrl={imageUrl} altText="Жюри Национальной телевизионной премии 'Телетриумф'">
          <h1>Национальная телевизионная премия "Телетриумф"</h1>
        </HeaderImage>
        <div className="jury-page">
          <h2 className="page-title">Престиж и ответственность</h2>
          <p>Жюри национальной телевизионной премии "Телетриумф" — это коллектив признанных мастеров телеиндустрии, чьи профессионализм и опыт заслуживают высокого доверия. Быть частью жюри "Телетриумфа" — это не только высокая честь, но и большая ответственность, ведь именно от членов жюри зависит выбор лучших из лучших в украинском телевидении. Организаторы премии тщательно отбирают судей, чтобы обеспечить объективность и справедливость оценивания. Каждый член жюри — это эксперт с глубокими знаниями и опытом работы в своей профессиональной области.</p>
          <h3 className="page-title">Критерии отбора жюри</h3>
          <p>Для участия в жюри премии "Телетриумф" приглашаются только выдающиеся специалисты с признанным авторитетом в телеиндустрии. Каждый судья имеет как минимум пять лет профессионального опыта и должен принадлежать к одной из шести профессиональных гильдий, сформированных для объективного и справедливого оценивания номинантов. Члены жюри не оценивают все номинации подряд, а только те категории, в которых они обладают экспертизой. Этот подход позволяет избегать предвзятости и максимально объективно оценивать работы участников.</p>
          <h3 className="page-title">Прозрачность голосования</h3>
          <p>С целью повышения доверия к результатам, процедура голосования за номинантов премии "Телетриумф" была полностью реформирована. Теперь голосование проходит в два этапа: онлайн-голосование, где каждый судья выставляет баллы номинантам, и открытое голосование на собрании гильдии, где происходит финальное обсуждение и выбор победителей. Такое двухэтапное голосование гарантирует, что мнения всех членов жюри будут учтены, а финальные решения будут основаны на профессиональных дискуссиях и взвешенных оценках.</p>
          <h3 className="page-title">Профессиональные гильдии</h3>
          <p>Члены жюри премии "Телетриумф" распределяются по шести профессиональным гильдиям, каждая из которых отвечает за оценку определенных номинаций:</p>
          <ul className='list'>
            <li>Гильдия продюсеров: продюсеры программ, телефильмов, сериалов, креативные и генеральные продюсеры телеканалов и медиагрупп.</li>
            <li>Гильдия режиссеров и сценаристов.</li>
            <li>Гильдия операторов, художников-постановщиков и художников по свету.</li>
            <li>Гильдия информационного, спортивного и общественно-социального вещания.</li>
            <li>Гильдия детского, музыкального и тематического производства.</li>
            <li>Гильдия телевизионного дизайна и промо.</li>
          </ul>
          <p>Каждая гильдия формируется с учетом профессиональной специализации членов, что позволяет более глубоко и точно оценивать работы в каждой номинации. Это гарантирует, что награды "Телетриумф" будут вручены самым достойным представителям телеиндустрии.</p>
  
          <h1 className="page-title">Состав Жюри {selectedYear}</h1>
          <div className="year-selector">
            {Object.keys(juryData).map(year => (
              <button 
                key={year} 
                className={`year-button ${year === selectedYear ? 'active' : ''}`}
                onClick={() => handleYearChange(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="jury-content">
            {juryData[selectedYear].map((guild, index) => (
              <div key={index} className="jury-guild">
                <h2 className="guild-title">{guild.guild}</h2>
                <ul className="guild-members">
                  {guild.members.map((member, i) => (
                    <li key={i} className="guild-member">{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Jury;