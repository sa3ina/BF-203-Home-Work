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
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Table from "../pages/table/Table";
import Card from "./Card";
import Basket from "../pages/basket/Basket";
import Logout from "./Logout";
import Wishlist from "../pages/wishlist/Wishlist";
import Search from "./Search";
import Sort from "./Sort";
import { useState } from "react";

function Home() {}

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [price, setPrice] = useState("");
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState([]);
  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  return (
    <Router>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{!check && <Link to="login">Login</Link>}</li>

            <li className="classnone">
              {!check && <Link to="register">Register</Link>}
            </li>
            <li className="classnone">
              {check && <Link to="logout">Log out</Link>}
            </li>
          </div>
          <div className="classnone">
            <li>
              <Link to="basket">Basket</Link>
            </li>
            <li>
              <Link to="wishlist">Wishlist</Link>
            </li>
            <li>{isAdmin && check && <Link to="table">Product table</Link>}</li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />

              {check && <Search setSearch={setSearch} search={search} />}
              {check && <Sort products={products} setProducts={setProducts} />}
              {check && (
                <Card
                  setSearch={setSearch}
                  search={search}
                  products={products}
                  setProducts={setProducts}
                  user={user}
                  setUser={setUser}
                />
              )}
            </>
          }
        />
        <Route
          path="login"
          element={
            <>
              <Login
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                data={data}
                setData={setData}
                check={check}
                setCheck={setCheck}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                user={user}
                setUser={setUser}
              />
            </>
          }
        />
        <Route
          path="/"
          element={<Table product={product} setProduct={setProduct} />}
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
              isAdmin={isAdmin}
              setIsAdmin={setIsAdmin}
              check={check}
              setCheck={setCheck}
            />
          }
        />
        <Route path="basket" element={<Basket />} />
        <Route
          path="wishlist"
          element={<Wishlist user={user} setUser={setUser} />}
        />
        <Route
          path="table"
          element={
            isAdmin && (
              <Table
                product={product}
                setProduct={setProduct}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                setData={setData}
                data={data}
              />
            )
          }
        ></Route>
        <Route path="logout" element={<Logout setCheck={setCheck} />} />
      </Routes>
    </Router>
  );
}

export default App;
