import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <span className="my-search-bar ms-1 text-secondary">
      <input type="text" placeholder="CERCA" />
      <div className="underline" />
    </span>
  );
};
