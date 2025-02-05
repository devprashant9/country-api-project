import { useOutletContext } from "react-router";



function HeaderMenu({ search, setSearch }) {
  const mode = useOutletContext();
  return (
    <main className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="search-filter-container">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        </div>
        <select
          className="filter-by-region"
          onChange={(e) => setSearch(e.target.value)}
        >
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </main>
  );
}

export default HeaderMenu;
