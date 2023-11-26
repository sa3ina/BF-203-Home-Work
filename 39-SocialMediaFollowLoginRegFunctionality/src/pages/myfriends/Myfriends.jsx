import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import styles from "../../assets/styles/myfriends.module.css";

const Myfriends = ({ users, setUsers, request, setRequest }) => {
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, [refreshUsers]);

  let user = JSON.parse(localStorage.getItem("user")) || [];
  const filteredUsers = users.filter((item) => item.id !== user.id);
  useEffect(() => {
    axios(`http://localhost:3000/users/${user.id}`).then((res) => {
      console.log(res.data.friends);
      setFriends(res.data.friends);
    });
  }, [refreshUsers]);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {friends.map((element) => (
          <div key={element.id} className={styles.card}>
            <div className={styles.color}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{element.name}</h3>
              <div className={styles.buttons}>
                <button
                  className={styles.button}
                  user-id={element.id}
                  onClick={(e) => {
                    let userInfo = users.find(
                      (elem) => elem.id == e.target.getAttribute("user-id")
                    );

                    let newRequest = {
                      name: user.name,
                      id: user.id,
                    };
                    const requestExists = userInfo.requests.some(
                      (req) => req.id === user.id
                    );

                    if (requestExists) {
                      const updatedRequests = userInfo.requests.filter(
                        (req) => req.id !== user.id
                      );

                      axios
                        .patch(`http://localhost:3000/users/${userInfo.id}`, {
                          requests: updatedRequests,
                        })
                        .then(() => {
                          setRefreshUsers((prevState) => !prevState);
                        });
                    } else {
                      axios
                        .patch(`http://localhost:3000/users/${userInfo.id}`, {
                          requests: userInfo.requests
                            ? [...userInfo.requests, newRequest]
                            : [newRequest],
                        })
                        .then(() => {
                          setRefreshUsers((prevState) => !prevState);
                        });
                    }

                    console.log(user.requests);
                  }}
                >
                  Friends
                </button>
                <button className={styles.block}>Block</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myfriends;
