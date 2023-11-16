import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Table = ({ data, setData }) => {
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
  }, []);
  const Delete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(() => {
      setData((prevData) => prevData.filter((item) => item.id !== id));
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
            <th>Discontinued</th>
            <th>UnitsInStock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, i) => {
            const rowColor = element.unitsInStock < 20 ? "red-color" : "";
            return (
              <tr key={element.id} className={rowColor}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.unitPrice}</td>
                <td>{element.discontinued ? "True" : "False"}</td>
                <td>{element.unitsInStock}</td>
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
