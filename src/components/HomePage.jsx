import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ServiceIcon1 } from '../img/ServiceIcon1.svg';
import { ReactComponent as ServiceIcon2 } from '../img/ServiceIcon2.svg';
import { ReactComponent as ServiceIcon3 } from '../img/ServiceIcon3.svg';
import docImage from '../img/doc.png';
import image from '../img/lair.jpg';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: '«С момента своего учреждения в 2000 году "Телетриумф" стал главным символом признания достижений в украинской телеиндустрии.»',
      author: 'Национальный совет Украины',
      company: 'по вопросам телевидения и радиовещания',
    },
    {
      quote: '«"Телетриумф" продолжает развиваться, привлекая внимание не только национальных, но и международных экспертов.»',
      author: 'Эксперты телеиндустрии',
      company: 'Международные и национальные эксперты',
    },
    {
      quote: '«Премия остается главной телевизионной наградой Украины, символизируя уважение и высокие стандарты профессионализма в телеиндустрии.»',
      author: 'Телеэксперты Украины',
      company: 'Национальная телеиндустрия',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <div className="home-page">
      <div className="background-image"></div>
      </div>
      <section className="services-section">
        <h2 className="section-title">Новые горизонты телевизионной премии</h2>
        <div className="services-container">
          <div className="service-item">
            <ServiceIcon1 className="service-icon" />
            <h3>Признание лучших телепроектов</h3>
            <p>Премия "Телетриумф" отмечает лучшие телевизионные проекты и профессионалов, чьи работы внесли значительный вклад в развитие украинской телеиндустрии.</p>
          </div>
          <div className="service-item">
            <ServiceIcon2 className="service-icon" />
            <h3>Объективность и профессионализм</h3>
            <p>Важным нововведением стало введение шести профессиональных гильдий, которые оценивают номинантов по своим специальностям, обеспечивая объективность и профессионализм в выборе победителей.</p>
          </div>
          <div className="service-item">
            <ServiceIcon3 className="service-icon" />
            <h3>Трансформация и реформы</h3>
            <p>В 2018 году были проведены масштабные реформы, которые сделали процедуру голосования более прозрачной и справедливой, повысив престиж премии и привлекая новых участников.</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h3 className="testimonials-title">О нас</h3>
        <div className="testimonial">
          <p className="testimonial-quote">{testimonials[currentTestimonial].quote}</p>
          <p className="testimonial-author">{testimonials[currentTestimonial].author}</p>
          <p className="testimonial-company">{testimonials[currentTestimonial].company}</p>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </section>
      <section className="card-section">
        <div className="card">
          <div className='img-cont'>
            <img src={docImage} alt="Критерии оценки" className="card-image" />
          </div>
          <h3>Критерии оценки по номинациям</h3>
          <p>Узнайте больше о критериях оценки по различным номинациям премии "Телетриумф".</p>
          <div className="card-button-container">
              <Link to="/criteria" className="card-button">Перейти</Link>
            </div>
        </div>
        <div className="card">
          <div className='img-cont'>
            <img src={docImage} alt="Положение" className="card-image" />
          </div>
          <h3>Положение</h3>
          <p>Ознакомьтесь с положением премии "Телетриумф", чтобы понять, как принять участие.</p>
          <div className="card-button-container">
          <Link to="/position" className="card-button">Перейти</Link> 
            </div>
        </div>
      </section>
      <section className="text-image-section">
      <div className="text-content">
      <h2>Наша команда экспертов</h2>
        <p>
          Команда Национальной телевизионной премии "Телетриумф" состоит из лучших профессионалов телеиндустрии, обладающих глубоким знанием и многолетним опытом в сфере телевидения. Наша команда экспертов не только оценивает номинантов, но и формирует новые стандарты качества, вдохновляя будущее поколение мастеров телеэкрана.
        </p>
        <p>
          Каждый член нашей команды является признанным специалистом в своей области, будь то продюсирование, режиссура, сценаристика или операторская работа. Мы гордимся тем, что можем объединить таких талантливых людей для оценки самых значимых достижений в украинской телеиндустрии и признания лучших из лучших.
        </p>
      </div>
      <div className="image-content">
        <img src={image} alt="Lair" />
      </div>
    </section>
    </>
  );
};

export default HomePage;
