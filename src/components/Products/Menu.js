import React from "react";
import "./Products.css";
import { useEffect } from "react";
import "./SearchBar/SearchBar.css";
import Products from "./Products.json";

function Menu({
  menuItem,
  button,
  filter,
  onAdd,
  searchTerm,
  setSearchTerm,
  setMenuItem,
  setButtons,
}) {
  const products = Products;
  console.log(Products);
  useEffect(() => {
    setMenuItem(products);
    setButtons(products);
  }, []);

  const allCategories = [
    "All",
    ...new Set(button.map((item) => item.category)),
  ];
  return (
    <div className="item">
      <div>
        <div className="filter-container">
          {allCategories.map((cat, i) => {
            return (
              <button
                class="filter__btn"
                key={i}
                type="button"
                onClick={() => filter(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <form class="form-inline">
          <i class="fas fa-search" aria-hidden="true"></i>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            class="form-control7"
            type="text"
            placeholder="Search here.."
            aria-label="Search"
          ></input>
        </form>
        {/* <Slider /> */}
      </div>

      <div className="template_Container">
        {menuItem
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div class="content">
                <img class="photosCard" src={val.image} />
                <h3 class="title"> {val.title} </h3>
                {/* <p class="title"> {val.description} </p> */}
                <h1 class="srice"> {val.price} $</h1>

                <button class="Cart" onClick={() => onAdd(val)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Menu;
