import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import "../assets/styles/App.css";
import Login from "../pages/login/Login.jsx";
import Register from "../pages/register/Register.jsx";
import Friends from "../pages/friends/Friends.jsx";
import Requests from "../pages/requests/Requests.jsx";
import Myfriends from "../pages/myfriends/Myfriends.jsx";

import Blocked from "../pages/blocked/Blocked.jsx";
import Logout from "../pages/logout/Logout.jsx";

import { useState } from "react";

function Home() {}

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [check, setCheck] = useState(false);
  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [user, setUser] = useState("");
  const [request, setRequest] = useState([]);
  const [search, setSearch] = useState("");
  const [blocked, setBlockedUsers] = useState([]);
  return (
    <Router>
      <nav>
        <ul>
          <div>
            <li>{<Link to="/">Login</Link>}</li>

            <li>{<Link to="register">Register</Link>}</li>
            <li>{<Link to="logout">Log out</Link>}</li>
          </div>
          <div>
            <li>
              <Link to="friends">Users</Link>
            </li>
            <li>
              <Link to="myfriends">Friends</Link>
            </li>
            <li>
              <Link to="requests">Requests</Link>
            </li>
            <li>
              <Link to="blocked">Blocked</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                check={check}
                setCheck={setCheck}
                user={user}
                setUser={setUser}
                users={users}
                setUsers={setUsers}
              />
            </>
          }
        />

        <Route
          path="register"
          element={
            <Register
              nameRegister={nameRegister}
              setNameRegister={setNameRegister}
              emailRegister={emailRegister}
              setEmailRegister={setEmailRegister}
              setPasswordRegister={setPasswordRegister}
              passwordRegister={passwordRegister}
              check={check}
              setCheck={setCheck}
            />
          }
        />
        <Route
          path="friends"
          element={
            <Friends
              users={users}
              setUsers={setUsers}
              request={request}
              setRequest={setRequest}
              search={search}
              setSearch={setSearch}
              blocked={blocked}
              setBlockedUsers={setBlockedUsers}
            />
          }
        />
        <Route
          path="myfriends"
          element={
            <Myfriends
              users={users}
              setUsers={setUsers}
              request={request}
              setRequest={setRequest}
            />
          }
        />
        <Route
          path="requests"
          element={
            <Requests
              users={users}
              setUsers={setUsers}
              request={request}
              setRequest={setRequest}
            />
          }
        />
        <Route
          path="blocked"
          element={
            <Blocked
              users={users}
              setUsers={setUsers}
              request={request}
              setRequest={setRequest}
              blocked={blocked}
              setBlockedUsers={setBlockedUsers}
            />
          }
        />

        <Route path="logout" element={<Logout setCheck={setCheck} />} />
      </Routes>
    </Router>
  );
}

export default App;
