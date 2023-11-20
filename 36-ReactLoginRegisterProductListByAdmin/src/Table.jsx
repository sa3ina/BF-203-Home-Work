import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./table.module.css";
import { useNavigate } from "react-router-dom";
const Table = ({
  product,
  setProduct,
  name,
  setName,
  price,
  setPrice,
  setData,
  data,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(true);
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setProduct(res.data);
    });
  }, []);
  const Delete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(() => {
      setProduct((prevData) => prevData.filter((item) => item.id !== id));
    });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="forms">
        <form
          action=""
          className={styles.formCont}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={name}
            className={`${styles.inputt} ${
              formSubmitted ? "form-submitted" : ""
            }`}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={price}
            className={`${styles.inputt} ${
              formSubmitted ? "form-submitted" : ""
            }`}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button
            className={styles.button}
            type="submit"
            onClick={() => {
              let newData = {
                name: name,
                unitPrice: price,
              };
              setName("");
              setPrice("");

              axios
                .post("https://northwind.vercel.app/api/products/", newData)
                .then((res) => {
                  setProduct([...product, res.data]);
                  setFormSubmitted(!formSubmitted);
                });
            }}
          >
            Post
          </button>
        </form>
        <form
          action=""
          className={styles.formCont}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={name}
            className={`${styles.inputt} ${
              formSubmitted ? "form-submitted" : ""
            }`}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={price}
            className={`${styles.inputt} ${
              formSubmitted ? "form-submitted" : ""
            }`}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button
            className={styles.button1}
            type="submit"
            onClick={() => {
              let editedData = {
                name: name,
                unitPrice: price,
              };
              setName("");
              setPrice("");

              axios
                .patch(
                  "https://northwind.vercel.app/api/products/" + edit.id,
                  editedData
                )
                .then((res) => {
                  const index = product.findIndex(
                    (elem) => elem.id === res.data.id
                  );
                  product[index] = res.data;
                  setProduct([...product]);
                  setEdit(null);
                });
            }}
          >
            Edit
          </button>
        </form>
      </div>

      <div className={styles.table}>
        <table className={styles.tableInf}>
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
              const rowColor =
                element.reorderLevel != 0 ? "green-color" : "white-color";

              return (
                <tr key={element.id} className={`${textColor} ${rowColor}`}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.unitPrice}</td>
                  <td>{element.unitsInStock}</td>
                  <td>{element.discontinued ? "True" : "False"}</td>

                  <td>
                    <button
                      edit-id={element.id}
                      className={styles.edit}
                      onClick={(e) => {
                        product.find((edit) => {
                          edit.id == e.target.getAttribute("edit-id");
                        });
                        setEdit(
                          product.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("edit-id")
                          )
                        );
                        setName(
                          product.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("edit-id")
                          ).name
                        );
                        setPrice(
                          product.find(
                            (elem) =>
                              elem.id == e.target.getAttribute("edit-id")
                          ).unitPrice
                        );
                      }}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.delete}
                      onClick={() => {
                        Delete(element.id);
                        navigate("/table");
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
