import './SearchForm.css';
import '../Register/Register.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import {useState} from "react";

function SearchForm(props) {
  const [searchInput, setSearchInput] = useState('');
  const [isSearchFormValid, setIsSearchFormValid] = useState(true);

  function handleChange(e) {
    setSearchInput(e.target.value);
    setIsSearchFormValid(e.target.checkValidity());
  }

  function onSubmit(e) {
    e.preventDefault();
    props.handleSearchMovies(searchInput);
  }

  function onSubmitSavedMovies(e) {
    e.preventDefault();
    props.handleSearchSavedMovies(searchInput);
  }

  return (
    <form className='search' onSubmit={props.isSavedMovies ? onSubmitSavedMovies : onSubmit}>
      <div className='search__item'>

          <input
              className='search__item_input'
              name='search'
              required
              placeholder='Фильм'
              type="text"
              autoComplete="off"
              onChange={handleChange}
            />
            <span className={`register__form_span ${isSearchFormValid && 'register__form_span_hidden'} `}
            >Это поле обязательно</span>

        <button className='search__item_button' type='submit'>Найти</button>
      </div>
      <FilterCheckbox handleShortMovies={props.handleShortMovies} isShortMovies={props.isShortMovies}/>
    </form>
  )
}

export default SearchForm;
