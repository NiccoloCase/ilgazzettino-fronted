import "./SearchBar.scss";

export const SearchBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span className={"my-search-bar ms-1 text-secondary " + className}>
      <input type="text" placeholder="CERCA" />
      <div className="underline" />
    </span>
  );
};
