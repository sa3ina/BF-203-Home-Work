import { useState } from "react";
import Form from "./Form.jsx";
import "./App.css";
import Table from "./Table.jsx";
import Register from "./Register.jsx";
import Edit from "./Edit.jsx";
function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [check, setCheck] = useState(false);
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [edit, setEdit] = useState("");
  return (
    <>
      <Form
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        data={data}
        setData={setData}
        check={check}
        setCheck={setCheck}
      />
      {!check && (
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
      )}
      {check && <Table product={product} setProduct={setProduct} />}
      {check && (
        <Edit
          nameEdit={nameEdit}
          setNameEdit={setNameEdit}
          priceEdit={priceEdit}
          setPriceEdit={setPriceEdit}
          edit={edit}
          setEdit={setEdit}
        />
      )}
    </>
  );
}

export default App;
