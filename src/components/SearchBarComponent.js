const SearchBarComponent = () => {
  return (
    <div className="searchContainer">
      <input
        type="search"
        className="searchField"
        placeholder="Search for specific restaurant ... "
      />
      <button className="searchIconBtn">
        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
      </button>
    </div>
  );
};
export default SearchBarComponent;