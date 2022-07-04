import "./App.css";
import Data from "./Components/Data/Data";
import DataDisplay from "./Components/Data/DataDisplay";
import { Category } from "./Components/itemCategory/Category";
import TextField from "@mui/material/TextField";
import groupBy from "lodash/groupBy";
import filter from "lodash/filter";

import { useState, useEffect } from "react";
import includes from "lodash/includes";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState({});
  const [filteredCategories, setFilteredCategories] = useState([]);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const { items, categories } = Data;

  useEffect(() => {
    const filteredData =
      searchInput === ""
        ? items
        : filter(
            items,
            (item) =>
              includes(
                item.restaurant_category_name.toLowerCase(),
                searchInput.toLowerCase()
              ) ||
              includes(item.item_name.toLowerCase(), searchInput.toLowerCase())
          );
    const groupedItems = groupBy(filteredData, "restaurant_category_id");
    setFilteredItems(groupedItems);
  }, [searchInput]);

  useEffect(() => {
    const categoryIds = Object.keys(filteredItems);

    const groupedCategories = filter(categories, (category) =>
      includes(categoryIds, category.restaurant_category_id)
    );
    setFilteredCategories(groupedCategories);
  }, [filteredItems]);

  return (
    <div>
      <div className="search">
        <TextField
          id="standard-basic"
          variant="standard"
          label="Search"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      <br></br>
      <div className="App">
        <div className="sideNav">
          <Category categories={filteredCategories} />
        </div>
        <div className="main">
          <DataDisplay items={filteredItems} categories={filteredCategories} />
        </div>
      </div>
    </div>
  );
}

export default App;
