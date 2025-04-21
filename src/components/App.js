import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(searchTerm) {
    setSearch(searchTerm);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;
