import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import styles from "../../assets/styles/requests.module.css";

const Requests = ({ users, setUsers, request, setRequest }) => {
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
      console.log(res.data.requests);
      setRequest(res.data.requests);
    });
  }, [refreshUsers]);

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Friend Requests</h2>
        {request?.length === 0 ? (
          <p>No friend requests at the moment.</p>
        ) : (
          <ul
            className={styles.ul}
            style={{ listStyleType: "none", padding: 0 }}
          >
            {request?.map((request) => (
              <li
                className={styles.li}
                key={request.id}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  width: "60%",
                }}
              >
                <div className={styles.circle}></div>
                <span style={{ marginRight: "10px" }}>{request.name}</span>
                <button
                  user-id={request.id}
                  style={{
                    marginRight: "10px",

                    backgroundColor: "#4895ef",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    let requesterInfo = users.find(
                      (elem) => elem.id === request.id
                    );
                    let currentUserInfo = users.find(
                      (elem) => elem.id === user.id
                    );

                    let newFriend = {
                      name: requesterInfo.name,
                      id: requesterInfo.id,
                    };
                    let currentInfo = {
                      name: currentUserInfo.name,
                      id: currentUserInfo.id,
                    };
                    axios
                      .patch(`http://localhost:3000/users/${user.id}`, {
                        friends: currentUserInfo.friends
                          ? [...currentUserInfo.friends, newFriend]
                          : [newFriend],
                        requests: currentUserInfo.requests.filter(
                          (req) => req.id !== request.id
                        ),
                      })
                      .then(() => {
                        axios
                          .patch(
                            `http://localhost:3000/users/${requesterInfo.id}`,
                            {
                              friends: requesterInfo.friends
                                ? [...requesterInfo.friends, currentInfo]
                                : [currentInfo],
                              requests: requesterInfo.requests.filter(
                                (req) => req.id !== user.id
                              ),
                            }
                          )
                          .then(() => {
                            setRefreshUsers((prevState) => !prevState);
                          });
                      });
                  }}
                >
                  Accept
                </button>
                <button
                  user-id={request.id}
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    let userInfo = users.find(
                      (elem) => elem.id === e.target.getAttribute("user-id")
                    );

                    const updatedRequests = userInfo.requests.filter(
                      (req) => req.id !== user.id
                    );

                    axios
                      .patch(`http://localhost:3000/users/${user.id}`, {
                        requests: updatedRequests,
                      })
                      .then(() => {
                        setRequest(updatedRequests);
                        setRefreshUsers((prevState) => !prevState);
                      });
                  }}
                >
                  Reject
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Requests;
