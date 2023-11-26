import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";

import styles from "../../assets/styles/basket.module.css";
const Basket = () => {
  let arr = JSON.parse(localStorage.getItem("basket"));

  console.log(arr);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {arr.map((elem, i) => (
          <div key={i} className={styles.card}>
            <img
              className={styles.image}
              src={
                "https://images.unsplash.com/photo-1700248123701-085cdc5c3e83?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{elem.name}</h3>
              <p className={styles.desc}>
                As the leaves fall, they remind us that sometimes, to create
                something new, we must shed the old.
              </p>
              <p className={styles.price}>${elem.unitPrice}</p>
              <button
                className={styles.button}
                product-id={elem.id}
                onClick={(e) => {}}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;