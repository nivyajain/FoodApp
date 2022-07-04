import React, { useState, useEffect } from "react";
import Card from "../BoxCard/Card";
import "./DataDisplay.css";

const DataDisplay = ({ items, categories }) => {
  console.log("items", items, categories);
  return (
    <>
      {categories.map(
        ({ restaurant_category_id, restaurant_category_name }) => (
          <>
            <h3>{restaurant_category_name}</h3>

            <div className="crd" id={restaurant_category_id}>
              {items[restaurant_category_id]?.map(
                ({
                  item_id,
                  item_name,
                  item_description,
                  item_price,
                  image_thumbnail_url,
                }) => (
                  <Card>
                    <div className="data2" key={item_id}>
                      <h3>{item_name}</h3>
                      <p>{item_description}</p>
                      <p className="price"> {item_price}</p>
                    </div>
                    <div>
                      <img src={image_thumbnail_url} />
                    </div>
                  </Card>
                )
              )}
            </div>
          </>
        )
      )}
    </>
  );
};
export default DataDisplay;
