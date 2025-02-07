import React, { useEffect, useState } from "react";
import "./index.css";

const DropDown = ({ data = [], onClickFunction = () => {} }) => {
  const [itemsToShow, setItemsToShow] = useState(5);
  const handleShowItems = (e) => {
    e.preventDefault();
    if (itemsToShow <= 5) {
      setItemsToShow(data.length);
    } else {
      setItemsToShow(5);
    }
  };
  useEffect(() => {
    const focusItem = document.getElementById("searchInput");
    if (focusItem) {
      focusItem.focus();
    }
  }, [itemsToShow]);
  return (
    <div className="w-full dropDown">
      {data.slice(0, itemsToShow).map((item, idx) => (
        <div
          key={idx}
          onClick={() => {
            console.log("Item clicked: ", item.name);
            onClickFunction(item);
          }}
          className="dropDownItem"
        >
          {item.name}
        </div>
      ))}
      {data.length > 5 && (
        <div onClick={handleShowItems} className="showMoreToggle">
          {itemsToShow > 5 ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
  );
};

export default DropDown;
