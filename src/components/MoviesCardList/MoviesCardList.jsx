import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import { cardsNumbers } from '../../utils/constants';
import './MoviesCardList.css';


function MoviesCardList({movies, windowWidth, handleSaveMovie, handleDeleteMovie, moviesMessage}) {
  const [renderedMoviesList, setRenderedMoviesList] = React.useState([]);
  const [isButtonActive, setIsButtonActive] = React.useState(false);
  const [renderedCardsCount, setRenderedCardsCount] = React.useState(12);
  const [addedCardsCount, setAddedCardsCount] = React.useState(0);

  const location = useLocation().pathname;

  function cardsCount() {
    if (windowWidth >= 650) {
      setRenderedCardsCount(cardsNumbers.desktopOrTablet);
      setAddedCardsCount(cardsNumbers.desktopOrTablet);
    } else {
      setRenderedCardsCount(cardsNumbers.mobile);
      setAddedCardsCount(cardsNumbers.mobile);
    }
  }

  function handleMoreClick() {
    setRenderedMoviesList(movies.slice(0, renderedMoviesList.length + addedCardsCount));
    if (renderedMoviesList.length >= movies.length - addedCardsCount) {
      setIsButtonActive(false);
    }
  }

  React.useEffect(() => {
    cardsCount();
  }, [windowWidth]);

  React.useEffect(() => {
    if (location === '/movies') {
      setRenderedMoviesList(movies.slice(0, renderedCardsCount));
      if (movies.length <= renderedCardsCount) {
        setIsButtonActive(false);
      } else {
        setIsButtonActive(true);
      }
    } else {
      setRenderedMoviesList(movies);
      setIsButtonActive(false);
    }
  }, [movies]);



  return (
    <>
      <section className='movies__cards'>
        {movies.length === 0
          ? <p className='movies-card-list__span'>{moviesMessage}</p>
          : <ul className='movies-card-list'>
              {renderedMoviesList.map(data => {
                return (
                  <MoviesCard
                    key={location === '/movies' ? data.id : data._id}
                    data={data}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                )
              })
            }
        </ul>
        }
      </section>
      <MoreButton onMoreClick={handleMoreClick} isButtonActive={isButtonActive} />
    </>
  )
}

export default MoviesCardList;
