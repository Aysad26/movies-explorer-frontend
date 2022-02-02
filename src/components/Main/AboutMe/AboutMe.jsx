import './AboutMe.css';
import avatar from '../../../images/photo.jpg';

function AboutMe() {
  return (
    <section id='aboutme' className='aboutMe'>
      <h2 className='aboutMe__head'>Студент</h2>
      <div className='aboutMe__table'>
        <div className='aboutMe__table-container'>
          <h3 className='aboutMe__table_head'>Антон</h3>
          <p className='aboutMe__table_subtitle'>Веб-разработчик, 36 лет</p>
          <p className='aboutMe__table_desc'>Я живу в Санкт-Петербурге, закончил Тюменский Нефтегазовый Университет по специальности
          "Автоматизация технологических процессов" (2007 год) и Уральскую Архитектурно-художественную академию по специальности "Промышленный
          дизайн" (2014 год). Я люблю бегать, пробежал 18 марафонов.С 2007 года работаю графическим дизайнером, с 2018 - веб-дизайнером.
          После того, как закончу обучение по веб-разработке, планирую найти работу по данной специальности.</p>
          <ul className='aboutMe__table_links'>
            <li>
              <a target='_blank' rel="noreferrer" href='https://vk.com/aysad26' className='aboutMe__table_links_item'>Вконтакте</a>
            </li>
            <li>
              <a target='_blank' rel="noreferrer" href='https://github.com/Aysad26' className='aboutMe__table_links_item'>Github</a>
            </li>
          </ul>
        </div>
        <img src={avatar} alt="Фотография студента" className='aboutMe__table_avatar'/>
      </div>
    </section>
  )
}

export default AboutMe;
