import "./index.css";

import menu from "./data";

import Menu from "./components/Menu";
import Categories from "./components/Categories";
import { useState } from "react";
import Title from "./components/Title";

const App = () => {
  const tempCategories = menu.map((item) => item.category);
  const tempSet = new Set(tempCategories);

  console.log(tempSet);
  const allCategories = ["all", ...tempSet];

  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category: string) => {
    const filteredItems = menu.filter(
      (menuItem) => menuItem.category === category
    );
    
    setMenuItems(filteredItems.length>0 ? filteredItems:menu);
  };
  return (
    <div className="menu">
        <Title text="Jed's Menu" />
        <Categories options={categories} filterItems={filterItems} />
        <Menu menu={menuItems} />
    </div>
  );
};
export default App;
