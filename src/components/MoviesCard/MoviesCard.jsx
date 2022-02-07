import './MoviesCard.css';

function MoviesCard({preview, name, duration, saved, lk}) {
  return (
    <>
      {lk ? saved ?
        <div className='movies-card'>
          <div className='movies-card__info'>
            <div className='movies-card__container'>
              <h3 className='movies-card__info_head'>{name}</h3>
              <p className='movies-card__info_dur'>{duration}</p>
            </div>
            <button type='button' className='movies-card__info_delete'/>
          </div>
          <div className='movies-card__item'>
            <img className='movies-card__item_img' src={`${preview}`} alt={name}/>
          </div>
        </div>
        : undefined

        : <div className='movies-card'>
          <div className='movies-card__info'>
            <div className='movies-card__container'>
              <h3 className='movies-card__info_head'>{name}</h3>
              <p className='movies-card__info_dur'>{duration}</p>
            </div>
            {saved ? <button type='button' className='movies-card__info_saved'/> :
              <button type='button' className='movies-card__info_save'></button>}
          </div>
          <div className='movies-card__item'>
            <img className='movies-card__item_img' src={`${preview}`} alt={name}/>
          </div>
        </div>}
    </>
  )
}

export default MoviesCard;
