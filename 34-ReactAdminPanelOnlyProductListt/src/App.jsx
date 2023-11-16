import { useState } from "react";
import "./App.css";
import Button from "./Button.jsx";
import Table from "./Table.jsx";
import Input from "./Input.jsx";
import Form from "./Form.jsx";
import Discontinued from "./Discontinued.jsx";
function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
    <>
      <Form
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        data={data}
        setData={setData}
      />
      <Button data={data} setData={setData} />

      <Input />
      <Discontinued data={data} setData={setData} />
      <Table data={data} setData={setData} />
    </>
  );
}

export default App;
