import React from 'react';
import { useLocation } from 'react-router-dom';
import movie from '../../images/movie.jpg'
import { getDuration } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({data, handleSaveMovie, handleDeleteMovie}) {
  const [isShown, setIsShown] = React.useState(false);
  const location = useLocation().pathname;

  function handleSaveButtonDisactive() {
    setIsShown(false);
  }

  function handleSaveButtonActive() {
    setIsShown(true);
  }

  function handleSave(evt) {
    evt.preventDefault();
    handleSaveMovie(data);
  }

  function handleDelete(evt) {
    evt.preventDefault();
    handleDeleteMovie(data);
  }

  function handleImageClick() {
    location === '/movies'
    ? window.open(data.trailerLink, '_blank')
    : window.open(data.trailer, '_blank')
  }

  return (
    <li
      className='card'
      id={location === '/movies' ? data.id : data._id}
      onMouseOver={handleSaveButtonActive}
      onMouseOut={handleSaveButtonDisactive}
    >
      <div className="card__container-img">
        {location === '/saved-movies'
          ? <img
              className='card__image'
              src={data.image !== null ? data.image : movie}
              alt={data.nameRU}
              onClick={handleImageClick}
            />
          : <img
              className='card__image'
              src={data.image !== null ? `https://api.nomoreparties.co${data.image.url}` : movie}
              alt={data.nameRU}
              onClick={handleImageClick}
            />
        }
      </div>
      <div className='card__container'>
        <div className='card__container-info'>
          <p className='card__name'>{data.nameRU}</p>
          <div className='card__duration'>
            <p className='card__duration-text'>{getDuration(data)}</p>
          </div>
        </div>
        {(location === '/movies' && data.saved === true)
        &&
        <div className='card__saved' onClick={handleDelete} />}
        {(location === '/movies' && data.saved !== true)
        &&
        <button
          className={`card__save ${isShown && 'card__save_active'}`}
          type='button'
          onClick={handleSave}
        >

        </button>}
        {location === '/saved-movies'
        &&
        <button
          className={`card__delete ${isShown && 'card__save_active'}`}
          type='button'
          onClick={handleDelete}
        />}
      </div>
    </li>
  )
}

export default MoviesCard;
