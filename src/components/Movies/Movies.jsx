import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "./Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main className='movies'>
      <SearchForm/>
      {/*<Preloader />*/}
      <MoviesCardList/>
      <section className='movies-card-list__container'>
        <button className='movies-card-list__btn'>Ещё</button>
      </section>
    </main>
  )
}

export default Movies;
