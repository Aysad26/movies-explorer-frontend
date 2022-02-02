import './FilterCheckbox.css';

function FilterCheckbox() {
  return <label className="filtercheckbox">
    <input className="filtercheckbox__input" type="checkbox" />
    <span className="filtercheckbox__visible-input"/>
    Короткометражки
  </label>
}

export default FilterCheckbox;
