import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";
import { ChangeEventHandler } from "react";

interface SearchProps {
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function SearchBar(props: SearchProps) {
  return (
    <form className="search__bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Buscar criptomoeda"
        value={props.value}
        onChange={props.onChange}
        className="search__input"
        required
      />
      <button type="submit" className="search__button">
        <CiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
 