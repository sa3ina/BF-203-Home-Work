import { useNavigate } from "react-router-dom";
function Logout({ setCheck }) {
  setCheck(false);
  const navigate = useNavigate();
  navigate("/login");
}
export default Logout;
