import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Edit({
  nameEdit,
  setNameEdit,
  priceEdit,
  setPriceEdit,
  edit,
  setEdit,
  product,
}) {
  return (
    <form
      className="form-edit"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="">Name</label>
      <input
        value={nameEdit}
        onChange={(e) => {
          setNameEdit(e.target.value);
        }}
      />
      <label htmlFor="">Price</label>
      <input
        value={priceEdit}
        onChange={(e) => {
          setPriceEdit(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          //   let obj = {
          //     name: nameEdit,
          //     unitPrice: priceEdit,
          //   };
          //   setEdit((prevProd) => prevProd.filter((item) => item.id !== id));
          //   console.log();
          //   axios
          //     .patch("https://northwind.vercel.app/api/products/" + item.id, obj)
          //     .then((res) => {
          //       let arr = [...data];
          //       let index;
          //       let findElem = arr.find((product) => product.id == res.data.id);
          //       console.log(arr.find((product) => product.id == res.data.id));
          //       data.forEach((product, i) => {
          //         if (product.id == findElem.id) {
          //           console.log("element tapildi", "indeksi ise----", i);
          //           index = i;
          //         }
          //       });
          //       data[index] = res.data;
          //       setData([...data]);
          //     });
        }}
      >
        Edit
      </button>
    </form>
  );
}
export default Edit;
