import axios from "axios";
import { base_Url } from "./index";

export async function getAllUsers(id) {
  let result;
  result = await axios(base_Url + "users").then((res) => {
    return res.data;
  });
  return result;
}

export async function putUsers(id, obj) {
  let result;
  result = await axios.put(base_Url + "users/" + id, obj).then((res) => {
    return res.data;
  });
  return result;
}
export async function getUsers(id) {
  let result;
  result = await axios(base_Url + "users/" + id).then((res) => {
    return res.data;
  });
  return result;
}
