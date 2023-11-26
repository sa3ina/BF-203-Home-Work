import { useNavigate } from "react-router-dom";
function Logout({ setCheck }) {
  setCheck(false);
  const navigate = useNavigate();

  localStorage.removeItem("user");
  navigate("/");
}
export default Logout;
