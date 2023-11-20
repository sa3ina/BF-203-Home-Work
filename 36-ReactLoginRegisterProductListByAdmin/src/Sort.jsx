import React from "react";
import styles from "./sort.module.css";
function Sort({ products, setProducts }) {
  return (
    <>
      <div className="buttons">
        <button
          className={styles.min}
          onClick={() => {
            const filtered = [...products].sort(
              (a, b) => a.unitPrice - b.unitPrice
            );
            setProducts(filtered);
          }}
        >
          min to max
        </button>
        <button
          className={styles.max}
          onClick={() => {
            const filtered = [...products].sort(
              (a, b) => b.unitPrice - a.unitPrice
            );

            setProducts(filtered);
          }}
        >
          max to min
        </button>
      </div>
    </>
  );
}
export default Sort;
