import React from 'react';
import HeaderImage from './HeaderImage';
import imageUrl from '../img/site-bg.jpg';

const CriteriaPage = () => {
  return (
    <>
        <HeaderImage imageUrl={imageUrl} altText="Описание изображения">
      <h1>Национальная телевизионная премия "Телетриумф"</h1>
    </HeaderImage>
    <div className="criteria-page">
      <h1 className="criteria-title">Критерии оценки по номинациям</h1>
      <div className="criteria-content">
        <section>
          <h2>1. Лучший телевизионный фильм</h2>
          <ul>
            <li>Сценарий и сюжет: Оригинальность, глубина и логичность сюжета, драматургия.</li>
            <li>Режиссура: Способность режиссера передать идею и эмоциональное воздействие на зрителя.</li>
            <li>Актерская игра: Правдоподобность и выразительность исполнения ролей.</li>
            <li>Качество продакшена: Уровень технической реализации, включая работу оператора, монтаж и звуковое сопровождение.</li>
          </ul>
        </section>
        <section>
          <h2>2. Лучший драматический сериал</h2>
          <ul>
            <li>Сюжетная линия: Развитие сюжета, его сложность и интрига.</li>
            <li>Режиссура и постановка: Креативность, стилистическое единство и качество постановки.</li>
            <li>Актерская игра: Харизматичность и убедительность актеров, их соответствие ролям.</li>
            <li>Качество продакшена: Использование кинематографических средств, монтаж, свет и звук.</li>
          </ul>
        </section>
        <section>
          <h2>3. Лучший комедийный сериал</h2>
          <ul>
            <li>Юмор и сценарий: Оригинальность юмора, сценарные находки и диалоги.</li>
            <li>Режиссура: Способность режиссера создать легкую и запоминающуюся атмосферу.</li>
            <li>Актерская игра: Комедийный талант актеров, их взаимодействие и харизма.</li>
            <li>Качество продакшена: Оформление, декорации, монтаж и звуковое сопровождение.</li>
          </ul>
        </section>
        <section>
          <h2>4. Лучшая информационная программа</h2>
          <ul>
            <li>Информационная ценность: Актуальность, глубина анализа и объективность представленных данных.</li>
            <li>Журналистское мастерство: Профессионализм в подаче информации, способность удерживать внимание зрителя.</li>
            <li>Качество производства: Монтаж, визуальное оформление, качество звука и видео.</li>
            <li>Своевременность и актуальность: Время выхода и соответствие текущим событиям.</li>
          </ul>
        </section>
        <section>
          <h2>5. Лучшее ток-шоу</h2>
          <ul>
            <li>Тема и актуальность: Значимость обсуждаемых тем для общества.</li>
            <li>Мастерство ведущего: Умение направлять дискуссию, поддерживать интерактивность и интерес зрителей.</li>
            <li>Гости и эксперты: Репутация, компетентность и разнообразие приглашенных участников.</li>
            <li>Качество производства: Структура шоу, визуальное оформление, звук и монтаж.</li>
          </ul>
        </section>
        <section>
          <h2>6. Лучшее развлекательное шоу</h2>
          <ul>
            <li>Оригинальность: Новизна концепции, креативность в подаче материала.</li>
            <li>Режиссура: Постановка шоу, создание атмосферы.</li>
            <li>Ведущий: Харизма, способность удерживать внимание зрителей.</li>
            <li>Техническое исполнение: Качество декораций, звука, света.</li>
            <li>Вовлеченность аудитории: Способность развлечь и удержать внимание зрителей.</li>
          </ul>
        </section>
        <section>
          <h2>7. Лучший ведущий информационной программы</h2>
          <ul>
            <li>Профессионализм: Владение материалом, дикция, подача информации.</li>
            <li>Харизма и убедительность: Способность удерживать внимание зрителей и доверие к сказанному.</li>
            <li>Внешний вид и поведение: Сценический образ, соответствие формату программы.</li>
            <li>Взаимодействие с аудиторией: Умение вовлечь зрителей и создать доверительную атмосферу.</li>
          </ul>
        </section>
        <section>
          <h2>8. Лучший ведущий развлекательной программы</h2>
          <ul>
            <li>Харизма и артистизм: Способность удерживать внимание аудитории, развлекать и вдохновлять.</li>
            <li>Мастерство общения: Умение взаимодействовать с гостями, зрителями и участниками шоу.</li>
            <li>Оригинальность подачи: Креативность в ведении программы, использование уникальных приемов.</li>
            <li>Профессионализм: Способность управлять шоу, адаптироваться к непредвиденным ситуациям.</li>
          </ul>
        </section>
        <section>
          <h2>9. Лучший режиссер</h2>
          <ul>
            <li>Творческое видение: Способность создать уникальную атмосферу и передать задумку сценария.</li>
            <li>Работа с актерами: Умение раскрыть потенциал актеров и их взаимодействие в кадре.</li>
            <li>Качество постановки: Организация съемочного процесса, работа с оператором, монтаж и визуальные эффекты.</li>
            <li>Новаторство: Введение новых методов и технологий в режиссерской работе.</li>
          </ul>
        </section>
        <section>
          <h2>10. Лучший продюсер</h2>
          <ul>
            <li>Идея и концепция: Оригинальность и новизна идеи, концептуальная целостность проекта.</li>
            <li>Творческое руководство: Способность организовать и вдохновить команду, креативное управление процессом.</li>
            <li>Реализация проекта: Качество выполнения задуманного, соответствие конечного продукта замыслу.</li>
            <li>Влияние на индустрию: Вклад в развитие телеиндустрии, инновационность и актуальность проекта.</li>
          </ul>
        </section>
        <section>
          <h2>11. Лучший сценарист</h2>
          <ul>
            <li>Оригинальность: Новизна идеи, уникальность сюжета и персонажей.</li>
            <li>Структура сценария: Логика и последовательность событий, развитие сюжета.</li>
            <li>Диалоги: Естественность, выразительность и соответствие персонажам.</li>
            <li>Влияние на зрителя: Эмоциональное воздействие, способность вызвать интерес и сопереживание.</li>
          </ul>
        </section>
        <section>
          <h2>12. Лучшая операторская работа</h2>
          <ul>
            <li>Композиция кадра: Эстетика, симметрия и выразительность визуального ряда.</li>
            <li>Свет и цвет: Использование света и цвета для создания атмосферы и передачи настроения.</li>
            <li>Движение камеры: Динамика, плавность и креативность операторских приемов.</li>
            <li>Качество изображения: Четкость, детализация и общая техническая реализация съемок.</li>
          </ul>
        </section>
        <section>
          <h2>13. Лучшая детская программа</h2>
          <ul>
            <li>Содержание: Воспитательная и образовательная ценность, соответствие возрастной аудитории.</li>
            <li>Развлекательный аспект: Умение удерживать интерес детей, интерактивность.</li>
            <li>Креативность: Оригинальность подачи, использование новых форматов и технологий.</li>
            <li>Безопасность и мораль: Соответствие этическим нормам и безопасное содержание для детей.</li>
          </ul>
        </section>
        <section>
          <h2>14. Лучшая музыкальная программа</h2>
          <ul>
            <li>Репертуар: Разнообразие и качество музыкальных номеров, соответствие аудитории.</li>
            <li>Исполнение: Профессионализм исполнителей, живое исполнение и его качество.</li>
            <li>Режиссура: Постановка музыкальных номеров, хореография, световое оформление.</li>
            <li>Звуковое сопровождение: Качество звука, баланс и техническая реализация.</li>
          </ul>
        </section>
        <section>
          <h2>15. Лучший телевизионный дизайн и промо</h2>
          <ul>
            <li>Оригинальность: Творческий подход к визуальному оформлению и креативность решений.</li>
            <li>Соответствие бренду: Единство стиля и соответствие бренду или тематике проекта.</li>
            <li>Качество реализации: Техническое исполнение, качество графики, анимации и монтажа.</li>
            <li>Влияние на аудиторию: Способность привлечь внимание и вызвать интерес у зрителей.</li>
          </ul>
        </section>
        <section>
          <h2>16. Лучший документальный проект</h2>
          <ul>
            <li>Исследовательская работа: Глубина анализа, точность и достоверность информации.</li>
            <li>Постановка и сценарий: Логика изложения материала, драматургия, подача сюжета.</li>
            <li>Качество съемки и монтажа: Визуальное оформление, последовательность кадров, монтаж.</li>
            <li>Влияние на зрителя: Способность вызвать эмоции, заставить задуматься и сформировать мнение.</li>
          </ul>
        </section>
        <section>
          <h2>17. Лучший креативный продюсер</h2>
          <ul>
            <li>Идея и концепция: Оригинальность и новизна идеи, концептуальная целостность проекта.</li>
            <li>Творческое руководство: Способность организовать и вдохновить команду, креативное управление процессом.</li>
            <li>Реализация проекта: Качество выполнения задуманного, соответствие конечного продукта замыслу.</li>
            <li>Влияние на индустрию: Вклад в развитие телеиндустрии, инновационность и актуальность проекта.</li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default CriteriaPage;
