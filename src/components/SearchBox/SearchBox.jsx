import css from './SearchBox.module.css';
export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div>
      {/* <p>Find conacts be name </p> */}
      <input
        type="text"
        placeholder="Find conacts be name"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        className={css.searchBox}
      />
    </div>
  );
}
