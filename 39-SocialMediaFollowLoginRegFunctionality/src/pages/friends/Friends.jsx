import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import styles from "../../assets/styles/friends.module.css";

const Friends = ({
  users,
  setUsers,
  request,
  setRequest,
  search,
  setSearch,
  blocked,
  setBlockedUsers,
}) => {
  const [refreshUsers, setRefreshUsers] = useState(false);

  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, [refreshUsers]);

  let user = JSON.parse(localStorage.getItem("user")) || [];
  useEffect(() => {
    axios(`http://localhost:3000/users/${user.id}`).then((res) => {
      setBlockedUsers(res.data.blocked);
    });
  }, [refreshUsers]);

  let currentUser = JSON.parse(localStorage.getItem("user")) || {};
  const usersWhoBlockedCurrentUser = users.filter(
    (item) =>
      item.blocked && item.blocked.some((block) => block.id === currentUser.id)
  );

  const filteredUsers = users.filter((item) => {
    const isNotCurrentUser = item.id !== currentUser.id;
    const matchesSearch =
      search &&
      item.name &&
      item.name.toLowerCase().includes(search.toLowerCase());
    const notBlockedByCurrentUser = !blocked.includes(item.id);
    const currentUserNotBlocked = !item.blocked?.some(
      (block) => block.id === currentUser.id
    );
    const notBlockedByUser = !currentUser.blocked?.some(
      (block) => block.id === item.id
    );

    return (
      isNotCurrentUser &&
      (!search || matchesSearch) &&
      notBlockedByCurrentUser &&
      currentUserNotBlocked &&
      notBlockedByUser
    );
  });

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        placeholder="Type to search.."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className={styles.cardContainer}>
        {filteredUsers.map((element) => (
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

                    const isFriend =
                      user.friends &&
                      user.friends.some((friend) => friend.id === element.id);
                  }}
                >
                  {users
                    .find((user) => user.id === element.id)
                    ?.requests.some((req) => req.id === currentUser.id)
                    ? "Request sent"
                    : currentUser.friends.some(
                        (friend) => friend.id === element.id
                      )
                    ? "Friends"
                    : "Add to Friends"}
                </button>
                <button
                  user-id={element.id}
                  className={styles.block}
                  onClick={(e) => {
                    let blockedUserId = e.target.getAttribute("user-id");

                    let userToBlock = users.find(
                      (user) => user.id === blockedUserId
                    );

                    let updatedUser = {
                      ...user,
                      blocked: [
                        ...(user.blocked || []),
                        { id: blockedUserId, name: userToBlock.name },
                      ],
                    };

                    axios
                      .put(
                        `http://localhost:3000/users/${user.id}`,
                        updatedUser
                      )
                      .then(() => {
                        const updatedBlockedUsers = [
                          ...(blocked || []),
                          { id: blockedUserId, name: userToBlock.name },
                        ];
                        setBlockedUsers(updatedBlockedUsers);
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

export default Friends;
