import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Table = ({ product, setProduct }) => {
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, []);
  const Delete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(() => {
      setProduct((prevData) => prevData.filter((item) => item.id !== id));
    });
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>StockCount</th>
            <th>Sale</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((element) => {
            const textColor = element.unitsInStock < 10 ? "red-color" : "";
            const rowColor = element.reorderLevel != 0 ? "green-color" : "";

            return (
              <tr key={element.id} className={`${textColor} ${rowColor}`}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.unitPrice}</td>
                <td>{element.unitsInStock}</td>
                <td>{element.discontinued ? "True" : "False"}</td>

                <td>
                  <button className="edit">edit</button>
                </td>
                <td>
                  <button className="delete" onClick={() => Delete(element.id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
