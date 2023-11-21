import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import styles from "../assets/styles/card.module.css";
import { getAllUsers, getUsers, putUsers } from "../middleware/api/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ search, setSearch, products, setProducts, user }) => {
  const [basket, setBasket] = useState([]);
  const [wish, setWish] = useState([]);

  const isItemInWishlist = (itemId) => wish.some((item) => item.id === itemId);
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setProducts(res.data);
    });

    let arr = JSON.parse(localStorage.getItem("basket"));
    arr ? setBasket(arr) : setBasket([]);
    let wish = JSON.parse(localStorage.getItem("wishlist"));
    wish ? setWish(wish) : setWish([]);
  }, []);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wish));
  }, [wish]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {filteredProducts.map((element) => (
          <div key={element.id} className={styles.card}>
            <img
              className={styles.image}
              src={
                "https://images.unsplash.com/photo-1700248123701-085cdc5c3e83?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{element.name}</h3>
              <p className={styles.desc}>
                As the leaves fall, they remind us that sometimes, to create
                something new, we must shed the old.
              </p>
              <p className={styles.price}>Price: ${element.unitPrice}</p>
              <button
                className={styles.button}
                product-id={element.id}
                onClick={(e) => {
                  let itemInfo = products.find(
                    (item) => item.id == e.target.getAttribute("product-id")
                  );
                  setBasket([...basket, itemInfo]);

                  getUsers(user).then((res) => {
                    let obj = res;

                    obj.basket = [...basket, itemInfo];

                    putUsers(user, { basket: obj.basket });
                  });
                }}
              >
                Add to Cart
              </button>
              <button
                className={`heart ${
                  isItemInWishlist(element.id) ? "red" : "black"
                }`}
                wish-id={element.id}
                onClick={(e) => {
                  if (!wish.some((item) => item.id === element.id)) {
                    setWish([...wish, element]);
                    getUsers(user).then((res) => {
                      let obj = res;

                      obj.wish = [...wish, element];
                      console.log(obj.wish);
                      putUsers(user, { wishlist: obj.wish });
                    });
                  } else {
                    const filtered = wish.filter(
                      (item) => item.id !== element.id
                    );
                    setWish(filtered);
                    getUsers(user).then((res) => {
                      let obj = res;
                      console.log(obj);
                      obj.wish = filtered;
                      console.log(obj.wish);
                      putUsers(user, { wishlist: obj.wish });
                    });
                  }
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>

              <p className="discount">
                {element.unitsInStock < 100 && element.unitsInStock != 0
                  ? element.unitsInStock
                  : ""}
                %
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
