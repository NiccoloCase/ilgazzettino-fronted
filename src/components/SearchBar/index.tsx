import "./SearchBar.scss";

export const SearchBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span className={"my-search-bar ms-1 text-secondary " + className}>
      <label htmlFor="search-input" className="visually-hidden">
        Cerca
      </label>
      <input id="search-input" type="text" placeholder="CERCA" />
      <div className="underline" />
    </span>
  );
};
