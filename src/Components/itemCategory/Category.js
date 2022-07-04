import React from "react";
import "./Category.css";
import { Link } from "react-scroll";

export const Category = ({ categories }) => {
  return (
    <>
      <h3 id="categories.restaurant_category_id">Categories</h3>
      {categories.map(
        ({ restaurant_category_name, restaurant_category_id }) => (
          <div id={restaurant_category_name} key={restaurant_category_id}>
            <Link to={restaurant_category_id} activeClass="active">
              {restaurant_category_name}
            </Link>
          </div>
        )
      )}
    </>
  );
};
