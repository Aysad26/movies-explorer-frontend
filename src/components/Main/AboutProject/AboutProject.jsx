import './AboutProject.css';

function AboutProject() {
  return (
    <section id='aboutproject' className='aboutP'>
      <h2 className='aboutP__head'>О проекте</h2>
      <div className='aboutP__table'>
        <div>
          <h3 className='aboutP__table-head'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutP__table-desc'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.</p>
        </div>
        <div>
          <h3 className='aboutP__table-head'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutP__table-desc'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutP__line'>
        <div className='aboutP__line-item'>
          <p id='one' className='aboutP__line-item-head'>1 неделя</p>
          <p className='aboutP__line-item-desc'>Back-end</p>
        </div>
        <div className='aboutP__line-item'>
          <p id='two' className='aboutP__line-item-head'>4 недели</p>
          <p className='aboutP__line-item-desc'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
