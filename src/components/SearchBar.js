import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <form>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            name="filter"
            checked={null}
            onChange={(event) => props.filterByAlph(event.target.value)}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            name="filter"
            checked={null}
            onChange={(event) => props.filterByPrice(event.target.value)}
          />
          Price
        </label>
      </form>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterByType(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
