import { useNavigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    return token ? children : navigate("/login");
}

export default PrivateRoute;
