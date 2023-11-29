/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
};

export default PrivateRoute;

