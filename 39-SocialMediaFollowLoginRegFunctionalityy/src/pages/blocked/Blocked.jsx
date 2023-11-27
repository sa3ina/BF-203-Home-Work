import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import styles from "../../assets/styles/blocked.module.css";

const Blocked = ({
  users,
  setUsers,
  request,
  setRequest,
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
  const filteredUsers = users.filter((item) => item.id !== user.id);

  useEffect(() => {
    axios(`http://localhost:3000/users/${user.id}`).then((res) => {
      setBlockedUsers(res.data.blocked);
    });
  }, [refreshUsers]);
  console.log(blocked);
  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Blocked Users</h2>
        {blocked.length === 0 ? (
          <p>No blocked users at the moment.</p>
        ) : (
          <ul
            className={styles.ul}
            style={{ listStyleType: "none", padding: 0 }}
          >
            {blocked.map((request) => (
              <li
                className={styles.li}
                key={request.id}
                style={{
                  padding: "15px",
                  marginBottom: "20px",
                  width: "60%",
                }}
              >
                <div className={styles.circle}></div>
                <span style={{ marginRight: "10px" }}>{request.name}</span>

                <button
                  className={styles.unblock}
                  user-id={request.id}
                  style={{
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    let blockedUserId = e.target.getAttribute("user-id");

                    const updatedBlocked = blocked.filter(
                      (user) => user.id !== blockedUserId
                    );
                    const updatedUser = {
                      ...user,
                      blocked: updatedBlocked,
                    };

                    localStorage.setItem("user", JSON.stringify(updatedUser));

                    axios
                      .patch(`http://localhost:3000/users/${user.id}`, {
                        blocked: updatedBlocked,
                      })
                      .then(() => {
                        setBlockedUsers(updatedBlocked);
                        setRefreshUsers((prevState) => !prevState);
                      })
                      .catch((error) => {
                        console.error("Error unblocking user:", error);
                      });
                  }}
                >
                  Unblock
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Blocked;
