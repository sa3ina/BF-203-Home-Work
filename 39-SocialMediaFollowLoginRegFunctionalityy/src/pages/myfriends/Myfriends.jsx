import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import styles from "../../assets/styles/myfriends.module.css";

const Myfriends = ({
  users,
  setUsers,
  request,
  setRequest,
  blocked,
  setBlockedUsers,
}) => {
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
      setFriends(res.data.friends);
    });
  }, [refreshUsers]);
  return (
    <div className={styles.container}>
      {" "}
      <h2>My friends</h2>
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
                    let friendId = e.target.getAttribute("user-id");

                    const updatedFriends = friends.filter(
                      (friend) => friend.id !== friendId
                    );
                    setFriends(updatedFriends);

                    const clickedUser = users.find(
                      (user) => user.id === friendId
                    );
                    const updatedClickedFriends = clickedUser.friends.filter(
                      (friend) => friend.id !== user.id
                    );

                    axios
                      .patch(`http://localhost:3000/users/${user.id}`, {
                        friends: updatedFriends,
                      })
                      .then(() => {
                        axios.patch(`http://localhost:3000/users/${friendId}`, {
                          friends: updatedClickedFriends,
                        });
                        setRefreshUsers((prevState) => !prevState);
                      })
                      .catch((error) => {
                        console.error("Error removing friend:", error);
                      });
                  }}
                >
                  Unfriend
                </button>
                <button
                  user-id={element.id}
                  className={styles.block}
                  onClick={(e) => {
                    let blockedUserId = e.target.getAttribute("user-id");

                    const userToBlock = users.find(
                      (user) => user.id === blockedUserId
                    );
                    const updatedBlocked = [
                      ...blocked,
                      { id: blockedUserId, name: userToBlock.name },
                    ];

                    axios
                      .patch(`http://localhost:3000/users/${user.id}`, {
                        blocked: updatedBlocked,
                      })
                      .then(() => {
                        setBlockedUsers(updatedBlocked);
                        setRefreshUsers((prevState) => !prevState);
                      })
                      .catch((error) => {
                        console.error("Error blocking user:", error);
                      });
                  }}
                >
                  Block
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myfriends;
